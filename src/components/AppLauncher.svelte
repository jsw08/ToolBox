<script>
/**
 * @typedef {Object} Application
 * @property {string} type - Start menu item
 * @property {string} title - The title
 * @property {ConstructorOfATypedSvelteComponent} component - The Svelte component for the application.
 */

/**
 * @typedef {Object} Directory
 * @property {string} type - Start menu directory
 * @property {string} name - Directory name
 * @property {Application[]} items - Directory items
 */

/**
 * Keeps track of what the parent directories you're in.
 * @type Directory[]
**/
let direcotryPath;

/**
 * The currently open directory. 
 * @type Directory
**/
let currentDirectory;

/**
 * Whether the startmenu is open.
 * @type boolean
**/
let open = false;
</script>

{#if open}
    <div class="appMenu">
    </div>
{/if}
<button on:click={e => open = !open}>+</button>

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
    }
</style>