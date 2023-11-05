<script>
  import AppLauncher from "./components/AppLauncher.svelte";
  import { openApps, rootElement, windowDragging,  } from "./store";
</script>

<div bind:this={$rootElement} style:pointer-events = {$windowDragging ? "all" : "none"}>
  {#each $openApps as openApp}
    <svelte:component this={openApp.app} id={openApp.id}/>
  {/each}
  <AppLauncher/>
</div>

<style>
  div {
    all: unset;
    position: fixed;
    left: 0;
    top: 0;
    z-index: 2147483647; /* max value to keep support for 32bit. 2^31-1 */
    pointer-events: none;
    width: 100vw;
    height: 100vh;
  }
</style>