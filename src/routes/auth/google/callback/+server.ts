import { google, getLucia } from '$lib/server/auth';
import { OAuth2RequestError } from 'arctic';
import { generateId } from 'lucia';
import type { RequestEvent } from '@sveltejs/kit';
import { createUserWithGoogle, getUserByGoogleId } from '$lib/server/api/usersApi';

export async function GET(event: RequestEvent): Promise<Response> {
	const DB = event.platform?.env.DB;
	if (!DB) {
		return new Response(null, {
			status: 500
		});
	}
	const code = event.url.searchParams.get('code');
	const state = event.url.searchParams.get('state');

	const storedState = event.cookies.get('google_oauth_state') ?? null;
	const storedCodeVerifier = event.cookies.get('google_oauth_code_verifier') ?? null;
	if (!code || !storedState || !storedCodeVerifier || state !== storedState) {
		return new Response(null, {
			status: 400
		});
	}

	try {
		const lucia = getLucia(DB);
		const tokens = await google.validateAuthorizationCode(code, storedCodeVerifier);
		const response = await fetch('https://openidconnect.googleapis.com/v1/userinfo', {
			headers: {
				Authorization: `Bearer ${tokens.accessToken}`
			}
		});
		const googleUser: GoogleUser = await response.json();
		console.log('gu', googleUser);
		const existingUser = await getUserByGoogleId(DB, googleUser.sub);

		if (existingUser) {
			const session = await lucia.createSession(existingUser.id, {});
			const sessionCookie = lucia.createSessionCookie(session.id);
			event.cookies.set(sessionCookie.name, sessionCookie.value, {
				path: '.',
				...sessionCookie.attributes
			});
		} else {
			// TODO: user by email logic
			// const existingUserByEmail = await getUserByGoogleId(googleUser.sub);
			const userId = generateId(15);
			await createUserWithGoogle(DB, userId, googleUser.sub, googleUser);
			const session = await lucia.createSession(userId, {});
			const sessionCookie = lucia.createSessionCookie(session.id);
			event.cookies.set(sessionCookie.name, sessionCookie.value, {
				path: '.',
				...sessionCookie.attributes
			});
		}
		return new Response(null, {
			status: 302,
			headers: {
				Location: '/tallies'
			}
		});
	} catch (e) {
		// the specific error message depends on the provider
		if (e instanceof OAuth2RequestError) {
			// invalid code
			return new Response(null, {
				status: 400
			});
		}
		return new Response(null, {
			status: 500
		});
	}
}

export interface GoogleUser {
	sub: string;
	name: string;
	email: string;
}
