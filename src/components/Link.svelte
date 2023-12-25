<script>
import { base } from '$app/paths'

export let href,
    newTab = false,
    color = 'white',
    bold = false,
    underline = true

let __href = href.startsWith('http') ? href : base + href

let __target = undefined
if (newTab) {
    __target = '_blank'
}
</script>

<a
    class="link link-{color}"
    class:link-underline={underline}
    class:link-bold={bold}
    href={__href}
    target={__target}
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
    color: $color-gray;

    &:hover {
        color: $color-white;
    }
}
</style>
