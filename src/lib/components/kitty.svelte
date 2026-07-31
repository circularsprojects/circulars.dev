<script lang="ts">
  import circularCat200 from '$lib/assets/circular-cat-200.gif';
  let meowsound = new Audio('meow.mp3');
  function meow() {
    meowsound.play();
  }
</script>

<div class="fixed right-0 bottom-0">
  <button onclick={meow} class="cursor-pointer">
    <img src={circularCat200} alt="a cat gif" width=180 height=180 loading=eager />
  </button>
</div>