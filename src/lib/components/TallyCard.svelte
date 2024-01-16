<script lang="ts">
	import { toast } from '@zerodevx/svelte-toast';
	import { cn } from '$lib/utils';
	import { createLocalStorageCounter } from './../state.svelte';
	import Button from './ui/button/button.svelte';
	import Input from './ui/input/input.svelte';
	import Icon from '$lib/components/ui/Icon.svelte';
	import * as Tooltip from '$lib/components/ui/tooltip';
	import * as Card from '$lib/components/ui/card/index.js';

	let {
		tallyTitle,
		tallyDescription,
		tallyTracked = false,
		tallyCount,
		isGlobal = false
	} = $props<{
		tallyTitle: string;
		tallyDescription: string;
		tallyTracked?: boolean;
		tallyCount?: number;
		isGlobal?: boolean;
	}>();

	let count = $state(tallyCount ?? 0);

	const ToggleTally = () => {
		tallyTracked = !tallyTracked;

		toast.pop();
		toast.push(
			`<strong>${tallyTitle}</strong> <br/> ${tallyTracked ? 'Añadido a tus tallies' : 'Eliminado de tus tallies'}`,
			{}
		);
	};

	const counter = createLocalStorageCounter('tallyCard');
</script>

<Card.Root class="relative w-[300px]">
	<Card.Header class="pb-0">
		<Card.Title>{tallyTitle}</Card.Title>
		<Card.Description>{tallyDescription}</Card.Description>
		<Button class="absolute right-3 top-2 p-0" variant="ghost" on:click={ToggleTally}>
			{#if tallyTracked}
				<Icon name="bellMinus" class="h-8 w-8 text-primary hover:text-white" />
			{:else}
				<Icon name="bellPlus" class="h-8 w-8 hover:text-primary" />
			{/if}
		</Button>
	</Card.Header>
	<Card.Content class="relative flex  items-center justify-center">
		<div class={cn('flex items-center justify-center gap-4 py-4 text-3xl')}>
			{#if !isGlobal}
				<Button class="btn-decrement h-14 text-3xl ">-</Button>
			{/if}
			<Input
				type="number"
				disabled={isGlobal}
				class="h-20 text-center text-3xl"
				min="0"
				value={counter.count}
			/>
			{#if !isGlobal}
				<Button class="btn-increment h-14 text-3xl">+</Button>
				<Button variant="ghost" class="absolute bottom-1 p-0"
					><Icon name="reset" class="h-6 w-6" /></Button
				>
			{/if}
			{#if isGlobal}
				<Tooltip.Root>
					<Tooltip.Trigger asChild let:builder>
						<Button
							builders={[builder]}
							variant="ghost"
							class="absolute bottom-0 flex flex-col items-center p-0 text-center"
							><Icon name="world" class="mx-auto h-6 w-6" /></Button
						>
					</Tooltip.Trigger>
					<Tooltip.Content>
						<p class="text-center text-xs text-muted-foreground">
							Suma de todos los usuarios de tally.
						</p>
					</Tooltip.Content>
				</Tooltip.Root>
			{/if}
		</div>
	</Card.Content>
</Card.Root>
