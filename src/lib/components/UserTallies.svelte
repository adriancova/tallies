<script lang="ts">
	import Autoplay from 'embla-carousel-autoplay';
	import * as Carousel from '$lib/components/ui/carousel/index.js';
	import TallyCard from '$lib/components/TallyCard.svelte';

	let { tallies } = $props<{ tallies: any[] }>();
</script>

<h3 class="my-8 text-center text-2xl font-bold text-primary">Tus Tallies</h3>

{#each tallies as { tallyTitle, tallyDescription }, i (i)}
	<TallyCard {tallyTitle} {tallyDescription} />
{/each}
