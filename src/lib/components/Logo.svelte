<script lang="ts">
	import { createLocalStorageCounter } from '$lib/state.svelte';
	import { toast } from '@zerodevx/svelte-toast';
	import logo from '$lib/assets/images/logo.svg';

	let { globalClicks } = $props<{ globalClicks: number }>();

	const userClicksCounter = createLocalStorageCounter('clicksLogo');

	let newClicks = $state(0);
	let timer: any;
	const debounce = (callback: () => void, duration: number) => {
		clearTimeout(timer);
		timer = setTimeout(callback, duration);
	};

	const updateClicksToApi = () => {
		debounce(() => {
			console.log('Clicks updated via API', newClicks);
			newClicks = 0;
		}, 3000);
	};

	const handleLogoClick = () => {
		userClicksCounter.increment();
		newClicks++;
		toast.pop();
		toast.push(
			`<strong>+1 click al logo.</strong> <br/> ${globalClicks + userClicksCounter.count} clicks globales. (${userClicksCounter.count} tuyos)`
		);
		updateClicksToApi();
	};
</script>

<div class="flex flex-col">
	<button
		class="flex flex-row items-center justify-center gap-2 py-4 sm:gap-4"
		on:click={handleLogoClick}
	>
		<h1 class="scroll-m-20 text-lg font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
			¡Tallies!
		</h1>
		<img src={logo} alt="logo" class="h-8 rounded-full bg-white sm:h-10 lg:h-12" />
	</button>

	<p class="text-sm italic leading-4">tally: Conteo o monto actual</p>
</div>
