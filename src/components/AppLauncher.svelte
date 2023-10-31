<script>
  import { rootDir } from "../apps";
  import { openApps } from "../store";

  /**
   * Keeps track of what the parent directories you're in.
   * @type import("../apps").Directory[]
   **/
  let directoryPath = [rootDir];

  /**
   * The currently open directory index.
   * @type number
   **/
  let currentDirectory = 0;

  /**
   * Whether the startmenu is open.
   * @type boolean
   **/
  let open = false;

  /**
   * Go back to the parent directory.
   * @returns void
   **/
  const prevDirectory = () => {
    directoryPath.length === 1 ? void 0 : directoryPath.pop();
    currentDirectory = directoryPath.length - 1;
    void 0;
  };

  /**
   * Menu item event handler
   * @param {import("../apps").Directory | import("../apps").Application} item
   * @return void
   **/
  const btnHandler = (item) => {
    if (item.type === "a") {
      $openApps = [
        ...$openApps,
        { app: item.component, id: performance.now() }, // unique id
      ];
      directoryPath = [rootDir];
      currentDirectory = 0;
      open = false;
    } else {
      directoryPath.push(item);
      currentDirectory = directoryPath.length - 1;
    }
  };
</script>

{#if open}
  <div class="appMenu">
    {#each directoryPath[currentDirectory].items as item}
      <button on:click={(e) => btnHandler(item)}>
        {#if item.type === "d"}
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
            ><path
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M3 6v10.8c0 1.12 0 1.68.218 2.108a2 2 0 0 0 .874.874c.427.218.987.218 2.105.218h11.606c1.118 0 1.677 0 2.104-.218c.377-.192.683-.498.875-.874C21 18.48 21 17.92 21 16.8V9.2c0-1.12 0-1.68-.218-2.108a2 2 0 0 0-.874-.874C19.48 6 18.92 6 17.8 6H12M3 6h9M3 6a2 2 0 0 1 2-2h3.675c.489 0 .734 0 .964.055c.204.05.399.13.578.24c.202.124.375.297.72.643L12 6"
            /></svg
          >
        {:else}
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
            ><path
              fill="currentColor"
              d="M7.1 11.35q.35-.7.725-1.35t.825-1.3l-1.4-.275l-2.1 2.1l1.95.825Zm12.05-6.875q-1.75.05-3.737 1.025T11.8 8.1q-1.05 1.05-1.875 2.25T8.7 12.6l2.85 2.825q1.05-.4 2.25-1.225t2.25-1.875q1.625-1.625 2.6-3.6T19.675 5q0-.1-.038-.2t-.112-.175q-.075-.075-.175-.112t-.2-.038Zm-5.5 6q-.575-.575-.575-1.412t.575-1.413q.575-.575 1.425-.575t1.425.575q.575.575.575 1.413t-.575 1.412q-.575.575-1.425.575t-1.425-.575Zm-.85 6.55L13.625 19l2.1-2.1l-.275-1.4q-.65.45-1.3.813t-1.35.712Zm8.775-13.35q.2 2.75-.9 5.363T17.2 14.025l.5 2.475q.1.5-.05.975t-.5.825L14 21.45q-.375.375-.9.288t-.725-.588l-1.525-3.575L6.575 13.3L3 11.775q-.5-.2-.6-.725t.275-.9L5.825 7q.35-.35.837-.5t.988-.05l2.475.5q2.375-2.375 4.988-3.475t5.362-.9q.2.025.4.113t.35.237q.15.15.238.35t.112.4Zm-17.65 12.3q.875-.875 2.138-.887t2.137.862q.875.875.863 2.138t-.888 2.137q-.625.625-2.087 1.075t-4.038.8q.35-2.575.8-4.038t1.075-2.087Zm1.425 1.4q-.25.25-.5.913t-.35 1.337q.675-.1 1.338-.338t.912-.487q.3-.3.325-.725T6.8 17.35q-.3-.3-.725-.288t-.725.313Z"
            /></svg
          >
        {/if}
        <p title={item.title}>
          {item.title}
        </p>
      </button>
    {/each}
    {#if currentDirectory > 0}
      <button on:click={prevDirectory}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
          ><path
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M17.803 20h1.99c.433 0 .649 0 .83-.074c.161-.066.302-.172.41-.308c.12-.155.18-.362.299-.778l1.086-3.8c.198-.693.296-1.04.218-1.313a1 1 0 0 0-.435-.577c-.228-.141-.561-.15-1.2-.15m-3.198 7H6.197m11.606 0c1.118 0 1.677 0 2.104-.218c.377-.192.683-.498.875-.874C21 18.48 21 17.92 21 16.8V13M6.197 20H5.12c-.72 0-1.08 0-1.322-.15a1 1 0 0 1-.436-.577a.71.71 0 0 1-.025-.16m2.86.887c-1.118 0-1.678 0-2.105-.218a1.999 1.999 0 0 1-.754-.67M21 13H5l-1.417 4.96l-.002.007c-.16.56-.255.893-.243 1.145M21 13V9.2c0-1.12 0-1.68-.218-2.108a2 2 0 0 0-.874-.874C19.48 6 18.92 6 17.8 6H12M3.338 19.112a1.998 1.998 0 0 1-.12-.204C3 18.48 3 17.92 3 16.8V6m0 0h9M3 6a2 2 0 0 1 2-2h3.675c.489 0 .734 0 .964.055c.204.05.399.13.578.24c.202.124.375.297.72.643L12 6"
          /></svg
        >
        <p>Back</p>
      </button>
    {/if}
  </div>
{/if}
<button id="toggleBtn" on:click={(e) => (open = !open)}>+</button>

<style>
  *:not(path) {
    all: unset;
    pointer-events: all;
  }
  #toggleBtn {
    position: fixed;
    right: 0;
    bottom: 0;
    height: 24px;
    aspect-ratio: 1/1;
    color: white;
    background-color: black;
    text-align: center;
    user-select: none;
    cursor: pointer;
  }


  .appMenu {
    position: fixed;
    bottom: 26px;
    right: 0px;
    background-color: white;
    width: 120px;
    display: flex;
    flex-direction: column;
    border: 1px black solid;
  }

  .appMenu > button {
    border: 1px solid black;
    height: 40px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    place-items: center;
    gap: 4px;
    padding: 0px 4px;
  }

  .appMenu > button:not(:last-child) {
    border-bottom: 0;
  }

  .appMenu > button > p {
    white-space: normal;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    flex-grow: 1;
  }

  .appMenu > button > svg {
    width: 1.2rem;
    height: 1.2rem;
    flex: none;
  }

@media (prefers-color-scheme: dark) {
  .appMenu {
    filter: invert(100%);
  }
}
</style>
