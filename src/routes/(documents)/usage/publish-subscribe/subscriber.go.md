<script>
import '~/styles/code.scss'
</script>

```go
import (
    "fmt"

    wamp "github.com/wamp3hub/wamp3go"
)

func onEcho(message string, publishEvent wamp.PublishEvent) {
    fmt.Printf("new message %s\n", message)
}

func main() {
    // join code here
    subscription, e := wamp.Subscribe(
        session,
        "net.example",
        &wamp.SubscribeOptions{},
        onEcho,
    )
    if e == nil {
        fmt.Printf("new subscription ID=%s URI=%s", subscription.ID, subscription.URI)
    } else {
        fmt.Printf("during subscribe error=%s", e)
        panic("subscribe error")
    }
}
```
