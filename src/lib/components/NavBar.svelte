<script lang="ts">
	import DropDownAvatar from './DropDownAvatar.svelte';
	import { cn } from '$lib/utils';
	import { Button } from '$lib/components/ui/button';
	import { page } from '$app/stores';
	import LightSwitch from './ui/light-switch/light-switch.svelte';
	import Logo from './Logo.svelte';

	const navItems = [
		{ label: 'Inicio', href: '/' },
		{ label: 'Tus Tallies & Grupos', href: '/tallies' },
		{ label: 'Global', href: '/global' }
	];
</script>

<header
	class="sticky top-0 z-50 w-full bg-border shadow-sm backdrop-blur supports-[backdrop-filter]:bg-background/60"
>
	<div class={`flex h-14 items-center justify-between sm:container max-sm:px-4 sm:h-32 `}>
		<Logo />

		<div class="mx-auto max-sm:hidden">
			<nav
				class="text-md mx-auto flex items-center space-x-6 font-medium max-md:flex-wrap lg:space-x-16 lg:text-lg"
			>
				{#each navItems as item}
					<a href={item.href} class="transition-colors">
						{item.label}
					</a>
				{/each}
			</nav>
		</div>
		<div class="flex items-center justify-end gap-2 max-sm:ml-auto">
			{#if $page.data.user}
				<DropDownAvatar />
			{:else}
				<Button
					href="/auth/sign-in"
					variant="default"
					size="sm"
					class={cn({ hidden: $page.url.pathname.startsWith('/auth') })}>Inicia sesión</Button
				>
			{/if}
			<LightSwitch />
		</div>
	</div>
</header>
