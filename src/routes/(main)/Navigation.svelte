<script>
import { page } from '$app/stores'
import Link from '~/components/Link.svelte'

export let links
</script>

<ul id="navigation">
    {#each links as link}
        <li class="group">
            <span class="category uppercase">{link.category}</span>
            <ul>
                {#each link.items as item}
                    {@const active = $page.url.pathname.includes(item.path)}
                    <li class="item">
                        <Link
                            href={item.path}
                            underline={false}
                            color={active ? 'white' : 'dark'}
                            bold={active}
                        >
                            {item.label}
                        </Link>
                    </li>
                {/each}
            </ul>
        </li>
    {/each}
</ul>

<style lang="scss">
@import '~/styles/domain.scss';

ul {
	list-style: none;
	padding: 0;
	margin: 0;
}

#navigation {
    min-width: 280px;
    padding-top: 64px;
    padding-left: 32px;
    padding-bottom: 32px;
    height: 100%;

    .group {
        margin-bottom: 32px;
    }

    .item {
        display: block;
        padding-bottom: 10px;
    }
}
</style>