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
			<Card.Title class="text-2xl">Regístrate</Card.Title>
			<Card.Description>Crea una cuenta con correo y contraseña</Card.Description>
		</Card.Header>
		<Card.Content class="grid gap-4">
			<form class="space-y-6" action="#" method="POST">
				<div>
					<Label for="email">Email*</Label>
					<Input
						type="email"
						id="email"
						placeholder="some@email.com"
						autocomplete="email"
						required
					/>
				</div>

				<div>
					<Label for="password">Password*</Label>
					<Input type="password" id="password" required />
				</div>

				<div>
					<Label for="password2">Confirma tu contraseña*</Label>
					<Input type="password2" id="password2" required />
				</div>
				<div class="text-end">
					<a href="/auth/sign-in" class="pt-2 text-sm underline">
						¿Ya tienes cuenta? Inicia sesión
					</a>
				</div>

				<Button type="submit" variant="default" size="sm" class="w-full">Iniciar sesión</Button>
			</form>
		</Card.Content>
	</Card.Root>
</div>
