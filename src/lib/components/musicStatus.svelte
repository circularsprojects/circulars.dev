<script lang="ts">
  import circularCat200Bg from "$lib/assets/circular-cat-200-bg.gif";
  import RemoteImage from "./remoteImage.svelte";
  import type { LastFMRecentTracks } from "$lib/lastfm";
  
  const websocket = new WebSocket("ws://localhost:3000/ws");

  let error = $state("");

  let image = $state("");
  let title = $state("loading last.fm...");
  let url = $state("");
  let artist = $state("circular :3");
  let playing = $state(false);

  websocket.addEventListener("error", (e) => {
    error = "Failed to connect to last.fm websocket. Please try again later.";
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
      <RemoteImage src={image} alt="Album Art" width="108" height="108" />
    {:else}
      <RemoteImage src={circularCat200Bg} alt="Placeholder" width="108" height="108" />
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
  </div>
{/if}
