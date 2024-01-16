
<script lang="ts">
  import ArrowLeft from '$lib/assets/icons/arrow-left.svg?raw';
	import ArrowRight from '$lib/assets/icons/arrow-right.svg?raw';
	import BellMinus from '$lib/assets/icons/bell-minus.svg?raw';
	import BellPlus from '$lib/assets/icons/bell-plus.svg?raw';
	import Check from '$lib/assets/icons/check.svg?raw';
	import ChevronDown from '$lib/assets/icons/chevron-down.svg?raw';
	import ChevronRight from '$lib/assets/icons/chevron-right.svg?raw';
	import Circle from '$lib/assets/icons/circle.svg?raw';
	import Github from '$lib/assets/icons/github.svg?raw';
	import Google from '$lib/assets/icons/google.svg?raw';
	import Mailbox from '$lib/assets/icons/mailbox.svg?raw';
	import Menu from '$lib/assets/icons/menu.svg?raw';
	import MoodDollar from '$lib/assets/icons/mood-dollar.svg?raw';
	import Moon from '$lib/assets/icons/moon.svg?raw';
	import PigMoney from '$lib/assets/icons/pig-money.svg?raw';
	import Puzzle from '$lib/assets/icons/puzzle.svg?raw';
	import Reset from '$lib/assets/icons/reset.svg?raw';
	import ShadcnSvelte from '$lib/assets/icons/shadcn-svelte.svg?raw';
	import SourceCode from '$lib/assets/icons/source-code.svg?raw';
	import Sun from '$lib/assets/icons/sun.svg?raw';
	import Svelte from '$lib/assets/icons/svelte.svg?raw';
	import World from '$lib/assets/icons/world.svg?raw';
	import X from '$lib/assets/icons/x.svg?raw';
  export let name: keyof typeof icons;
  export let width = '1rem';
  export let height = '1rem';
  export let focusable: string | number | null | undefined = undefined;
  let icons = { arrowLeft: { box: 24, svg: ArrowLeft },
		arrowRight: { box: 24, svg: ArrowRight },
		bellMinus: { box: 24, svg: BellMinus },
		bellPlus: { box: 24, svg: BellPlus },
		check: { box: 24, svg: Check },
		chevronDown: { box: 24, svg: ChevronDown },
		chevronRight: { box: 24, svg: ChevronRight },
		circle: { box: 24, svg: Circle },
		github: { box: 24, svg: Github },
		google: { box: 24, svg: Google },
		mailbox: { box: 24, svg: Mailbox },
		menu: { box: 24, svg: Menu },
		moodDollar: { box: 24, svg: MoodDollar },
		moon: { box: 24, svg: Moon },
		pigMoney: { box: 24, svg: PigMoney },
		puzzle: { box: 24, svg: Puzzle },
		reset: { box: 24, svg: Reset },
		shadcnSvelte: { box: 24, svg: ShadcnSvelte },
		sourceCode: { box: 24, svg: SourceCode },
		sun: { box: 24, svg: Sun },
		svelte: { box: 24, svg: Svelte },
		world: { box: 24, svg: World },
		x: { box: 24, svg: X } } as const;
  let display = icons[name];
</script>


<svg class={$$props.class} {focusable} {width} {height} viewBox="0 0 {display.box} {display.box}"
  >{@html display.svg}</svg>
