<script lang="ts">
  let { title, description, icon, image, lightimage, color, url, urlLabel }: {
    title: string;
    description: string;
    icon: string;
    image: string;
    lightimage?: string;
    color: string;
    url: string;
    urlLabel?: string;
    tags?: Array<ShowcaseCardTags>;
  } = $props();

  type ShowcaseCardTags = "swift" | "javascript"
  | "web" | "mobile" | "desktop"
  | "opensource";
</script>

<div class="flex flex-col h-48 p-4 bg-ctp-mantle justify-between relative showcase-card" style="--card-color: {color}">
  <div class="flex flex-row items-center gap-2 z-10">
    <img src="{icon}" alt="{title} logo" width="48" height="48" class="rounded-xl">
    <h2 class="text-3xl font-serif">{title}</h2>
  </div>
  <div class="flex flex-row justify-between z-10 items-end">
    <div class="text-ctp-subtext0 max-w-[70%]">
      <p>{description}</p>
    </div>
    <a href="{url}" target="_blank" class="link">{urlLabel || "Website"}</a>
  </div>
  <picture class="object-cover absolute right-0 bottom-0 bg-fade-image max-w-[30%]">
    {#if lightimage}
      <source srcset="{image}" media="(prefers-color-scheme: dark)" />
      <source srcset="{lightimage}" media="(prefers-color-scheme: light)" />
    {/if}

    <img class="h-48" src="{image}" alt="{title} image">
  </picture>
</div>