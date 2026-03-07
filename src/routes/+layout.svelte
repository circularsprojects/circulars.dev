<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>
<div class="p-8 w-full lg:w-1/3 text-left self-center flex flex-col">
	{@render children()}
</div>
