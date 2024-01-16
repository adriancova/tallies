import fs from 'fs';
import path from 'path';

import url from 'url';
const dirname = path.dirname(url.fileURLToPath(import.meta.url));

const iconsDir = path.join(dirname, '../src/lib/assets/icons');
const iconComponentPath = path.join(dirname, '../src/lib/components/ui/Icon.svelte');

// Function to convert kebab-case to camelCase
const toCamelCase = (str) => {
	return str.replace(/-([a-z])/g, (g) => g[1].toUpperCase());
};

fs.readdir(iconsDir, (err, files) => {
	if (err) {
		console.error('Error reading icons directory:', err);
		return;
	}

	const imports = [];
	const iconsObjectEntries = [];

	files.forEach((file) => {
		if (path.extname(file) === '.svg') {
			const iconName = toCamelCase(path.basename(file, '.svg'));
			const importName = iconName.charAt(0).toUpperCase() + iconName.slice(1);
			imports.push(`import ${importName} from '$lib/assets/icons/${file}?raw';`);
			iconsObjectEntries.push(`${iconName}: { box: 24, svg: ${importName} }`);
		}
	});

	const scriptContent = `
<script lang="ts">
  ${imports.join('\n\t')}
  export let name: keyof typeof icons;
  export let width = '1rem';
  export let height = '1rem';
  export let focusable: string | number | null | undefined = undefined;
  let icons = { ${iconsObjectEntries.join(',\n\t\t')} } as const;
  let display = icons[name];
</script>
`;

	const svgContent = `
<svg class={$$props.class} {focusable} {width} {height} viewBox="0 0 {display.box} {display.box}"
  >{@html display.svg}</svg>
`;

	const fullComponent = `${scriptContent}\n${svgContent}`;

	fs.writeFile(iconComponentPath, fullComponent, (writeErr) => {
		if (writeErr) {
			console.error('Error writing to Icon.svelte:', writeErr);
		} else {
			console.log('Icon.svelte has been updated with dynamic imports.');
		}
	});
});
