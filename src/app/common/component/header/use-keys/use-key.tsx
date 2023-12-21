import {Key, useLayoutEffect, useState} from "react";

const specialKeys = [
    `Control`,
    `k`
]

export const UseKeys = () => {
    const [keys, setKeys] = useState<KeyboardEvent[]>([]);
    useLayoutEffect(() => {
        const downHandler = (e: KeyboardEvent) => {
           const { key, shiftKey, repeat } = e;
            if (repeat) return // Bail if they're holding down a key
            setKeys((prevKeys) => {
                return [...prevKeys, { key, shiftKey } as KeyboardEvent]
            })
        }
        const upHandler = (e: KeyboardEvent) => {
            const { key, shiftKey } = e;
            setKeys(prevKeys => {
                return prevKeys.filter(k => {
                    if (specialKeys.includes(key))
                        return false // Special keys being held down/let go of in certain orders would cause keys to get stuck in state
                    return JSON.stringify(k) !== JSON.stringify({ key, shiftKey }) // JS Objects are unique even if they have the same contents, this forces them to actually compare based on their contents
                })
            })
        }
        window.addEventListener(`keydown`, downHandler)
        window.addEventListener(`keyup`, upHandler)
        return () => {
            // Cleanup our window listeners if the component goes away
            window.removeEventListener(`keydown`, downHandler)
            window.removeEventListener(`keyup`, upHandler)
        }

    }, []);

    return keys.map(x => x.key) // return a clean array of characters (including special characters 🎉)
}