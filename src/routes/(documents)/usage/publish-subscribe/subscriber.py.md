<script>
import '~/styles/code.scss'
</script>

```python
# subscriber.py

import wamp3py

async def on_echo(message: str, **kwargs):
    print('new message', message)


async def main():
    # join code here
    subscription = await wamps.subscribe(
        'net.example',
        on_echo
    )
    print(f'new subscription ID={subscription.ID} URI={subscription.URI}')
```
