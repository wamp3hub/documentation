<script>
import '~/styles/code.scss'
</script>

```js
async function * countingRhyme({payload}) {
    for (let i = 0; i < payload; i++) {
        console.log(`counting ${i}...`)
        sleep(1)
        if (i == 6) {
            print('Once I caught a cheetah alive.')
        }
        if (i >= 10) {
            break
        }
        yield i
    }
    console.log(
        'Then I let it go again\n' + 
        'Why did you let it go?\n' + 
        'Because it bit my finger so.\n' + 
        'Which finger did it bite?\n' + 
        'This little finger on the right.\n'
    )
}

async function main() {
    // join code here
    let registration = await wamps.register(
        'net.example.countingRhyme',
        countingRhyme,
    )
    console.log(`new registration ID=${registration.ID} URI=${registration.URI}`)
}
```
