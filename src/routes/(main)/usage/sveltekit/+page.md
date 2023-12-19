# SvelteKit


`src/wamps.js`

```js
import {writable} from 'svelte/store'
import wamp3js from 'wamp3js'

const wamps = writable()

wamp3js.transports.WebsocketJoin({
    address: 'localhost:8800',
    credentials: {username: 'test', password: 'secret'},
})
.then(x => wamps.set(x))

export default wamps
```


`src/+layout.js`

```js
export let ssr = false
export let csr = true
```


`src/+layout.svelte`

```html
<script>
import wamps from '~/wamps'
</script>

{#if $wamps}
    <slot />
{:else}
    <p>joining to WAMP network...</p>
{/if}
```


`src/subscriber/+page.svelte`

```html
<script>
import wamps from '~/wamps'

let topic = 'net.example'
let messages = []

$wamps.subscribe(
    topic,
    {},
    async function (event) {
        messages = [...messages, event.payload]
    }
)
</script>

<h1>Messages from {topic}:</h1>
{#each messages as m}
    <p>{m}</p>
{/each}
```


`src/publisher/+page.svelte`

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
