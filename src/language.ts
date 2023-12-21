import {writable} from 'svelte/store'
import * as domain from './domain'

export default writable<domain.LanguageKinds>(domain.LanguageKinds.JavaScript)

