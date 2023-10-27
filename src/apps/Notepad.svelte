<script>
  import Window from "../components/Window.svelte";

  /**
   * Window id, used for closing window.
   * @type number
   **/
  export let id;

  /**
   * Textarea value, used to insert tab.
   * @type string
  **/
  let value = "Type away in this textarea!"

  /**
   * Insert tab on tab key press
   * @param {KeyboardEvent} e
   * @return void
  **/
  const keyEvent = e => {
    if (e.key === "Tab") {
      e.preventDefault()
      value += "\t"; 
    }
    
  }
</script>

<Window {id} title="Notepad">
    <textarea name="Notepad" on:keydown={keyEvent} bind:value={value}/>
</Window>

<style>
    textarea {
        flex-grow: 1;
        white-space: pre;
        all: unset;
    }
</style>