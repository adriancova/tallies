import type { LayoutLoad } from './$types';
import { browser } from '$app/environment';

export const load: LayoutLoad = async (event) => {
	const globalClicks = 20;
	const lsTallies = [];
	if (browser) {
		const browserTallies = JSON.parse(localStorage.getItem('tallies') ?? '[]');
		console.log('browserTallies', browserTallies);
		lsTallies.push(...browserTallies);
	}
	const tallies = [...lsTallies, ...event.data.serverTallies];
	if (browser) {
		localStorage.setItem('tallies', JSON.stringify(tallies));
	}
	return { tallies, globalClicks };
};
