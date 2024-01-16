<script lang="ts">
	import ChevronDown from '$lib/assets/icons/tabler/chevron-down.svg?raw';
	import PigMoney from '$lib/assets/icons/tabler/pig-money.svg?raw';
	import Puzzle from '$lib/assets/icons/tabler/puzzle.svg?raw';
	import MoodDollar from '$lib/assets/icons/tabler/mood-dollar.svg?raw';
	import SourceCode from '$lib/assets/icons/tabler/source-code.svg?raw';
	import Google from '$lib/assets/icons/google.svg?raw';
	import Github from '$lib/assets/icons/github.svg?raw';
	import Svelte from '$lib/assets/icons/svelte.svg?raw';
	import ShadcnSvelte from '$lib/assets/icons/shadcn-svelte.svg?raw';
	import Mailbox from '$lib/assets/icons/tabler/mailbox.svg?raw';
	import Menu from '$lib/assets/icons/tabler/menu-2.svg?raw';
	import Sun from '$lib/assets/icons/tabler/sun.svg?raw';
	import Moon from '$lib/assets/icons/tabler/moon.svg?raw';
	import X from '$lib/assets/icons/tabler/x.svg?raw';
	import World from '$lib/assets/icons/tabler/world.svg?raw';
	import BellPlus from '$lib/assets/icons/tabler/bell-plus.svg?raw';
	import BellMinus from '$lib/assets/icons/tabler/bell-minus.svg?raw';
	import Reset from '$lib/assets/icons/tabler/reset.svg?raw';
	import ArrowRight from '$lib/assets/icons/tabler/arrow-right.svg?raw';
	import ArrowLeft from '$lib/assets/icons/tabler/arrow-left.svg?raw';
	import Circle from '$lib/assets/icons/lucide/circle.svg?raw';
	export let name: keyof typeof icons;
	export let width = '1rem';
	export let height = '1rem';
	export let focusable: string | number | null | undefined = undefined;
	let icons = {
		trash: {
			box: 32,
			svg: `<path d="M 15 4 C 14.476563 4 13.941406 4.183594 13.5625 4.5625 C 13.183594 4.941406 13 5.476563 13 6 L 13 7 L 7 7 L 7 9 L 8 9 L 8 25 C 8 26.644531 9.355469 28 11 28 L 23 28 C 24.644531 28 26 26.644531 26 25 L 26 9 L 27 9 L 27 7 L 21 7 L 21 6 C 21 5.476563 20.816406 4.941406 20.4375 4.5625 C 20.058594 4.183594 19.523438 4 19 4 Z M 15 6 L 19 6 L 19 7 L 15 7 Z M 10 9 L 24 9 L 24 25 C 24 25.554688 23.554688 26 23 26 L 11 26 C 10.445313 26 10 25.554688 10 25 Z M 12 12 L 12 23 L 14 23 L 14 12 Z M 16 12 L 16 23 L 18 23 L 18 12 Z M 20 12 L 20 23 L 22 23 L 22 12 Z"></path>`
		},
		google: {
			box: 24,
			svg: Google
		},
		github: {
			box: 438,
			svg: Github
		},
		svelte: {
			box: 98,
			svg: Svelte
		},
		shadcnSvelte: {
			box: 256,
			svg: ShadcnSvelte
		},
		sourceCode: {
			box: 24,
			svg: SourceCode
		},
		moodDollar: {
			box: 24,
			svg: MoodDollar
		},
		puzzle: {
			box: 24,
			svg: Puzzle
		},
		pigMoney: {
			box: 24,
			svg: PigMoney
		},
		chevronDown: {
			box: 24,
			svg: ChevronDown
		},
		mailbox: {
			box: 24,
			svg: Mailbox
		},
		menu: {
			box: 24,
			svg: Menu
		},
		sun: {
			box: 24,
			svg: Sun
		},
		moon: {
			box: 24,
			svg: Moon
		},
		x: {
			box: 24,
			svg: X
		},
		world: {
			box: 24,
			svg: World
		},
		bellPlus: {
			box: 24,
			svg: BellPlus
		},
		bellMinus: {
			box: 24,
			svg: BellMinus
		},
		reset: {
			box: 24,
			svg: Reset
		},
		arrowRight: {
			box: 24,
			svg: ArrowRight
		},
		arrowLeft: {
			box: 24,
			svg: ArrowLeft
		},
		circle: {
			box: 24,
			svg: Circle
		}
	} as const;
	let display = icons[name];
</script>

<svg class={$$props.class} {focusable} {width} {height} viewBox="0 0 {display.box} {display.box}"
	>{@html display.svg}</svg
>
