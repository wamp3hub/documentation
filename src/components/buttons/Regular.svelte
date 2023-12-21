<script>
export let color = 'dark'
</script>

<button
    class="regular regular-{color}"
    on:click
>
    <slot />
</button>
