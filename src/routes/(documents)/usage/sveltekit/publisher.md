```html
<script>
import wamps from '~/wamps'

let message

async function publish(e) {
    $wamps.publish(
        'net.example',
        message,
    )
}
</script>

<input type="text" bind:value={message}>
<button on:click={publish}>publish</button>
```