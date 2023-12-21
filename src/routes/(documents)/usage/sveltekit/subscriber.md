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