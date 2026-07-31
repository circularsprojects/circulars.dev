<script lang="ts">
	import './layout.css';
	import cat from '$lib/assets/circular-cat-200-bg.gif';
	import Kitty from "$lib/components/kitty.svelte";

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={cat} />
</svelte:head>
<div class="p-8 w-full md:w-3xl text-left self-center flex flex-col blur-bg">
	{@render children()}
</div>
<Kitty />
