import { error } from '@sveltejs/kit';
import type { NewUser, User } from '../db/schema';
import type { GitHubUser } from '../../../routes/auth/github/callback/+server';
import type { GoogleUser } from '../../../routes/auth/google/callback/+server';
import type { D1Database } from '@cloudflare/workers-types';
import appLog from '../utils/logger';

const generateApiKeyWithSha256 = async () => {
	const encoder = new TextEncoder();
	const data = encoder.encode(Math.random().toString());
	const hash = await crypto.subtle.digest('SHA-256', data);
	return Array.from(new Uint8Array(hash))
		.map((b) => b.toString(16).padStart(2, '0'))
		.join('');
};

export const getUsers = async (DB: D1Database) => {
	return await DB.prepare('SELECT * FROM users').run();
};

export const getUserById = async (DB: D1Database, id: string) => {
	return (await DB.prepare('SELECT * FROM users WHERE id = ?').bind(id).first()) as User;
};

export const getUserByGithubId = async (DB: D1Database, githubId: number) => {
	return (await DB.prepare('SELECT * FROM users WHERE github_id = ?')
		.bind(githubId.toString())
		.first()) as User;
};

export const getUserByGoogleId = async (DB: D1Database, googleId: string) => {
	return (await DB.prepare('SELECT * FROM users WHERE google_id = ?')
		.bind(googleId)
		.first()) as User;
};

export const createUser = async (DB: D1Database, userData: NewUser) => {
	const api_key = await generateApiKeyWithSha256();
	const { success } = await DB.prepare(
		`INSERT INTO users (id, api_key, email, github_id, google_id) VALUES (?, ?, ?, ?, ?)`
	)
		.bind(
			userData.id,
			api_key,
			userData.attributes.email,
			userData.attributes.github_id,
			userData.attributes.google_id
		)
		.run();
	if (!success) {
		return error(500, 'failed to create user');
	}
	return { success };
};

export const createUserWithGithub = async (
	DB: D1Database,
	userId: string,
	githubId: number,
	githubUser: GitHubUser
) => {
	const newUser = {
		id: userId,
		attributes: {
			github_id: Number(githubId),
			github_user: githubUser
		}
	} as NewUser;
	const { success } = await DB.prepare('INSERT INTO github_account (id, login) VALUES (?, ?)')
		.bind(githubId, githubUser.login)
		.run();
	if (!success) {
		return error(500, 'failed to create github account');
	}
	try {
		await createUser(DB, newUser);
	} catch (e) {
		appLog.error(`error creating user with github: ${e}`);
		return error(500, 'failed to create user');
	}
	return { success };
};

export const createUserWithGoogle = async (
	DB: D1Database,
	userId: string,
	googleId: string,
	googleUser: GoogleUser
) => {
	const newUser = {
		id: userId,
		attributes: {
			google_id: googleId,
			google_user: googleUser,
			email: googleUser.email
		}
	} as User;
	const { success } = await DB.prepare(
		'INSERT INTO google_account (id, name, email) VALUES (?, ?, ?)'
	)
		.bind(googleId, googleUser.name, googleUser.email)
		.run();
	if (!success) {
		return error(500, 'failed to create github account');
	}
	try {
		await createUser(DB, newUser);
	} catch (e) {
		appLog.error(`error creating user with github: ${e}`);
		return error(500, 'failed to create user');
	}
	return { success };
};

// export const getUserByEmail = async (DB: D1Database,email: string) => {
// 	const user = await db.query.users.findFirst({
// 		where: eq(users.email, email)
// 	});
// 	if (!user) {
// 		appLog.error(`user not found with email ${email}`);
// 		return null;
// 	}
// 	return user;
// };

export const updateUser = async (DB: D1Database, userId: string, newData: Partial<User>) => {
	const user = await getUserById(DB, userId);
	if (!user) {
		return error(404, 'user not found');
	}
	const updatedUser = { ...user, attributes: { ...user.attributes, ...newData.attributes } };
	const { success } = await DB.prepare(`UPDATE users SET attributes = ? WHERE id = ?`)
		.bind(JSON.stringify(updatedUser.attributes), userId)
		.run();
	return { success };
};
