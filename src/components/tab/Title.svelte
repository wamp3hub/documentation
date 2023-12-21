<script>
import Button from '~/components/buttons/Regular.svelte'

export let selected
export let id
</script>

<Button
    color={$selected == id ? 'white' : 'dark'}
    on:click={e => selected.update(x => id)}
>
    <slot />
</Button>
