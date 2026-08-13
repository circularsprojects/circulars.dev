# circulars.dev
*yet another revision of my website.. i think this is the fifth? i've lost count*

This is my personal website, built with Svelte, Tailwind, and some other Rust backend services.

## Buttons

My custom social media buttons are available in the folder aptly titled "social media buttons"

If you want to add my 88x31 button to your website, you can do so with this little code snippet: (or just do it yourself)

```html
<a href="https://circulars.dev">
  <img src="https://circulars.dev/circular-88x31.gif" width="88" height="31">
</a>
```

*make sure to set the `image-rendering` css rule to `pixelated`*

If you want the button for [necoarc.dev](https://necoarc.dev), you can use this snippet:

```html
<a href="https://necoarc.dev">
  <img src="https://necoarc.dev/assets/necoarc-88x31.png" width="88" height="31">
</a>
```

For my button and the button for necoarc.dev, hotlinking is greatly encouraged! For the social media buttons, I'd recommend just hosting them yourself.

## Backend

My site uses two different backend services written in Rust.

The first, `lastfm-rust` is a small program made to poll the Last.FM api for changes to my listening status, and send updates to clients via websocket.\
This is what powers the widget at the top of my website that shows what I'm currently/previously listened to.\
You can see the repo [here](https://github.com/circularsprojects/lastfm-rust).

The second, `minibuild` is a small service that runs scripts when webhook events are sent to it. (more specifically webhook events from github, but you *could* make it work with other services)\
I use this service to automatically build and deploy my website whenever I push any changes to this repo.\
You can see the repo [here](https://github.com/circularsprojects/minibuild).