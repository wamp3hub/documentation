<script>
import { createEventDispatcher } from 'svelte'
import { writable } from 'svelte/store'

export let selected = writable()

let dispatch = createEventDispatcher()

selected.subscribe(v => {
    dispatch('change', v)
})
</script>

<slot {selected} />
