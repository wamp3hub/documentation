<script>
export let selected
export let id
</script>

{#if id == $selected}
    <slot />
{/if}
