<script lang="ts">
	import * as Card from '$lib/components/ui/card';
	import { Button } from '$lib/components/ui/button';
	import { Input } from '$lib/components/ui/input';
	import { Label } from '$lib/components/ui/label';
	import Icon from '$lib/components/ui/Icon.svelte';
	const handleForgotPass = () => {
		alert('mamaste, aún no implemento reset password :(');
	};
</script>

<div class="container py-12 md:py-32">
	<Card.Root class="mx-auto max-w-4xl">
		<Card.Header class="space-y-1">
			<Card.Title class="text-2xl">Iniciar Sesión</Card.Title>
			<Card.Description>Crea una cuenta o inicia sesión con redes sociales</Card.Description>
		</Card.Header>
		<Card.Content class="grid gap-4">
			<div class="grid grid-cols-2 gap-6">
				<Button variant="outline" href="/auth/github">
					<Icon name="github" class="mr-2 h-4 w-4" />
					GitHub
				</Button>
				<Button variant="outline" href="/auth/google">
					<Icon name="google" class="mr-2 h-4 w-4" />
					Google
				</Button>
			</div>
			<div class="relative">
				<div class="absolute inset-0 flex items-center">
					<span class="w-full border-t" />
				</div>
				<div class="relative flex justify-center text-xs uppercase">
					<span class="bg-card px-2 text-muted-foreground"> Si lo prefieres utiliza </span>
				</div>
			</div>
			<form class="space-y-6" action="#" method="POST">
				<div>
					<Label for="email">Email</Label>
					<Input
						type="email"
						id="email"
						placeholder="some@email.com"
						autocomplete="email"
						required
					/>
				</div>

				<div>
					<Label for="password">Password</Label>
					<Input type="password" id="password" required />
				</div>
				<div class="text-end">
					<a href="/auth/sign-up" class="pt-2 text-sm underline"> ¿No tienes cuenta? Regístrate </a>
				</div>

				<Button type="submit" variant="default" size="sm" class="w-full">Iniciar sesión</Button>
			</form>
		</Card.Content>
	</Card.Root>
</div>
