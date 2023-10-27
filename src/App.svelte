<script>
  import AppLauncher from "./components/AppLauncher.svelte";
  import { openApps, rootElement } from "./store";
</script>

<div bind:this={$rootElement}>
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
    z-index: 1000;
    pointer-events: none;
    width: 100vw;
    height: 100vh;

    background-color: rgb(43, 43, 43);
  }
</style>