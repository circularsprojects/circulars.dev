<script lang="ts">
  import { onMount } from "svelte";
  import circularCat200Bg from "$lib/assets/circular-cat-200-bg.gif";

  let { src, alt, width, height }: { src: string; alt: string; width?: string; height?: string } = $props();

  let imageSrc = $state(circularCat200Bg);
  onMount(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => {
      imageSrc = src;
    };
    img.onerror = () => {
      imageSrc = circularCat200Bg;
    };
  });
</script>

<img src={imageSrc} alt={alt} style={imageSrc == circularCat200Bg ? "image-rendering: pixelated;" : "image-rendering: unset;" } width={width} height={height} />

