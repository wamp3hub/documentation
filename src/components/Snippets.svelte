<script>
import language from '~/language'
import TransparentButton from '~/components/buttons/Transparent.svelte'
import Tab from '~/components/tab'
import ICheck from '~/icons/check.svg?component'
import ICopy from '~/icons/copy.svg?component'

export let data

let body, displayCheck = false
function copyToClipboard(e) {
    e.preventDefault()
    let container = body.container()
    let content = container.innerText
    navigator.clipboard.writeText(content)
    displayCheck = true
    setTimeout(() => displayCheck = false, 3000)
}
</script>

<div class="snippets">
    <Tab.Group selected={language}>
        <Tab.Head>
            {#each data as snippet}
                <Tab.Title id={snippet.language} selected={language}>
                    {snippet.language}
                </Tab.Title>
            {/each}
        </Tab.Head>
        <Tab.Body bind:this={body}>
            <div class="copy-button">
                {#if displayCheck}
                    <ICheck />
                {:else}
                    <TransparentButton on:click={copyToClipboard}>
                        <ICopy />
                    </TransparentButton>
                {/if}
            </div>
            {#each data as snippet}
                <Tab.Content id={snippet.language} selected={language}>
                    <svelte:component this={snippet.component} />
                </Tab.Content>
            {/each}
        </Tab.Body>
    </Tab.Group>
</div>

<style lang="scss">
.snippets {
    position: relative;

    .copy-button {
        position: absolute;
        right: 0;
        padding: 8px;
    }
}
</style>
