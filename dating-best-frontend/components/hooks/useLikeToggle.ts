"use client"

import { useState } from "react"

interface UseLikeToggleProps {
    itemId: string
}

export default function useLikeToggle({ itemId }: UseLikeToggleProps) {
    const [liked, setLiked] = useState(false)

    function toggleLike() {
       setLiked(!liked)
    }

    return { liked, toggleLike }
}