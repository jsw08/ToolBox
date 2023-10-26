import { writable } from "svelte/store";
import Notepad from "./apps/Notepad.svelte";

/**
 * @typedef Application
 * @property {ConstructorOfATypedSvelteComponent} app - The svelte component.
 * @property {string} id - Unique app id that's used to close the application.
 *
 **/

/**
 * Currently open applications.
 * @type {import ('svelte/store').Writable<Array<Application>>}
 */
export const openApps = writable([]);
