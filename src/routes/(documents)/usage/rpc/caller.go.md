<script>
import '~/styles/code.scss'
</script>

```go
import (
    "fmt"

    wamp "github.com/wamp3hub/wamp3go"
)

func main() {
    // join code here
	pendingResponse := wamp.Call[string](
		session,
		&wamp.CallFeatures{URI: "net.example.greeting"},
		"WAMP",
	)
	_, v, e := pendingResponse.Await()
	if e == nil {
		fmt.Printf("call(net.example.greeting) %s\n", v)
	} else {
		fmt.Printf("call(net.example.greeting) error=%s\n", e)
	}
}
```
