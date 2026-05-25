<script lang="ts">
  import MusicStatus from "$lib/components/musicStatus.svelte";
  import ShowcaseCard from "$lib/components/showcaseCard.svelte";
</script>

<div class="w-full text-left flex flex-col gap-4">
    <h1 class="text-5xl italic font-serif highlight-title">circular</h1>
    <div>
      <p>semi professional software developer</p>
      <p>diploma of information technology, currently studying towards a bachelor's</p>
      <p>swift student challenge 2024 winner</p>
    </div>
    <MusicStatus />
    <hr class="seperator">
    <h1 class="text-4xl italic font-serif">showcase</h1>
    <ShowcaseCard
      title="watchcord"
      description="A completely independent Discord client for Apple Watch."
      icon="https://raw.githubusercontent.com/circularsprojects/watchcord-astro/refs/heads/main/public/watchcord.png"
      image="https://raw.githubusercontent.com/circularsprojects/watchcord-astro/refs/heads/main/public/watchcord%20home.png"
      url="https://watchcord.dev"
    />
    <ShowcaseCard
      title="foodbot"
      description="A discord bot that just sends pictures of food. >2200 servers as of May 2026."
      icon="foodbot.webp"
      image="SCR-20260525-mist.png"
      url="https://discord.com/api/oauth2/authorize?client_id=866362531546398752&permissions=51200&scope=applications.commands%20bot"
      urlLabel="Invite"
    />
    <ShowcaseCard
      title="detnsw-autologin"
      description="An app to automatically log into detnsw school internet."
      icon="detnsw-autologin.jpeg"
      image="detnswimage-dark.png"
      url="https://github.com/circularsprojects/detnsw-autologin-macos"
      urlLabel="Github"
    />
</div>