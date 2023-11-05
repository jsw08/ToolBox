<script>
  import { draggable } from "@neodrag/svelte";
  import { focusId, openApps, rootElement, windowDragging } from "../store";

  /**
   * Window title.
   * @type string
   **/
  export let title = "Application";

  /**
   * Window id, used for closing window.
   * @type number
   **/
  export let id;
  if (id === undefined) {
    throw new TypeError("Id property must be set.");
  }

  /**
   * Position type for neodrag.
   * @typedef Position
   * @property {number} x - X coordinate
   * @property {number} y - Y coordinate
   **/

  /**
   * Window position
   * @type Position
   **/
  let position = {
    x: window.innerWidth / 6,
    y: window.innerHeight / 6,
  };

  /**
   * Size type to store window size.
   * @typedef Size
   * @property {number} w - Window width
   * @property {number} h - Window height
   **/

  /**
   * Window size
   * @type Size
   **/
  let size = {
    w: (window.innerWidth / 3) * 2,
    h: (window.innerHeight / 3) * 2,
  };

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

  /**
   * Whether window is being dragged
   * @type boolean
   **/
  let dragging = false;

  /**
   * Function to set the multiple dragging varaibles.
   * @param {boolean} isDragging
   **/
  const setDrag = (isDragging) => {
    dragging = isDragging;
    $windowDragging = isDragging;
  };

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
    if (!fullscreen) {
      position = { x: 0, y: 0 };
      fullscreen = true;
      return;
    }

    fullscreen = false;
    position = {
      x: window.innerWidth / 6,
      y: window.innerHeight / 6,
    };
    size = {
      w: (window.innerWidth / 3) * 2,
      h: (window.innerHeight / 3) * 2,
    };
  };
</script>

<div
  class="window"
  style:border-radius={fullscreen ? "0px" : "8px"}
  style:width={fullscreen ? "100vw" : `${size.w}px`}
  style:height={fullscreen ? "100vh" : `${size.h}px`}
  style:z-index={dragging ? "3" : $focusId === id ? "2" : "initial"}
  on:pointerenter={() => ($focusId = id)}
  bind:clientWidth={size.w}
  bind:clientHeight={size.h}
  use:draggable={{
    position,
    handle: ".titlebar",
    disabled: fullscreen,
    bounds: $rootElement,
  }}
  on:neodrag={(e) => (position = { x: e.offsetX, y: e.offsetY })}
  on:neodrag:start={(e) => setDrag(true)}
  on:neodrag:end={(e) => setDrag(false)}
>
  <!-- svelte-ignore a11y-no-static-element-interactions -->
  <div
    class="titlebar"
    on:mousemove={(e) => (mouseEvent = e)}
    style:cursor={dragging ? "grabbing" : !fullscreen ? "grab" : "not-allowed"}
  >
    <div class="titlebarTitle">
      <slot name="icon" />
      <p {title}>{title}</p>
    </div>
    <div class="titlebarButtons">
      <button on:click={toggleFullscreen}>
        {#if fullscreen}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            ><g
              fill="white"
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
              fill="white"
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
      <button on:click={close} id="closeBtn"
        ><svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          ><path
            fill="white"
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
  <div class="windowContent"><slot /></div>
</div>

<style>
  *:not(path, g) {
    all: unset;
  }

  .window {
    position: absolute;
    display: flex;
    flex-direction: column;
    overflow: auto;
    resize: both;
    border: 1px solid black;
    background-color: white;
    pointer-events: all;
    min-width: 54px;
    min-height: 54px;
  }

  .titlebar {
    height: 24px;
    flex: none;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 2px;
    background-color: #f1f5f9;
  }

  .titlebarTitle {
    flex-grow: 1;
    place-items: center;
    display: flex;
    flex-direction: row;
    overflow: hidden;
  }

  .titlebarTitle p {
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }

  .titlebarButtons {
    display: flex;
    flex: none;
    flex-direction: row;
    gap: 2px;
    cursor: pointer;
    margin-top: -4px; /* extends the border to the top of the window. */
    padding-top: 3px; /* recenter the children */
  }

  .titlebarButtons button {
    width: 24px;
    height: 24px;
  }

  #closeBtn:hover path {
    fill: #fca5a5;
  }

  .windowContent {
    flex-grow: 1;
    padding: 2px;
    overflow: hidden;
  }

  @media (prefers-color-scheme: dark) {
    .window {
      background-color: black;
      color: white;
    }
    .windowContent {
      filter: invert(0%);
    }
    .titlebar {
      background-color: #0f172a;
    }
    path {
      stroke: white;
      fill: black;
    }
    #closeBtn:hover path {
      fill: #991b1b;
    }
  }
</style>
