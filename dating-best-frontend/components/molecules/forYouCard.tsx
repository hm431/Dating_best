import Image from "next/image";
import LikeButton from "../atoms/LikeButton"; 
// export default function likeImage( ){
//     console.log("liked")
// }

export default function ForYouCard() {
    return (
        <div className="flex flex-col justify-between items-end shrink-0 w-141.75 h-45.5 bg-[#A47B7B] rounded-lg  ">
            <LikeButton itemId="342423"/>
            <h2 className="m-4 text-black font-black text-2xl font-inner">Мероприятие</h2>
        </div>
    );
}


