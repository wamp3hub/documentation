---
number: 1
category: Introduction
title: Transports
layout: document
---

WAMP WebSocket Communication Module (Transport)

This module defines a WebSocket Transport layer and enables communication between programs using the WAMP.
In general Transport layer can use Unix Socket and several TCP Sockets like WebSocket, WebTransport and etc.
Here provided examples of WebSocket due to ease of use

It consists of the following functions:

- websocket_connect: Establishes a WebSocket connection to a WAMP server and returns a WSTransport instance.
- websocket_join: Joins a WAMP session by connecting to a WAMP server using WebSocket and obtaining session credentials.
