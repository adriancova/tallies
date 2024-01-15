<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { page } from '$app/stores';
	import { enhance } from '$app/forms';
	import LightSwitch from './ui/light-switch/light-switch.svelte';
	import Logo from './Logo.svelte';
</script>

<header
	class="sticky top-0 z-50 w-full bg-border shadow-sm backdrop-blur supports-[backdrop-filter]:bg-background/60"
>
	<div class={`flex h-14 items-center sm:container max-sm:px-4 md:h-32 `}>
		<Logo />
		<div class="ml-auto flex items-center justify-end gap-2">
			{#if $page.session}
				<form method="post" action="/auth/sign-out" use:enhance>
					<Button type="submit" variant="destructive" size="sm">Cerrar sesión</Button>
				</form>
			{:else}
				<Button href="/dashboard" variant="default" size="sm">Crea una cuenta</Button>
			{/if}
			<LightSwitch />
		</div>
	</div>
</header>
