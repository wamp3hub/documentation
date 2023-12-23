<script>
import '~/styles/code.scss'
</script>

```go
// publisher.go

import (
    "fmt"

    wamp "github.com/wamp3hub/wamp3go"
)

func main() {
    // join code here
    e := wamp.Publish(session, &wamp.PublishFeatures{URI: "net.example"}, "Hello, WAMP!")
    if e == nil {
        fmt.Printf("publication sent successfully")
    } else {
        fmt.Printf("during publish error=%s", e)
        panic("publish error")
    }
}
```
