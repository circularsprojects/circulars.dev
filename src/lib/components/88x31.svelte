<script lang="ts">
  let { link, image, alt, title }: {
    link: string;
    image: string;
    alt: string;
    title?: string;
  } = $props();
</script>

<a href={link} target="_blank" style="image-rendering: pixelated;">
  <img src={image} alt={alt} title={title} width=88 height=31>
</a>