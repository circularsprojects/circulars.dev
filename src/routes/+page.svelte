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
    <ShowcaseCard />
</div>