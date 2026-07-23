<script lang="ts">
  import MusicStatus from "$lib/components/musicStatus.svelte";
  import ShowcaseCard from "$lib/components/showcaseCard.svelte";
  import cat from '$lib/assets/circular-cat-200-bg.gif';
</script>

<div class="w-full text-left flex flex-col gap-4">
    <h1 class="text-5xl italic font-serif highlight-title"><span>circular</span></h1>
    <div>
      <p>semi professional software developer</p>
      <p>diploma of information technology, currently studying towards a bachelor's</p>
      <p>swift student challenge 2024 winner</p>
      <p>literally a cat ΘΔ</p>
    </div>
    <MusicStatus />
    <hr>
    <h1 class="text-4xl italic font-serif">showcase</h1>
    <ShowcaseCard
      title="circulars.dev"
      description="This website, built with Svelte."
      icon={cat}
      image="circular-cat-transparent.png"
      color="var(--color-ctp-pink)"
      url="https://github.com/circularsprojects/circulars.dev"
      urlLabel="Github"
    />
    <ShowcaseCard
      title="watchcord"
      description="A completely independent Discord client for Apple Watch."
      icon="https://raw.githubusercontent.com/circularsprojects/watchcord-astro/refs/heads/main/public/watchcord.png"
      image="https://raw.githubusercontent.com/circularsprojects/watchcord-astro/refs/heads/main/public/watchcord%20home.png"
      color="var(--color-ctp-lavender)"
      url="https://watchcord.dev"
    />
    <ShowcaseCard
      title="foodbot"
      description="A discord bot that just sends pictures of food. >2200 servers as of May 2026."
      icon="foodbot.webp"
      image="SCR-20260525-mist-t.png"
      color="var(--color-ctp-peach)"
      url="https://discord.com/api/oauth2/authorize?client_id=866362531546398752&permissions=51200&scope=applications.commands%20bot"
      urlLabel="Invite"
    />
    <hr>
    <h1 class="text-4xl italic font-serif">more about me</h1>
    <div>
      <p>i'm circular</p>
      <p>i'm a cat ΘΔ with a great interest in computers and software based in sydney, australia.</p>
      <p>i have a diploma in information technology, and i'm currently studying towards a bachelor's degree (first year)</p>
      <p>i was one of the 350 winners of the apple swift student challenge in 2024</p>
      <p>i fuckig love pallas/manul cats. if you go to my twitter almost all of my reposts are just pallas cats ooooouuu i love them i love them so much</p>
      <p>i daily drive cachyos on my main computer, and also run fedora linux on my homelab server.</p>
      <br>
      <p>some other things i love / am interested in:</p>
      <ul class="list-disc list-inside">
        <li>rainbow six siege <em class="text-sm text-ctp-subtext0">(unfortunately. >1200 hours.)</em></li>
        <li>dungeons n dragons and other table top games</li>
        <li><a href="https://www.last.fm/user/circular_" class="text-ctp-lavender underline">music</a></li>
        <li>cosplay <em class="text-sm text-ctp-subtext0">(i've cosplayed neco arc a few times before. if you've seen a really tall neco arc in sydney thats maybe me)</em></li>
      </ul>
    </div>
    <hr>
    <h1 class="text-4xl italic font-serif">links and socials</h1>
    <div>

    </div>
</div>