<script>
import '~/styles/code.scss'
</script>

```js
async function greeting({payload}) {
    return `Hello, ${payload}!`
}

async function main() {
    // join code here
    let registration = await wamps.register(
        'net.example.greeting',
        greeting,
    )
    console.log(`new registration ID=${registration.ID} URI=${registration.URI}`)
}
```
