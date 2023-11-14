```go
type LoginPayload struct {
    Username string `json:"username"`
    Password string `json:"password"`
}

session, e := wampTransports.WebsocketJoin(
    "0.0.0.0:8888", // router address
    false,
    wampSerializers.DefaultSerializer,
    &LoginPayload{"test", "secret"},
)
if e == nil {
    fmt.Printf("WAMP Join Success\n")
} else {
    panic("WAMP Join Error")
}

onEcho := func(publishEvent wamp.PublishEvent) {
    var payload string
    publishEvent.Payload(&payload)
    fmt.Printf("new message %s\n", payload)
}

wamp.Subscribe(session, "net.example", &wamp.SubscribeOptions{}, onEcho)

wamp.Publish(session, &wamp.PublishFeatures{URI: "net.example"}, "Hello, WAMP!")
wamp.Publish(session, &wamp.PublishFeatures{URI: "net.example"}, "How are you?")
```
