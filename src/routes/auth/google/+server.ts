import { google } from '$lib/server/auth';
import { generateCodeVerifier, generateState } from 'arctic';
import { error, redirect } from '@sveltejs/kit';
import { dev } from '$app/environment';

import type { RequestEvent } from '@sveltejs/kit';

export async function GET(event: RequestEvent): Promise<Response> {
	if (!google) {
		return error(500, 'Missing Google config values');
	}
	const state = generateState();
	const codeVerifier = generateCodeVerifier();
	const url = await google.createAuthorizationURL(state, codeVerifier);

	event.cookies.set('google_oauth_state', state, {
		path: '/',
		secure: !dev,
		httpOnly: true,
		maxAge: 60 * 10,
		sameSite: 'lax'
	});

	event.cookies.set('google_oauth_code_verifier', codeVerifier, {
		path: '/',
		secure: !dev,
		httpOnly: true,
		maxAge: 60 * 10,
		sameSite: 'lax'
	});

	return redirect(302, url.toString());
}
