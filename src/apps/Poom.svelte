<script>
  import Pico8Wrapper from "../components/PICO8Wrapper.svelte";
  import {game} from "../assets/Poom.js"

  /**
   * Window id, used for closing window.
   * @type number
   **/
  export let id;
  
</script>

<Pico8Wrapper {id} title="Poom - Pico Doom" {game}/>
