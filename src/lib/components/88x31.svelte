<script lang="ts">
  let { link, image, alt, title }: {
    link: string;
    image: string;
    alt: string;
    title?: string;
  } = $props();
</script>

<style>
  a {
    display: inline-block;
    position: relative;
    overflow: hidden;
    backface-visibility: hidden;
  }

  a:hover .specular {
    transition: opacity 0.3s ease;
    opacity: 1;
  }

  .shader-layer {
    background: black;
    mix-blend-mode: multiply;
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    background-position: center;
  }

  .specular {
    mix-blend-mode: color-dodge;
    background-attachment: fixed;
    opacity: 0;
  }

  .mask {
    mix-blend-mode: multiply;
  }

  .rainbow {
    background: linear-gradient(90deg in hsl longer hue, red 0 100%)0/200%;
    animation: rainbow 3s linear infinite;
  }

  @keyframes rainbow {
    to {
      background-position: 200%;
    }
  }
</style>

<a href={link}>
  <img src={image} alt={alt} title={title} width=88 height=31>
  <div class="shader-layer specular rainbow">
    <img src="translucent_mask_5.png" class="shader-layer mask" alt="mask" width=88 height=31>
  </div>
  <!-- <span class="rainbow">meow</span> -->
</a>