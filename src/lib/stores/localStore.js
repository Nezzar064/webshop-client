import { writable as internal, get } from 'svelte/store'
import { browser } from '$app/env'

export function writable(key, initialValue) {
    const string = typeof(initialValue) === 'string'
    const store = internal(initialValue)
    const {subscribe, set} = store
    if(browser) {
        const json = localStorage.getItem(key)
        if (json) {
            if(string) {
                set(json)
            } else {
                set(JSON.parse(json))
            }
        }
    }
    return {
        set(value) {
            if(browser) {
                if(string) {
                    localStorage.setItem(key, value)
                } else {
                    localStorage.setItem(key, JSON.stringify(value))
                }
            }
            set(value)
        },
        update(cb) {
            const value = cb(get(store))
            this.set(value)
        },
        subscribe
    }
}
