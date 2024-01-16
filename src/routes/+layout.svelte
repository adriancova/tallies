<script>
	import { page } from '$app/stores';
	import { ModeWatcher } from 'mode-watcher';
	import { SvelteToast } from '@zerodevx/svelte-toast';
	import NavBar from './../lib/components/NavBar.svelte';
	import Footer from './../lib/components/Footer.svelte';
	import '../app.pcss';
</script>

<ModeWatcher />
<SvelteToast />
<div class="relative flex min-h-screen flex-col" id="page">
	<NavBar globalClicks={$page.data.globalClicks} />
	<div class="flex-1">
		<slot />
	</div>
	<Footer />
</div>

<style>
	:root {
		--toastContainerTop: 2rem;
		--toastContainerRight: auto;
		--toastContainerBottom: auto;
		--toastContainerLeft: calc(50vw - 8rem);
	}
</style>
