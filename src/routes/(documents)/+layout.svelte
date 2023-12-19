<script>
import Navigation from './Navigation.svelte'

export let data
let {links} = data
</script>

<div id="main-layout">
    <Navigation {links} />
    <main>
        <slot />
    </main>
</div>

<style lang="scss">
@import '~/styles/domain.scss';

#main-layout {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    gap: 32px;

    main {
        max-width: 800px;
        width: 100%;
        height: 100%;
        padding: 64px 0;
        overflow-y: auto;
    }
}
</style>
