import {useRef, useEffect } from "react"

export const useFocus = function() {
    const ref = useRef<HTMLInputElement>(null)
    useEffect(() => {
        ref.current?.focus()
    })
    return ref;
}