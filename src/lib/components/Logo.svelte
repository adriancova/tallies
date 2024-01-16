<script lang="ts">
	import { createLocalStorageCounter } from '$lib/state.svelte';
	import { page } from '$app/stores';
	import { toast } from '@zerodevx/svelte-toast';
	import logo from '$lib/assets/images/logo.svg';

	let { globalClicks } = $props<{ globalClicks: number }>();

	const userClicksCounter = createLocalStorageCounter('userClicks');

	const handleLogoClick = () => {
		userClicksCounter.increment();
		toast.pop();
		toast.push(
			`<strong>Click al logo registrado!</strong> <br/> ${globalClicks + userClicksCounter.count} clicks globales al logo. (${userClicksCounter.count} tuyos!)`
		);
		if ($page.session) {
			// call api to update user clicks
			console.log('pending');
		} else {
			const userClicks = window.localStorage.getItem('tallies:userClicks');
			if (userClicks !== null) {
				const userClicksObj = JSON.parse(userClicks);
				userClicksObj.userClicks = String(Number(userClicksObj.userClicks) + 1);
				window.localStorage.setItem('tallies:userClicks', JSON.stringify(userClicksObj));
			} else {
				const userClicksObj = {
					id: 'logoClicks',
					label: 'Clicks al logo',
					userClicks: '1'
				};
				window.localStorage.setItem('tallies', '1');
			}
		}
	};
</script>

<button
	class="flex flex-row items-center justify-center gap-2 py-4 sm:gap-4"
	on:click={handleLogoClick}
>
	<h1 class="scroll-m-20 text-lg font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
		¡Tallies!
	</h1>
	<img src={logo} alt="logo" class="h-8 rounded-full bg-white sm:h-10 lg:h-12" />
</button>
