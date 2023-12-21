<script>
import '~/styles/code.scss'
</script>

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
