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

<div class="fixed right-0 bottom-0">
  <button onclick={meow} class="cursor-pointer">
    <img src="circular-cat-200.gif" alt="a cat gif" width=180 height=180 loading=eager />
  </button>
</div>