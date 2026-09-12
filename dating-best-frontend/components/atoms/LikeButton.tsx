'use client'

import LikeIcon from "@/public/icons/LikeSmth.svg";
import useLikeToggle from "@/components/hooks/useLikeToggle";


interface LikeButtonProps {
    itemId: string
}

export default function LikeButton({ itemId }: LikeButtonProps) {
    const { liked, toggleLike } = useLikeToggle({ itemId })

    return (
        <button
            type="button"
            onClick={toggleLike}
            aria-label="Like"
            className="relative m-2 right-1"
        >
            <LikeIcon
                alt="like"
                width={22}
                height={21}

                className={`m-2 right-1 transition-colors hover:text-[oklch(96%_0.002_17.2)] ${liked
                        ? "text-[oklch(70%_0.15_20)] [--icon-bg-color:oklch(70%_0.15_20)]"
                        : "text-black [--icon-bg-color:transparent]"
                    }`} />
        </button>
    )
}