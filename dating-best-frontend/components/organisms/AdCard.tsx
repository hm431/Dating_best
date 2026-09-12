import AdDateNumber from "../atoms/AdDateNumber";
import AdDateMonth from "../atoms/AdDateMonth";
import AdName from "../atoms/AdName";
import AdPrice from "../atoms/AdPrice";

type MonthIndex = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11;

const monthDict: Record<MonthIndex, string> = {
    0: "Янв.",
    1: "Фев.",
    2: "Март",
    3: "Апр.",
    4: "Май",
    5: "Июнь",
    6: "Июль",
    7: "Авг.",
    8: "Сен.",
    9: "Окт.",
    10: "Ноя.",
    11: "Дек."
}

interface AdCardProps {
    name: string,
    herf: string,
    isExternal: boolean,
    date: Date,
    price: string,
}


export default function AdCard({ name, herf, isExternal, date, price }: AdCardProps) {
    const [dateNumber, dateMonth] = [date.getDate(), date.getMonth() as MonthIndex]
    return (
        <div className="flex  my-2 ml-4">
            <div className=" w-13 items-center flex justify-center flex-col rounded-l-lg bg-[#29292D]">
                <AdDateNumber date={dateNumber} />
                <AdDateMonth month={monthDict[dateMonth]} />
            </div>
            <div className="pl-2.5 w-35 items-start  flex justify-center flex-col rounded-r-lg bg-[#1F1F22] ">
                <AdName name={name} href={herf} isExternal={isExternal} />
                <AdPrice price={price} />
            </div>
        </div>
    )
}