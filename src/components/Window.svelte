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
  const fullscreen = () => {
    /**
     * Temporary variable for shorter code. Contains the fullscreen state. 
     * @type boolean
    **/
    let fs = props.fullscreen;
    oldProps = fs ? oldProps : props;
    props = fs ? {
      ...oldProps,
      fullscreen: false
    } : {
      ...props,
      x: 0,
      y: 0,
      fullscreen: true
    }
    console.log(props)
  };

  /**
   * Main properties of the window.
   * @typedef {{x: number, y: number, w: number, h: number, fullscreen: boolean}} WindowProps
   * @type WindowProps
   **/
  let props = {
    x: window.innerWidth / 6,
    y: window.innerHeight / 6,
    w: (window.innerWidth / 3) * 2,
    h: (window.innerHeight / 3) * 2,
    fullscreen: false,
  };
  /**
   * Window properties before fullscreen
   * @type WindowProps
   **/
  let oldProps;
  /**
   * Neodrag properties
   * @type {import('@neodrag/svelte').DragOptions}
   **/
  let dragOptions = {
    position: props,
    handle: ".titlebar",
    onDrag: ({ offsetX, offsetY }) => {
      props = { ...props, x: offsetX, y: offsetY };
    },
  };
</script>

<div
  class="window"
  style:width="{props.w}px"
  style:height="{props.h}px"
  bind:clientWidth={props.w}
  bind:clientHeight={props.h}
  use:draggable={dragOptions}
>
  <div class="titlebar">
    <p {title}>{title}</p>
    <div>
      <button on:click={fullscreen}>
        {#if props.fullscreen}
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
  <div class="windowContent">x</div>
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
</style>
