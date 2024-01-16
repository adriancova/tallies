import {
	GITHUB_ID,
	GITHUB_SECRET,
	GOOGLE_ID,
	GOOGLE_SECRET,
	GOOGLE_CALLBACK_URL
} from '$env/static/private';
import { Lucia } from 'lucia';
import { dev } from '$app/environment';
import { GitHub, Google } from 'arctic';
import { D1Adapter } from '@lucia-auth/adapter-sqlite';
import type { GitHubUser } from '../../routes/auth/github/callback/+server';
import type { GoogleUser } from '../../routes/auth/google/callback/+server';
import type { D1Database } from '@cloudflare/workers-types';

if (!GITHUB_ID || !GITHUB_SECRET) {
	throw new Error('Missing GitHub config values');
}

if (!GOOGLE_ID || !GOOGLE_SECRET || !GOOGLE_CALLBACK_URL) {
	throw new Error('Missing Google config values');
}

let lucia: Lucia<
	Record<never, never>,
	{
		githubId: number;
		githubUser: GitHubUser;
		googleId: string;
		googleUser: GoogleUser;
		email: string;
	}
>;
export function getLucia(D1: D1Database) {
	if (!lucia) {
		const adapter = new D1Adapter(D1, {
			user: 'user',
			session: 'session'
		});
		lucia = new Lucia(adapter, {
			sessionCookie: {
				attributes: {
					// set to `true` when using HTTPS
					secure: !dev
				}
			},
			getUserAttributes: (attributes) => {
				return {
					// attributes has the type of DatabaseUserAttributes
					githubId: attributes.github_id,
					githubUser: attributes.github_user,
					googleId: attributes.google_id,
					googleUser: attributes.google_user,
					email: attributes.email
				};
			}
		});
	}
	return lucia;
}

export const github = new GitHub(GITHUB_ID, GITHUB_SECRET);
export const google = new Google(GOOGLE_ID, GOOGLE_SECRET, GOOGLE_CALLBACK_URL);

interface DatabaseUserAttributes {
	github_id: number;
	github_user: GitHubUser;
	google_id: string;
	google_user: GoogleUser;
	email: string;
	api_key: string;
}

declare module 'lucia' {
	interface Register {
		Lucia: typeof Lucia;
		DatabaseUserAttributes: DatabaseUserAttributes;
	}
}
