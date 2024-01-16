<script lang="ts">
	import Icon from '$lib/components/ui/Icon.svelte';
	import * as Card from '$lib/components/ui/card/index.js';

	const { tallyTitle, tallyDescription } = $props<{
		tallyTitle: string;
		tallyDescription: string;
	}>();
</script>

<Card.Root class="relative w-[300px]">
	<Card.Header>
		<Card.Title>{tallyTitle}</Card.Title>
		<Card.Description>{tallyDescription}</Card.Description>
		<Icon name="plus" class="absolute right-3 top-2 h-8 w-8 hover:text-primary" />
	</Card.Header>
	<Card.Content class="flex items-center justify-center p-6">
		<div class="flex flex-col items-center justify-center gap-4">
			<h3>{tallyTitle}</h3>
		</div>
	</Card.Content>
</Card.Root>
