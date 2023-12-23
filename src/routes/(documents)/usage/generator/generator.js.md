<script>
import '~/styles/code.scss'
</script>

```js
async function main() {
    // join code here
    let generator = await wamps.call(
        'net.example.counting_rhyme',
        10,
    )
    await for (let event in generator) {
        console.log(event.payload)
    }
    console.log('counting done')
}
```
