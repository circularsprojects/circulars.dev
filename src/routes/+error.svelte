<script lang="ts">
  import { page } from '$app/stores';

  let message = ($page.status === 404) ? "page not found" : $page.error?.message ? $page.error.message : "an unknown error occurred";
</script>

<div class="w-full text-left flex flex-col gap-4">
  <h1 class="text-4xl text-center">{$page.status}</h1>
  <h1 class="text-center">{message}</h1>
  <a href="/" class="text-ctp-lavender underline text-center">go back...</a>
</div>