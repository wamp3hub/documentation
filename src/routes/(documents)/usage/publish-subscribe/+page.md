---
number: 1
category: Usage
title: Publish & Subscribe
layout: document
---

<script>
import * as domain from '~/domain'
import Snippets from '~/components/Snippets.svelte'

import JavaScriptPublisherSnippet from './publisher.js.md'
import JavaScriptSubscriberSnippet from './subscriber.js.md'
import PythonPublisherSnippet from './publisher.py.md'
import PythoSubscriberSnippet from './subscriber.py.md'
import GoPublisherSnippet from './publisher.go.md'
import GoSubscriberSnippet from './subscriber.go.md'

let publisherSnippets = [
    {language: domain.LanguageKinds.JavaScript, component: JavaScriptPublisherSnippet},
    {language: domain.LanguageKinds.Python, component: PythonPublisherSnippet},
    {language: domain.LanguageKinds.GO, component: GoPublisherSnippet}
]
let subscriberSnippets = [
    {language: domain.LanguageKinds.JavaScript, component: JavaScriptSubscriberSnippet},
    {language: domain.LanguageKinds.Python, component: PythoSubscriberSnippet},
    {language: domain.LanguageKinds.GO, component: GoSubscriberSnippet}
]

</script>

Subscriber: Also known as the "consumer" or "listener", the subscriber able to subscribe to particular topic and receives events from it.
When the publisher sends out a message, all relevant subscribers get notified.

Here we'll deliver an event to multiple consumers.

<Snippets data={subscriberSnippets} />

Publisher: Also known as the "producer" or "event emitter", the publisher is responsible for sending events to topic. 
It can broadcast to specifically target or to particular subscribers.

<Snippets data={publisherSnippets} />


Output:
```
new message: Hello, WAMP!
```


