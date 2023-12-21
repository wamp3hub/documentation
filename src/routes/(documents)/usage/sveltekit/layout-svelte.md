```html
<script>
import wamps from '~/wamps'
</script>

{#if $wamps}
    <slot />
{:else}
    <p>joining to WAMP network...</p>
{/if}
```