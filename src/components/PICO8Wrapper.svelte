<script>
  import FrameWindow from "./FrameWindow.svelte";
  import {generatePICO8} from "../assets/PICO8GameShell"

  /**
   * Window title.
   * @type string
   **/
  export let title = "Pico8 Game";
  /**
   * Window id.
   * @type number
   **/
  export let id;

  /**
   * Pico8 cartridge code.
   * @type string
   **/
  export let game = "";


  /**
   * Iframe onload handler, to inject the game.
   * @param {CustomEvent<HTMLIFrameElement>} e
   **/
  const onload = (e) => {
    e.detail.contentDocument.documentElement.innerHTML = generatePICO8(game) 
  };
</script>


<FrameWindow {id} {title} on:load={onload}/>
