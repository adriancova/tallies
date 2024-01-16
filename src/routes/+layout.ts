import type { LayoutLoad } from './$types';
import { browser } from '$app/environment';

export const load: LayoutLoad = async (event) => {
	const lsTallies = [];
	const serverTallies = [];
	if (browser) {
		lsTallies.push(JSON.parse(localStorage.getItem('tallies') ?? '[]'));
	}
	if (event.locals?.session) {
		serverTallies.push('server tallies');
	}
	const tallies = [...lsTallies, ...serverTallies];
	if (browser) {
		localStorage.setItem('tallies', JSON.stringify(tallies));
	}
	return { tallies };
};
