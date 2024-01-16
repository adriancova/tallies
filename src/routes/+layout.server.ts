import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async (event) => {
	const serverTallies = [];
	if (event.locals?.session) {
		const sT = [] as string[];
		serverTallies.push(...sT);
	}
	return { serverTallies };
};
