<script>
let element

export function container() {
    return element
}
</script>

<div
    class="tabs-body"
    bind:this={element}
>
    <slot />
</div>
