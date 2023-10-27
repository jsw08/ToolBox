<script>
  import Notepad from "../apps/Notepad.svelte";
  import { openApps } from "../store";

    /**
     * The menu items.
     * @type Directory
    **/
    export let rootDir = {
        "title": "The root dir.",
        "type": "d",
        "items": [
            {
                "type": "a",
                "title": "Temp",
                "component": Notepad
            },
            {
                "type": "d",
                "title": "tempa",
                "items": [
                    {
                        "type": "a",
                        "title": "Tempa",
                        "component": Notepad
                    },
                ]
            }
        ]
    };
    
    /**
     * @typedef {Object} Application
     * @property {"a"} type - Start menu item a
     * @property {string} title - The title
     * @property {ConstructorOfATypedSvelteComponent} component - The Svelte component for the application.
     */

    /**
     * @typedef {Object} Directory
     * @property {"d"} type - Start menu directory
     * @property {string} title - Directory name
     * @property {Array<Application | Directory>} items - Directory items
     */

    /**
     * Keeps track of what the parent directories you're in.
     * @type Directory[]
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
     * Open a directory
     * @return void
     * @param {Directory} dir
     **/
    const openDirectory = (dir) => {
        directoryPath.push(dir);
        currentDirectory = directoryPath.length -1;
        void 0;
    };

    /**
     * Menu item event handler
     * @param {Directory | Application} item
     * @return void
    **/
    const btnHandler = (item) => {
        if (item.type === "a") {
            $openApps = [...$openApps, {app: item.component, id: performance.now()}];
            open = false;
        } else {
            openDirectory(item)
        }
    }
</script>

{#if open}
    <div class="appMenu"> 
        {#if ( currentDirectory > 0 )}
            <button on:click={prevDirectory}>Back</button> 
        {/if}
        {#each directoryPath[currentDirectory].items as item}
            <button on:click={e => btnHandler(item)}>{item.title}</button> 
        {/each}
    </div>
{/if}
<button id="toggleBtn" on:click={(e) => (open = !open)}>+</button>

<style>
    * {
        all: unset;
        pointer-events: all;
    }
    #toggleBtn {
        position: fixed;
        right: 0;
        bottom: 0;
        width: 24px;
        height: 24px;
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
        min-width: 6rem;
        display: flex;
        flex-direction: column-reverse;
    }
    .appMenu > button {
        border: 1px solid black;
    }
</style>
