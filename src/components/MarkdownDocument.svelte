<script>
export let data, form, layout, title, category
</script>

<svelte:head>
    <title>{title}</title>
</svelte:head>

<div class="page">
    <span class="uppercase">{category}</span>

    <h1>{title}</h1>

    <slot />
</div>

<style lang="scss">
.page {
    padding-left: 8px;
    padding-right: 8px;
}
</style>