<script>
  import { openApps } from "./store";
</script>

<div>
  {#each $openApps as openApp}
    <svelte:component this={openApp.app} id={openApp.id}/>
  {/each}
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

    background-color: black;
  }
</style>