<script lang="ts">
  import { onMount } from 'svelte';
  let meowsound: HTMLAudioElement;
  onMount(() => {
    meowsound = new Audio('meow.mp3');
  });
  function meow() {
    meowsound.play();
  }
</script>

<div class="fixed left-0 bottom-0 flex flex-row">
  <button onclick={meow} class="cursor-pointer">
    <picture>
      <source srcset="circular-cat-200-transparent.gif" media="(prefers-color-scheme: dark)" width=180 height=180 />
      <source srcset="circular-cat-200-black-transparent.gif" media="(prefers-color-scheme: light)" width=180 height=180 />
      <img src="circular-cat-200-transparent.gif" alt="a cat gif" width=180 height=180 loading=eager />
    </picture>
  </button>
  <div class="max-w-64">
    <div class="max-w-64 p-2 text-sm bg-lime-900 flex flex-row">
      <p>can you lock the fuck incan you lock the fuck incan you lock the fuck incan you lock the fuck incan you lock the fuck incan you lock the fuck</p>
      <button class="cursor-pointer h-fit">[x]</button>
    </div>
  </div>
</div>