<script>
export let title, category
</script>

<svelte:head>
    <title>{title}</title>
</svelte:head>

<span class="uppercase">{category}</span>

<h1>{title}</h1>

<slot />
