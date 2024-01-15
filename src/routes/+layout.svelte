<script>
	import Footer from './../lib/components/Footer.svelte';
	import '../app.pcss';
</script>

<div class="relative flex min-h-screen flex-col" id="page">
	<div class="flex-1">
		<slot />
	</div>
	<Footer />
</div>
