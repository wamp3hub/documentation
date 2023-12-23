<script>
import '~/styles/code.scss'
</script>

```js
// subscriber.js

async function onEcho({payload}) {
    console.log('new message', payload)
}

async function main() {
    // join code here
    let subscription = await wamps.subscribe(
        'net.example',
        {},
        onEcho,
    )
    console.log(`new subscription ID=${subscription.ID} URI=${subscription.URI}`)
}
```
