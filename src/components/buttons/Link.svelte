<script>
import { base } from '$app/paths'
import './main.scss'

export let href,
    newTab = false,
    color = 'white'

let __href = href.startsWith('http') ? href : base + href

let __target = undefined
if (newTab) {
    __target = '_blank'
}
</script>

<a
    class="regular regular-{color}"
    href={__href}
    target={__target}
>
    <slot />
</a>

