<script>
import '~/styles/code.scss'
</script>

```go
import (
    "fmt"
    "time"

    wamp "github.com/wamp3hub/wamp3go"
)

func countingRhyme(n int, callEvent wamp.CallEvent) (int, error) {
    source = wamp.Event(callEvent)
    for (i := 1; i < n; i++) {
        fmt.Printf("counting %d...", i)
        time.Sleep(1)
        if i == 6 {
            fmt.Println("Once I caught a cheetah alive.")
        }
        if i >= 10 {
            break
        }
        source = wamp.Yield(source, i)
    }
    fmt.Println("Then I let it go again\nWhy did you let it go?\nBecause it bit my finger so.\nWhich finger did it bite?\nThis little finger on the right.")
}

func main() {
    // join code here
    registration, e := wamp.Register(
        session,
        "net.example.counting_rhyme",
        &wamp.RegisterOptions{},
        countingRhyme,
    )
    if e == nil {
        fmt.Printf("new registration ID=%s URI=%s", registration.ID, registration.URI)
    } else {
        fmt.Printf("during register error=%s", e)
        panic("register error")
    }
}
```
