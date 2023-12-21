import { writable } from 'svelte/store'
import { browser } from '$app/environment'
import * as domain from '~/domain'

let selectedLanguage = writable(domain.LanguageKinds.JavaScript)
if (browser) {
    let storedLanguage = localStorage.getItem('language')
    if (storedLanguage) {
        selectedLanguage.set(storedLanguage)
    }
    selectedLanguage.subscribe(v => {
        localStorage.setItem('language', v)
    })
}
export default selectedLanguage

