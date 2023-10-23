import { writable } from "svelte/store";
import Notepad from "./apps/Notepad.svelte";

/**
 * Currently open applications.
 * @typedef {{app: ConstructorOfATypedSvelteComponent, id: string}} Application
 * @type {import ('svelte/store').Writable<Array<Application>>}
 **/
export const openApps = writable([{ app: Notepad, id: "CustomID" }]);
