<script>
export let href
export let color
export let newTab = false

let target = undefined
if (newTab) {
    target = '_blank'
}
</script>

<a {href} {target}>
    <slot />
</a>
