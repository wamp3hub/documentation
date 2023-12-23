<script>
import '~/styles/code.scss'
</script>

```go
import (
    "fmt"

    wamp "github.com/wamp3hub/wamp3go"
)

func greeting(name string, callEvent wamp.CallEvent) (string, error) {
    return "Hello, " + name + "!"
}

func main() {
    // join code here
    registration, e := wamp.Register(
        session,
        "net.example.greeting",
        &wamp.RegisterOptions{},
        greeting,
    )
    if e == nil {
        fmt.Printf("new registration ID=%s URI=%s", registration.ID, registration.URI)
    } else {
        fmt.Printf("during register error=%s", e)
        panic("register error")
    }
}
```
