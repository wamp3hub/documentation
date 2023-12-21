---
number: 5
category: Usage
title: SvelteKit
layout: document
---

<script>
import WAMPSSnippet from './wamps.md'
import LayoutJSSnippet from './layout-js.md'
import LayoutSvelteSnippet from './layout-svelte.md'
import SubscriberSnippet from './subscriber.md'
import PublisherSnippet from './publisher.md'
</script>

`svelte.config.js`

```js
/** @type {import('@sveltejs/kit').Config} */
export default {
	kit: {
		alias: {
			'~': 'src/'
		}
    }
}
```

`src/wamps.js`

<WAMPSSnippet />

`src/routes/+layout.js`

<LayoutJSSnippet />

`src/routes/+layout.svelte`

<LayoutSvelteSnippet />

`src/routes/subscriber/+page.svelte`

<SubscriberSnippet />

`src/routes/publisher/+page.svelte`

<PublisherSnippet />
