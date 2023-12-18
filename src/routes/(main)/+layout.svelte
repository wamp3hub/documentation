<script>
import Navigation from './Navigation.svelte'

export let links = [
    {
        category: 'Introduction',
        items: [
            {
                label: 'WAMP',
                path: '/introduction/wamp',
            },
        ],
    },
    {
        category: 'Installation',
        items: [
            {
                label: 'Router',
                path: '/installation/router',
            },
            {
                label: 'Client Libraries',
                path: '/installation/client-libraries',
            },
        ],
    },
    {
        category: 'Usage',
        items: [
            {
                label: 'Join',
                path: '/usage/join',
            },
            {
                label: 'RPC',
                path: '/usage/rpc',
            },
            {
                label: 'Generator',
                path: '/usage/generator',
            },
            {
                label: 'Publish & Subscribe',
                path: '/usage/publish-subscribe',
            },
        ],
    },
]
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
