<script lang="ts">
	import Autoplay from 'embla-carousel-autoplay';
	import * as Carousel from '$lib/components/ui/carousel/index.js';
	import TallyCard from '$lib/components/TallyCard.svelte';

	const items = [
		{
			title: 'Da seguimiento a tus objetivos.',
			tallyExamples: [
				{ isGlobal: true, tallyTitle: 'Gym', tallyDescription: 'Visitas al Gym' },
				{ isGlobal: true, tallyTitle: 'Ahorros', tallyDescription: 'Dinero total ahorrado' },
				{ isGlobal: true, tallyTitle: 'Libros', tallyDescription: 'Libros leídos' },
				{
					isGlobal: true,
					tallyTitle: 'Kilómetros',
					tallyDescription: 'Km totales caminando ó corriendo'
				}
			]
		},
		{
			title: 'Cuantifica tus hábitos.',
			tallyExamples: [
				{
					isGlobal: true,
					tallyTitle: 'Refrescos',
					tallyDescription: 'Latas, botellas o vasos tomados'
				},
				{ isGlobal: true, tallyTitle: 'Café', tallyDescription: 'Tazas de café' },
				{ isGlobal: true, tallyTitle: 'Verduras', tallyDescription: 'Días donde comiste verdura' },
				{ isGlobal: true, tallyTitle: 'Sueño', tallyDescription: 'Días con un buen sueño' }
			]
		},
		{
			title: 'Comparte y compara con tus amigos!',
			tallyExamples: [
				{
					isGlobal: true,
					tallyTitle: 'Series vistas',
					tallyDescription: 'Cuantás series has visto'
				},
				{ isGlobal: true, tallyTitle: 'Cervezas', tallyDescription: 'Cervezas tomadas' },
				{ isGlobal: true, tallyTitle: 'Cigarros', tallyDescription: 'Cigarros fumados' },
				{
					isGlobal: true,
					tallyTitle: 'Vacaciones',
					tallyDescription: 'Vacaciones tomadas (no vale en la casa)'
				}
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
						{#each item.tallyExamples as example, i (i)}
							<TallyCard {...example} />
						{/each}
					</div>
				</div>
			</Carousel.Item>
		{/each}
	</Carousel.Content>
	<Carousel.Previous />
	<Carousel.Next />
</Carousel.Root>
