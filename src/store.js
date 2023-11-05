import { writable } from "svelte/store";
import Notepad from "./apps/Notepad.svelte";

/**
 * @typedef Application
 * @property {ConstructorOfATypedSvelteComponent} app - The svelte component.
 * @property {number} id - Unique app id that's used to close the application.
 **/

/**
 * Currently open applications.
 * @type {import ('svelte/store').Writable<Array<Application>>}
 */
export const openApps = writable([]);

/**
 * Root element of this script.
 * @type {import ('svelte/store').Writable<HTMLDivElement>}
 **/
export const rootElement = writable();

/**
 * The window that has current focus's id.
 * @type {import ('svelte/store').Writable<number>}

**/
export const focusId = writable();

/**
 * Contains whether any window is being dragged.
 * @type {import('svelte/store').Writable<boolean>}
 **/
export const windowDragging = writable(false);
