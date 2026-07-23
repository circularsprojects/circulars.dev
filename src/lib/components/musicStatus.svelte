<script lang="ts">
  import circularCat200Bg from "$lib/assets/circular-cat-200-bg.gif";
  import type { LastFMRecentTracks } from "$lib/lastfm";
  
  let websocket: WebSocket;
  let backoff = 0;

  let error = $state(false);

  let image = $state("");
  let title = $state("loading last.fm...");
  let url = $state("");
  let artist = $state("circular :3");
  //let date = $state("");
  let playing = $state(false);

  function connect() {
    websocket = new WebSocket("ws://localhost:3000/ws");

    websocket.addEventListener("error", (e) => {
      error = true;
    });

    websocket.addEventListener("message", (event) => {
      const data = JSON.parse(event.data) as LastFMRecentTracks;
      playing = data.recenttracks.track[0]["@attr"]?.nowplaying === "true";
      title = data.recenttracks.track[0].name;
      url = data.recenttracks.track[0].url;
      artist = data.recenttracks.track[0].artist["#text"];
      //date = new Date(parseInt(data.recenttracks.track[0].date?.uts) * 1000).toLocaleTimeString();
      image = data.recenttracks.track[0].image[3]["#text"];
    })

    websocket.addEventListener("open", (_) => {
      console.log("connected!");
      backoff = 0;
      error = false;
    });

    websocket.addEventListener("close", (_) => {
      console.log("websocket failed");
      error = true;
      backoff++;
      if (backoff < 6) {
        console.log(`retrying in ${5 * backoff} seconds`);
        setTimeout(() => {
          connect();
        }, 5000 * backoff);
      }
    });
  }

  connect();

</script>

{#if error}
  <div class="flex flex-row gap-2">
    <div class="border-ctp-surface0 border-2 h-24 w-24 p-4 flex disabled-background items-center justify-center"></div>
    <p class="text-sm text-ctp-overlay0 font-serif italic">music status unavailable</p>
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
