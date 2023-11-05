import Notepad from "./apps/Notepad.svelte";
import Poom from "./apps/Poom.svelte";

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
 * The menu items.
 * @type Directory
 **/
export const rootDir = {
  title: "The root dir.",
  type: "d",
  items: [
    {
      title: "Puzzles",
      type: "d",
      items: [],
    },
    {
      title: "Games",
      type: "d",
      items: [
        {
          type: "a",
          title: "Poom",
          component: Poom,
        },
      ],
    },
    {
      title: "Tools",
      type: "d",
      items: [
        {
          type: "d",
          title: "Programming",
          items: [],
        },
        {
          type: "a",
          title: "Notepad",
          component: Notepad,
        },
      ],
    },
  ],
};
