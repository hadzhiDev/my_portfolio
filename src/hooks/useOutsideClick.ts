"use client"

import { useEffect, useState } from "react";

export default function useOutsideClick(condition: (e: any) => boolean) {
    const [state, setState] = useState(false)

    useEffect(() => {
        const handleClick = (e: MouseEvent) => {
            if (condition(e)) setState(false)
        }

        document.addEventListener("click", handleClick);
        return () => document.removeEventListener("click", handleClick);
    }, [condition])

    return [state, setState] as const
}
