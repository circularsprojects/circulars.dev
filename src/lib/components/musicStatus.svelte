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

{#if error}
  <div class="border-ctp-surface0 border-2 h-44 w-44 p-4 flex disabled-background items-center justify-center">
    <p class="text-sm text-ctp-overlay0 font-serif text-center italic">music status unavailable</p>
  </div>
{:else}
  <div class="flex flex-row gap-2">
    {#if image}
      <img src={image} alt="Album Art" width="96" height="96" />
    {:else}
      <img src={circularCat200Bg} alt="Placeholder" width="96" height="96" />
    {/if}
    <div class="flex flex-col w-full">
      {#if playing}
        <p class="text-sm font-serif italic">Currently listening to:</p>
      {:else}
        <p class="text-sm font-serif italic">Last listened to:</p>
      {/if}
      <a class="text-lg text-nowrap text-ellipsis overflow-hidden" href={url}>{title}</a>
      <p class="text-sm text-ctp-subtext0">{artist}</p>
    </div>
  </div>
{/if}
