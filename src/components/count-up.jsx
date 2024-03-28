"use client"

import { useEffect, useRef, useState } from 'react'

export const CountUp = ({ start = 0, end, timer = 50 }) => {
    const [state, setState] = useState(null)
    const ref = useRef(start)

    const acc = end / 100

    const updateCounterState = () => {
        if (ref.current < end) {
            const result = Math.ceil(ref.current + acc);
            if (result > end) return setState(end)
            setState(result)
            ref.current = result
        }
        setTimeout(updateCounterState, timer)
    };

    useEffect(() => {
        let isMounted = true;
        if (isMounted) updateCounterState()
        return () => {
            isMounted = false
        }
    }, [start, end])
    return (
        <span>{state}</span>
    )
}