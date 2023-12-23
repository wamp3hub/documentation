<script>
import '~/styles/code.scss'
</script>

```js
async function main() {
    // join code here
    let response = await wamps.call(
        'net.example.greeting',
        'WAMP',
    )
    console.log(`call("net.example.greeting") => ${response.payload}`)
}
```
