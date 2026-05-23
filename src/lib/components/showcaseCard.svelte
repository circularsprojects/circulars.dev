<script lang="ts">
  let { title, description, image, url, urlLabel }: {
    title: string;
    description: string;
    image: string;
    url: string;
    urlLabel?: string;
  } = $props();
</script>

<div class="flex flex-col h-48 p-4 bg-ctp-mantle justify-between relative">
  <div class="flex flex-row items-center gap-2 z-10">
    <img src="https://raw.githubusercontent.com/circularsprojects/watchcord-astro/refs/heads/main/public/watchcord.png" alt="watchcord logo" width="48" height="48" class="rounded-xl">
    <h2 class="text-3xl font-serif">watchcord</h2>
  </div>
  <div class="flex flex-row justify-between z-10">
    <div class="text-ctp-subtext0">
      <p>A completely independent Discord client for Apple Watch.</p>
    </div>
    <a href="https://watchcord.dev" target="_blank" class="link">Website</a>
  </div>
  <img class="h-48 object-cover absolute right-0 bottom-0 bg-fade-image" src="https://raw.githubusercontent.com/circularsprojects/watchcord-astro/refs/heads/main/public/watchcord%20home.png" alt="watchcord home">
</div>