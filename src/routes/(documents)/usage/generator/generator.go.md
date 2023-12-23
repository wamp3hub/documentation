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
	generator, e := wamp.NewRemoteGenerator[int](
		session,
		&wamp.CallFeatures{URI: "net.example.counting_rhyme"},
		10,
	)
	if e != nil {
		fmt.Printf("generator create error %s\n", e)
		panic("generator create error")
	}
	for generator.Active() {
		_, v, e := generator.Next(wamp.DEFAULT_TIMEOUT)
		if e == nil {
			fmt.Printf("%d\n", v)
		} else {
			fmt.Printf("error %s\n", e)
		}
	}
	fmt.Print("counting done\n")
}
```
