<script>
import {writable} from 'svelte/store'

export let initial

let selected = writable(initial)
</script>

<slot {selected} />
