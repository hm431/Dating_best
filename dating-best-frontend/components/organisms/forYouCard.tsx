import Image from "next/image";
import likeIcon from "./icons/Like.svg";

// export default function likeImage( ){
//     console.log("liked")
// }

export default function ForYouCard() {
    return (
        <div className="flex flex-col justify-between items-end shrink-0 w-141.75 h-45.5 bg-[#A47B7B] rounded-lg  ">
            <Image src={likeIcon}  alt="like" width={21} height={21} className="m-2 right-0" />
            <h2 className="m-4 text-black font-black text-2xl font-inner">Мероприятие</h2>
        </div>
    );
}