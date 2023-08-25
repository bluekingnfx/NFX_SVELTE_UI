import type { Writable } from "svelte/store";


type PrefixStoreImplementationType = () => Writable<string>

const prefixStoreImplementation:PrefixStoreImplementationType = () => {
    let value = "NFX"
    let subscribers:((val:string) => void)[] = []

    const notify = () => {
        subscribers.forEach(i => {
            i(value)
        })
    }

    const subscribe = (fn:(val:string) => void) => {
        fn(value)
        subscribers = [...subscribers,fn]
        return () => {
            subscribers.splice(subscribers.indexOf(fn),1)
        }
    }

    const set = (newValue:string) => {
        value = newValue
        notify()
    }

    const update = (fn:(newValue:string) => string) => {
        value = fn(value)
        notify()
    }

    return {
        subscribe,
        set,
        update
    }
}


const prefixStore = prefixStoreImplementation()

export default prefixStore