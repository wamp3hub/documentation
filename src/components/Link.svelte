<script>
import { base } from '$app/paths'

export let href
export let color = 'white'
export let newTab = false
export let underline = true
export let bold = false

let __href = base + href

let target = undefined
if (newTab) {
    target = '_blank'
}
</script>

<a
    class="link link-{color}"
    class:link-underline={underline}
    class:link-bold={bold}
    href={__href}
    {target}
>
    <slot />
</a>

<style lang="scss">
@import '~/styles/domain.scss';

.link {
    text-decoration: none;

    &:hover {
        text-decoration: underline;
    }
}

.link-underline {
    text-decoration: underline;
}

.link-bold {
    font-weight: bold;
}

.link-white {
    color: $color-white;
}

.link-dark {
    color: $color-dark;

    &:hover {
        color: $color-white;
    }
}
</style>