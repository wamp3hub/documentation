<script>
import '~/styles/code.scss'
</script>

```python
import asyncio
import wamp3py.transports

async def main():
    wamps = await wamp3py.transports.websocket_join(
        address='localhost:8800',
        credentials={'username': 'test', 'password': 'secret'},
    )
    # Your code here...

if __name__ == '__main__':
    asyncio.run(main())
```
