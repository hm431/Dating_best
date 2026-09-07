import ForYouCard from "./forYouCard";
import ScrollButtons from "./scrollButtons"


export default function ForYou() {
    return (
        <div>
            <h1 className="font-inner text-5xl line-h font-normal leading-[36.6px] pb-7 pt-2">Для вас</h1>
            <div className="flex gap-10 overflow-y-auto scroll-hidden">
                <ForYouCard />
                <ForYouCard />
                <ForYouCard />
                <ForYouCard />
                <ScrollButtons/>
            </div>
        </div>
    );
}