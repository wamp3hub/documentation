<script>
import {onMount} from 'svelte'
import {afterNavigate} from '$app/navigation'
import Backdrop from '~/components/Backdrop.svelte'
import Logo from '~/components/Logo.svelte'
import TransparentButton from '~/components/buttons/Transparent.svelte'
import Navigation from './Navigation.svelte'
import IMenu from '~/icons/menu.svg?raw'
import ISearch from '~/icons/search.svg?raw'

export let data
let {links} = data

let backdrop
let isMobile = false,
    isDesktop = false

onMount(() => {
    isMobile = window.innerWidth < 768
    isDesktop = window.innerWidth >= 768
})

afterNavigate(() => {
    backdrop.hide()
})
</script>

<div
    id="main-layout"
    class:desktop-layout={isDesktop}
    class:mobile-layout={isMobile}
>
    {#if isDesktop}
        <Navigation {links} />
    {/if}

    <main>
        <slot />
    </main>

    {#if isMobile}
        <Backdrop bind:this={backdrop}>
            <Navigation {links} />
        </Backdrop>
        <div class="mobile-navigation-bar">
            <div class="left">
                <Logo />
            </div>

            <div class="right">
                <TransparentButton>
                    {@html ISearch}
                </TransparentButton>
                <TransparentButton on:click={e => backdrop.show()}>
                    {@html IMenu}
                </TransparentButton>
            </div>
        </div>
    {/if}
</div>

<style lang="scss">
@import '~/styles/domain.scss';

#main-layout {
    width: 100%;
    height: 100%;
    display: flex;

    main {
        width: 100%;
        max-width: 800px;
        height: 100%;
        overflow-y: auto;
        padding-left: 16px;
        padding-right: 16px;
        padding-top: 64px;
        padding-bottom: 64px;
    }
}

.desktop-layout {
    justify-content: center;
}

.mobile-layout {
    flex-direction: column;
}

.mobile-navigation-bar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 8px;
    padding-top: 8px;
    padding-bottom: 8px;
    padding-left: 16px;
    padding-right: 16px;
    border-radius: 6px;
    background-color: $color-dark;

    .right {
        display: flex;
        justify-content: right;
        gap: 16px;
    }
}
</style>
