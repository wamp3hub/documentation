<script>
import '~/styles/code.scss'
</script>

```python
async def main():
    # join code here
    generator = await wamps.call(
        'net.example.counting_rhyme',
        10,
    )
    async for event in generator:
        print(event.payload)
    print('counting done')
```
