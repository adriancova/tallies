<script>
	import { ModeWatcher } from 'mode-watcher';
	import NavBar from './../lib/components/NavBar.svelte';
	import Footer from './../lib/components/Footer.svelte';
	import '../app.pcss';
</script>

<ModeWatcher />
<div class="relative flex min-h-screen flex-col" id="page">
	<NavBar />
	<div class="flex-1">
		<slot />
	</div>
	<Footer />
</div>
