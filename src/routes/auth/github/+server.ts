import { github } from '$lib/server/auth';
import { generateState } from 'arctic';
import { error, redirect } from '@sveltejs/kit';
import { dev } from '$app/environment';

import type { RequestEvent } from '@sveltejs/kit';

export async function GET(event: RequestEvent): Promise<Response> {
	if (!github) {
		return error(500, 'Missing GitHub config values');
	}
	const state = generateState();
	const url = await github.createAuthorizationURL(state);

	event.cookies.set('github_oauth_state', state, {
		path: '/',
		secure: !dev,
		httpOnly: true,
		maxAge: 60 * 10,
		sameSite: 'lax'
	});

	return redirect(302, url.toString());
}
