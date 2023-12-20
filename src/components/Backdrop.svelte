<script>
let display = false

export function show() {
    display = true
}

export function hide() {
    display = false
}
</script>

<div class:backdrop-active={display}>
    {#if display}
        <div class="closable-area" on:click={hide}></div>

        <div class="backdrop-content">
            <slot />
        </div>
    {/if}
</div>

<style lang="scss">
@import '~/styles/domain.scss';

.backdrop-active {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 100;
    backdrop-filter: blur(4px);
    background: rgba(0, 0, 0, 0.33);

    .closable-area {
        width: 100%;
        height: 20%;
    }

    .backdrop-content {
        width: 100%;
        height: 80%;
        border-top: 1px solid $color-gray;
        border-top-left-radius: 3%;
        border-top-right-radius: 3%;
        background-color: $color-black;
        overflow-y: auto;
    }
}
</style>