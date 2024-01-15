<script lang="ts">
	import logo from '$lib/assets/images/logo.svg';

	const handleLogoClick = () => {
		console.log('howdy');
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
