<script>
    export let href
    export let newTab = false

    let target = newTab ? '_blank' : '_self'
</script>

<a {href} {target}>
    <slot />
</a>
