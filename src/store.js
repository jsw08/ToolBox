import { writable } from 'svelte/store';
import Window from './components/Window.svelte'

/** 
 * Currently open applications.
 * @typedef {{app: ConstructorOfATypedSvelteComponent, id: string}} Application
 * @type {import ('svelte/store').Writable<Array<Application>>}  
**/
export const openApps = writable([{app: Window, id: "CustomID"}])
