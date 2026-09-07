import Image from "next/image";
import cardImg from "../../public/stul_mem_udali_potom.jpg";


export default function EventCard() {
    return (
        <div className="w-70.5 flex flex-col bg-blue-50 text-black rounded-[10px] relative ">
            <div className="relative w-70.5 h-70.5 overflow-hidden rounded-t-[10px]">
                <Image
                    src={cardImg}
                    alt="like"
                    fill 
                    style={{ objectFit: 'cover' }} 
                    className="rounded-t-[10px] w-full"
                />
                {/* Тег поверх картинки */}
                <div className="absolute top-2 right-2 px-2 py-1 rounded z-10 text-black bg-[#D9D9D999] font-semibold">
                    Какой-то тег
                </div>
            </div>
            <div className="px-4 pb-4.25">
                <h3 className="font-inner text-2xl font-black">Мероприятие</h3>
                <h4 className="font-inter text-[20px] leading-[100%] tracking-[0%] font-light text-black">17 янв ТЦ Усть залупинск</h4>
            </div>
        </div >
    );
}