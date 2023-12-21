<script>
import '~/styles/code.scss'
</script>

```js
import wamp3js from 'wamp3js'

async function main() {
    let wamps = await wamp3js.transports.WebsocketJoin({
        address: '0.0.0.0:8800',
        credentials: {username: 'test', password: 'secret'},
    })
    // Your code here...
}

main()
```
