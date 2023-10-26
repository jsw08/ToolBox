<script>
  import Notepad from "../apps/Notepad.svelte";

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
                "title": "temp",
                "component": Notepad
            },
            {
                "type": "d",
                "title": "temp",
                "items": [
                    {
                        "type": "a",
                        "title": "temp",
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
    let currentDirectory;

    /**
     * Whether the startmenu is open.
     * @type boolean
     **/
    let open = false;

    /**
     * Go back to the parent directory.
     * @returns void
     * @param {PointerEvent} e
     **/
    const prevDirectory = (e) => {
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
        currentDirectory = directoryPath.push(dir);
        void 0;
    };
</script>

{#if open}
    <div class="appMenu"> 
        {#each directoryPath[currentDirectory].items as item}
            <button>{item.title}</button> 
        {/each}
    </div>
{/if}
<button on:click={(e) => (open = !open)}>+</button>

<style>
    * {
        all: unset;
        pointer-events: all;
    }
    button {
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
        bottom: 24px;
        right: 0px;
        background-color: white;
        min-height: 12rem;
        min-width: 6rem;
        display: flex;
        flex-direction: column;
    }
    .appMenu > button {
        border: 1px solid black;
    }
</style>
