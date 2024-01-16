<script lang="ts">
	import Autoplay from 'embla-carousel-autoplay';
	import * as Carousel from '$lib/components/ui/carousel/index.js';
	import TallyCard from '$lib/components/TallyCard.svelte';

	const items = [
		{
			title: 'Da seguimiento a tus objetivos.',
			tallyExamples: [
				{ tallyTitle: 'Gym', tallyDescription: 'Visitas al Gym' },
				{ tallyTitle: 'Ahorros', tallyDescription: 'Dinero total ahorrado' },
				{ tallyTitle: 'Libros', tallyDescription: 'Libros leídos' },
				{ tallyTitle: 'Kilómetros', tallyDescription: 'Kilómetros totales caminados ó corridos' }
			]
		},
		{
			title: 'Cuantifica tus hábitos.',
			tallyExamples: [
				{ tallyTitle: 'Refrescos', tallyDescription: 'Cuánto refresco tomas?' },
				{ tallyTitle: 'Café', tallyDescription: 'Tazas de café' },
				{ tallyTitle: 'Verduras', tallyDescription: 'Días donde comiste verdura' },
				{ tallyTitle: 'Sueño', tallyDescription: 'Días con un buen sueño' }
			]
		},
		{
			title: 'Comparte y compara con tus amigos!',
			tallyExamples: [
				{ tallyTitle: 'Series vistas', tallyDescription: 'Cuantás series has visto' },
				{ tallyTitle: 'Cervezas', tallyDescription: 'Cervezas tomadas' },
				{ tallyTitle: 'Cigarros', tallyDescription: 'Cigarros fumados' },
				{ tallyTitle: 'Vacaciones', tallyDescription: 'Vacaciones tomadas (no vale en la casa)' }
			]
		}
	];
</script>

<Carousel.Root
	class="mx-auto w-5/6 max-w-4xl"
	opts={{ loop: true }}
	plugins={[Autoplay({ delay: 10000 })]}
>
	<Carousel.Content>
		{#each items as item, i (i)}
			<Carousel.Item>
				<div class="p-1">
					<h2 class="my-8 text-center text-2xl font-bold text-primary">{item.title}</h2>
					<div class="flex flex-row flex-wrap justify-around gap-y-12">
						{#each item.tallyExamples as { tallyTitle, tallyDescription }, i (i)}
							<TallyCard {tallyTitle} {tallyDescription} />
						{/each}
					</div>
				</div>
			</Carousel.Item>
		{/each}
	</Carousel.Content>
	<Carousel.Previous />
	<Carousel.Next />
</Carousel.Root>
