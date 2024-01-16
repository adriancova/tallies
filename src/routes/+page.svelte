<script lang="ts">
	import UserTallies from './../lib/components/UserTallies.svelte';
	import Showcase from '$lib/components/Showcase.svelte';
	import Separator from '$lib/components/ui/separator/separator.svelte';
	const tallies: any[] = [];
</script>

<div class="container">
	<Showcase />

	<Separator class="my-8" />

	<UserTallies {tallies} />
</div>
