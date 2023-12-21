<script>
import TransparentButton from '~/components/buttons/Transparent.svelte'
import Tab from '~/components/tab'
import ICheck from '~/icons/check.svg?raw'
import ICopy from '~/icons/copy.svg?raw'

export let initial, data

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
    <Tab.Group {initial} let:selected>
        <Tab.Head>
            {#each data as snippet}
                <Tab.Title id={snippet.language} {selected}>
                    {snippet.language}
                </Tab.Title>
            {/each}
        </Tab.Head>
        <Tab.Body bind:this={body}>
            <div class="copy-button">
                {#if displayCheck}
                    {@html ICheck}
                {:else}
                    <TransparentButton on:click={copyToClipboard}>
                        {@html ICopy}
                    </TransparentButton>
                {/if}
            </div>
            {#each data as snippet}
                <Tab.Content id={snippet.language} {selected}>
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
