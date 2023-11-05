<script>
  import { createEventDispatcher, onMount } from "svelte";
  import Window from "./Window.svelte";
  import { windowDragging } from "../store";

  /**
   * @type import("svelte").EventDispatcher<{load: HTMLIFrameElement}>
   **/
  const dispatch = createEventDispatcher();

  /**
   * Window id.
   * @type number
   **/
  export let id;
  /**
   * Window title.
   * @type string
   **/
  export let title = "IFrame";

  /**
   * The iframe element.
   * @type HTMLIFrameElement
   **/
  let iframe;

  onMount(() => {
    iframe.addEventListener("load", () => {
      let style = iframe.contentDocument.body.style;
      style.width = "100%";
      style.height = "100%";
      style.margin = "0";
      style.padding = "0";

      dispatch("load", iframe);
    });
  });
</script>

<Window {id} {title}>
  <iframe bind:this={iframe} {title} frameborder="0" style:pointer-events={$windowDragging ? "none" : "all"}/>
</Window>

<style>
  iframe {
    all: unset;
    width: 100%;
    height: 100%;
  }
</style>
