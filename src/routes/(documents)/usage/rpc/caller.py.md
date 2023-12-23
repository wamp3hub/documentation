<script>
import '~/styles/code.scss'
</script>

```python
async def main():
    # join code here
    response = await wamps.call(
        'net.example.greeting',
        'WAMP',
    )
    print(f'call("net.example.greeting") => {response.payload}')
```
