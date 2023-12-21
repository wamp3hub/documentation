---
number: 0
category: Usage
title: Join
layout: document
---

<script>
import * as domain from '~/domain'
import Snippets from '~/components/Snippets.svelte'

import JavaScriptJoinSnippet from './snippet.js.md'
import PythonJoinSnippet from './snippet.py.md'
import GoJoinSnippet from './snippet.go.md'
let joinSnippets = [
    {language: domain.LanguageKinds.JavaScript, component: JavaScriptJoinSnippet},
    {language: domain.LanguageKinds.Python, component: PythonJoinSnippet},
    {language: domain.LanguageKinds.GO, component: GoJoinSnippet},
]
</script>

<Snippets initial={domain.LanguageKinds.JavaScript} data={joinSnippets} />
