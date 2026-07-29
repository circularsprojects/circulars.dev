<script lang="ts">
  import MusicStatus from "$lib/components/musicStatus.svelte";
  import ShowcaseCard from "$lib/components/showcaseCard.svelte";
  import cat from '$lib/assets/circular-cat-200-bg.gif';
  import Button from "$lib/components/88x31.svelte";
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
      <p>i'm a cat ΘΔ &#128008 with a great interest in computers and software based in sydney, australia.</p>
      <p>i have a diploma in information technology, and i'm currently studying towards a bachelor's degree (first year)</p>
      <p>i daily drive cachyos on my main computer, and also run fedora linux on my homelab server.</p>
      <p>i was one of the 350 winners of the apple swift student challenge in 2024</p>
      <p>i fuckig love pallas/manul cats. if you go to my twitter almost all of my reposts are just pallas cats ooooouuu i love them i love them so much</p>
      <img src="pallascat.jpg" alt="pallas cat" class="max-w-[25%]">
      <br>
      <p>some other things i love / am interested in:</p>
      <ul class="list-disc list-inside">
        <li>rainbow six siege <em class="text-sm text-ctp-subtext0">(unfortunately. >1200 hours.)</em></li>
        <li>dungeons n dragons and other table top / card games</li>
        <li><a href="https://www.last.fm/user/circular_" class="text-ctp-lavender underline">music</a></li>
        <li>cosplay <em class="text-sm text-ctp-subtext0">(i've cosplayed neco arc a few times before. if you've seen a really tall neco arc in sydney thats maybe me)</em></li>
      </ul>
    </div>
    <hr>
    <h1 class="text-4xl italic font-serif">links and socials</h1>
    <div class="flex flex-wrap gap-2 buttons">
      <Button link="https://discord.com/users/305243321784336384" image="buttons/my/discord.png" alt="discord" title="my username is circular" />
      <Button link="https://x.com/circlure2" image="buttons/my/twitter.png" alt="twitter" title="im not calling it x lmfao" />
      <Button link="https://github.com/circularsprojects" image="buttons/my/github.png" alt="github" title="github" />
      <Button link="https://last.fm/user/circular_" image="buttons/my/lastfm.png" alt="last.fm" title="music ough" />
      <Button link="https://wetdry.world/@circular" image="buttons/my/mastodon.png" alt="mastodon" title="i don't use mastodon very often but im there" />
    </div>
    <div>
      <p>if you want my email, it's <span class="font-serif text-ctp-lavender">c&#x200B;i&#x200C;r&#x200D;c&#x200B;u&#x200C;l&#x200D;a&#x200B;r</span> &#x200B;@&#x200D; <span class="font-serif text-ctp-lavender">t&#x200C;h&#x200C;i&#x200B;s d&#x200D;o&#x200C;m&#x200B;a&#x200D;i&#x200B;n</span></p>
      <p>to prevent scrapers, do not copy paste the above. just type out the email manually</p>
      <p class="text-sm text-ctp-subtext0">want these buttons? .png and .aseprite files are in this website's repo! (don't hotlink)</p>
    </div>
    <hr>
    <h1 class="text-4xl italic font-serif">services</h1>
    <div>
      <p>i publicly host <a href="https://4get.circulars.dev" class="text-ctp-lavender underline">4get</a>, a privacy-focused proxy search engine.</p>
      <p>i also host jellyfin, however access is only for people i know.</p>
    </div>
    <hr>
    <h1 class="text-4xl italic font-serif">buttons!!</h1>
    <div>
      <p>my button : 3 <em class="text-sm text-ctp-subtext0">(please hotlink!)</em></p>
      <Button link="https://circulars.dev" image="/circular-88x31.gif" alt="circulars.dev" title="circulars.dev" />
    </div>
    <div class="flex flex-wrap gap-2 buttons">
      <Button link="https://necoarc.dev" image="https://necoarc.dev/assets/necoarc-88x31.png" alt="necoarc.dev" title="ENTER THE DOMAIN OF THE PROFANED ONE" />
      <Button link="https://silly.city" image="https://silly.city/silly.gif" alt="silly city" />
      <Button link="https://bomberfish.ca" image="https://bomberfish.ca/buttons/button.gif" alt="" />
      <Button link="https://remblanc.nekoweb.org" image="https://remblanc.nekoweb.org/images/button.png" alt="" />
      <Button link="https://immjs.dev/" image="https://immjs.dev/88x31s/immjs.dev.gif" alt="" />
      <Button link="https://freeplay.floof.company" image="https://freeplay.floof.company/assets/buttons/free.gif" alt="" />
      <Button link="https://dimden.dev/" image="https://dimden.dev/services/images/88x31.gif" alt="" />
      <Button link="https://760ceb3b9c0ba4872cadf3ce35a7a494.neocities.org" image="https://760ceb3b9c0ba4872cadf3ce35a7a494.neocities.org/people/760ceb3b9c0ba4872cadf3ce35a7a494.png" alt="" />
      <Button link="https://giikis2.nekoweb.org/" image="https://giikis2.nekoweb.org/assets/badges/giikis2.png" alt="" />
      <Button link="https://claration.dev" image="https://claration.dev/88x31/me.png" alt="" />
      <Button link="https://lucida.to" image="buttons/other/lucida.gif" alt="" />
      <Button link="https://nyoemii.dev" image="https://nyoemii.dev/media/img/button.png" alt="noemi" />
      <Button link="https://prpl.wtf" image="https://prpl.wtf/assets/images/88x31/prpl_wtf.gif" alt="emma" />
      <Button link="https://kn4ughty.com" image="https://kn4ughty.com/images/extra/88x31.gif" alt="kn4ughty" />
      <Button link="https://plushiekitty.party" image="https://plushiekitty.party/button.gif" alt="mocha" />
      <Button link="https://ravarcheon.com" image="https://ravarcheon.com/images/88x31/ravarcheon.gif" alt="ravarcheon" />
    </div>
</div>