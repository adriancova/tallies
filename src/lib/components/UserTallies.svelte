<script lang="ts">
	import TallyCard from '$lib/components/TallyCard.svelte';

	let { tallies } = $props<{ tallies: any[] }>();
</script>

<h3 class="my-8 text-center text-2xl font-bold text-primary">Tus Tallies</h3>

<div class="w-full grid-cols-3 gap-4">
	{#each tallies as { tallyTitle, tallyDescription }, i (i)}
		<TallyCard {tallyTitle} {tallyDescription} />
	{/each}
</div>
