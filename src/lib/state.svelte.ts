import { browser } from '$app/environment';
export const createCounter = (initialCount = 0) => {
	let count = $state(initialCount);

	function increment() {
		count += 1;
	}

	function reduce() {
		if (count > 0) count -= 1;
	}

	return {
		get count() {
			return count;
		},
		increment,
		reduce
	};
};

export const createLocalStorageCounter = (storageName: string) => {
	let initialCount = 0;
	if (!browser) return createCounter(initialCount);

	const storageCount = Number(localStorage.getItem(storageName));
	if (!isNaN(storageCount)) {
		initialCount = Number(storageCount);
	}

	let count = $state(initialCount);

	function updateLocalStorage() {
		localStorage.setItem(storageName, count.toString());
	}

	function increment() {
		count += 1;
		updateLocalStorage();
	}

	function reduce() {
		if (count > 0) {
			count -= 1;
			updateLocalStorage();
		}
	}

	return {
		get count() {
			return count;
		},
		increment,
		reduce
	};
};
