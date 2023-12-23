<script>
import '~/styles/code.scss'
</script>

```python
async def greeting(name: str, **kwargs):
    return f'Hello, {name}!'

async def main():
    # join code here
    registration = await wamps.register(
        'net.example.greeting',
        greeting,
    )
    print(f'new registration ID={registration.ID} URI={registration.URI}')
```
