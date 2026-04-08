<script lang="ts">
  import circularCat200Bg from "$lib/assets/circular-cat-200-bg.gif";
  import type { LastFMRecentTracks } from "$lib/lastfm";
  
  const websocket = new WebSocket("ws://localhost:3000/ws");

  let error = $state(false);

  let image = $state("");
  let title = $state("loading last.fm...");
  let url = $state("");
  let artist = $state("circular :3");
  let playing = $state(false);

  websocket.addEventListener("error", (e) => {
    error = true;
  });

  websocket.addEventListener("message", (event) => {
    const data = JSON.parse(event.data) as LastFMRecentTracks;
    playing = data.recenttracks.track[0]["@attr"]?.nowplaying === "true";
    title = data.recenttracks.track[0].name;
    url = data.recenttracks.track[0].url;
    artist = data.recenttracks.track[0].artist["#text"];
    image = data.recenttracks.track[0].image[3]["#text"];
  })

</script>

<!-- {#if error}
  <div
    class="border-ctp-red-200 border-2 bg-opacity-30 p-2 h-32 flex gap-2 relative error-background items-center justify-center"
  >
    <p class="text-md text-ctp-red-100 bg-ctp-base font-serif">{error}</p>
  </div>
{:else}
  <div
    class="text-left border-ctp-subtext1 border-2 bg-opacity-30 p-2 h-32 flex gap-2 relative"
  >
    {#if image}
      <img src={image} alt="Album Art" width="108" height="108" />
    {:else}
      <img src={circularCat200Bg} alt="Placeholder" width="108" height="108" />
    {/if}
    <div class="overflow-hidden flex flex-col">
      {#if playing}
        <p class="text-sm font-serif italic">Currently listening to:</p>
      {:else}
        <p class="text-sm font-serif italic">Last listened to:</p>
      {/if}
      <a class="text-lg overflow-auto" href={url}>{title}</a>
      <p class="text-sm text-ctp-subtext0">{artist}</p>
    </div>
  </div> 176
{/if} -->

{#if error}
  <div class="border-ctp-surface0 border-2 h-44 w-44 p-4 flex disabled-background items-center justify-center">
    <p class="text-sm text-ctp-overlay0 font-serif text-center italic">music status unavailable</p>
  </div>
{:else}
  <div class="relative h-44 w-44">
    {#if image}
      <img src={image} alt="Album Art" width="176" height="176" />
    {:else}
      <img src={circularCat200Bg} alt="Placeholder" width="176" height="176" />
    {/if}
    <div class="overflow-hidden flex flex-col absolute top-0 left-0">
      {#if playing}
        <p class="text-sm font-serif italic">Currently listening to:</p>
      {:else}
        <p class="text-sm font-serif italic">Last listened to:</p>
      {/if}
    </div>
    <div class="overflow-hidden flex flex-col absolute bottom-0 right-0 text-right music-overlay">
      <p class="text-sm text-ctp-subtext0">{artist}</p>
      <a class="text-lg overflow-auto" href={url}>{title}</a>
    </div>
  </div>
{/if}
