<script>
import '~/styles/code.scss'
</script>

```go
import (
    wampTransports "github.com/wamp3hub/wamp3go/transports"
)

func main() {
    type LoginPayload struct {
        Username string `json:"username"`
        Password string `json:"password"`
    }

    session, e := wampTransports.WebsocketJoin(
        &wampTransports.WebsocketJoinOptions{
            Address:     "0.0.0.0:8800",
            Credentials: &LoginPayload{"test", "secret"},
        },
    )
    if e == nil {
        fmt.Println("WAMP Join Success")
    } else {
        panic("WAMP Join Error")
    }
    // Your code here...
}
```
