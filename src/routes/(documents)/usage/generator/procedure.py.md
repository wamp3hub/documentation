<script>
import '~/styles/code.scss'
</script>

```python
import asyncio

async def counting_rhyme(n: int, **kwargs):
    for i in range(1, n):
        print(f'counting {i}...')
        await asyncio.sleep(1)
        if i == 6:
            print('Once I caught a cheetah alive.')
        if i >= 10:
            break
        yield i
    print((
        'Then I let it go again'
        'Why did you let it go?'
        'Because it bit my finger so.'
        'Which finger did it bite?'
        'This little finger on the right.'
    ))

async def main():
    # join code here
    registration = await wamps.register(
        'net.example.counting_rhyme',
        counting_rhyme,
    )
    print(f'new registration ID={registration.ID} URI={registration.URI}')
```
