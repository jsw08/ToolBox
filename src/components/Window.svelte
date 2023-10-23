<script>
  import { draggable } from "@neodrag/svelte";
  import { openApps } from "../store";
  
  /**
   * Window title.
   * @type string
   **/
  export let title = "Application";

  /**
   * Window id, used for closing window.
   * @type string
   **/
  export let id;
  if (id === undefined) {
    throw new TypeError("Id property must be set.");
  }

  /**
   * Closes the winodw.
   * @function
   * @returns void
   **/
  const close = () => {
    $openApps = $openApps.filter((v) => v.id != id);
  };

  /**
   * Sets the window to fullscreen mode
   * @function
   * @returns void
   **/
  const toggleFullscreen = () => {
    if (fullscreen) {
      fullscreen = false;
      position = oldPosition;
      size = oldSize;
    } else {
      oldPosition = position;
      oldSize = {...size};
      position = {x: 0, y: 0}
      fullscreen = true;
    }
  };

  /**
   * Window position
   * @typedef {{x: number, y: number}} Position
   * @type Position 
   **/
  let position = {
    x: window.innerWidth / 6,
    y: window.innerHeight / 6,
  }

  /** 
   * Stores the position before fullscreen
   * @type Position
  **/
  let oldPosition;

  /**
   * Window size
   * @typedef {{w: number, h: number}} Size
   * @type Size
  **/
  let size = {
    w: (window.innerWidth / 3) * 2,
    h: (window.innerHeight / 3) * 2,
  }

  /**
   * Stores the window size before fullscreen
   * @type Size
  **/
  let oldSize;

  /**
   * Fullscreen state
   * @type boolean
  **/
  let fullscreen = false;

  /**
   * Capture mouse events
   * @type MouseEvent
  **/
  let mouseEvent;
</script>

<div
  class="window"
  style:width={fullscreen ? "100vw" : `${size.w}px`}
  style:height={fullscreen ? "100vh" : `${size.h}px`}
  bind:clientWidth={size.w}
  bind:clientHeight={size.h}
  use:draggable={{
    position,
    handle: ".titlebar",
    onDrag: ({ offsetX, offsetY }) => {
      position = {x: offsetX, y: offsetY };
    },
    disabled: fullscreen
  }}
>
  <!-- svelte-ignore a11y-no-static-element-interactions -->
  <div class="titlebar" on:mousemove={e => mouseEvent = e} style:pointer={fullscreen ? "grab" : "not-allowed"}>
    <p {title}>{title}</p>
    <div>
      <button on:click={toggleFullscreen}>
        {#if fullscreen}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            ><g
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              ><path
                d="M3 17a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1zm1-5V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6"
              /><path d="M15 13h-4V9m0 4l5-5" /></g
            ></svg
          >
        {:else}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            ><g
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              ><path
                d="M3 17a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1zm1-5V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6"
              /><path d="M12 8h4v4m0-4l-5 5" /></g
            ></svg
          >
        {/if}
      </button>
      <button on:click={close}
        ><svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          ><path
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M3 5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5zm6 4l6 6m0-6l-6 6"
          /></svg
        ></button
      >
    </div>
  </div>
  <div class="windowContent"></div>
</div>

<style>
  :not(svg|*) {
    all: unset;
  }
  * {
    pointer-events: all;
  }

  .window {
    display: flex;
    flex-direction: column;
    overflow: auto;
    resize: both;

    border: 1px solid black;
  }

  .titlebar {
    height: 24px;
    flex: none;
    display: flex;
    flex-direction: row;
    border-bottom: 1px solid black;
    padding: 0 2px;
    justify-content: space-between;
  }

  .titlebar p {
    flex-grow: 1;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    place-self: center;
  }

  .titlebar div {
    display: flex;
    flex: none;
    flex-direction: row;
  }

  .titlebar button {
    width: 24px;
    height: 24px;
    all: unset;
  }

  .windowContent {
    display: flex;
    flex-grow: 1;
  }
  .windowContent > * {
    flex-grow: 1;
  }
</style>
