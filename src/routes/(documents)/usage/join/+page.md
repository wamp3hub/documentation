---
number: 0
category: Usage
title: Join
layout: document
---

<script>
import * as domain from '~/domain'
import Snippets from '~/components/Snippets.svelte'

import JavaScriptJoinSnippet from './join.js.md'
import PythonJoinSnippet from './join.py.md'
import GoJoinSnippet from './join.go.md'
let joinSnippets = [
    {language: domain.LanguageKinds.JavaScript, component: JavaScriptJoinSnippet},
    {language: domain.LanguageKinds.Python, component: PythonJoinSnippet},
    {language: domain.LanguageKinds.GO, component: GoJoinSnippet},
]
</script>

<Snippets data={joinSnippets} />
