import type { LayoutServerLoad } from './$types';

export const load = (async () => {
	const globalClicks = 20;
	return {
		globalClicks
	};
}) satisfies LayoutServerLoad;
