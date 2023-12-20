---
category: Introduction
title: WAMP
layout: document
---

<script>
import Link from '~/components/Link.svelte'
</script>

The Web Application Messaging Protocol (WAMP) is a open communication protocol
registered at <Link href="https://www.iana.org/assignments/websocket/websocket.xml" newTab={true}>IANA</Link> that alows the exchange of messages between applications, distributed and load-balanced over a router.
It uses subprotocols (transports) as WebSocket, WebTransport, etc. for communication and provides two main patterns of interaction: routed Remote Procedure Calls (RPC) and Publish/Subscribe (PubSub).

RPC allows different components of an application to call procedures in other components, possibly running in different processes or machines.

PubSub, on the other hand, allows components to communicate via events.
A component can publish events, and other components can subscribe to them.

WAMP is language-agnostic, meaning it can be used with any programming language that has a WAMP client library.

WAMP supports not only anonymous but also authenticated sessions with roles. This means you can control who can do what in your application.

WAMP also supports different types of serialization, including JSON, MessagePack and CBOR.
This means you can choose the serialization that best fits your needs, whether you need the human-readability of JSON or the efficiency of MessagePack.

In a nutshell, WAMP is designed to connect systems in a loose, efficient, and standardized way for real-time, interactive applications.
