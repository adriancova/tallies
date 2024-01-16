import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async (event) => {
	const serverTallies = [];
	if (event.locals?.session) {
		serverTallies.push('server tallies');
	}
	return { serverTallies };
};
