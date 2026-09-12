interface AdDateMonthProps {
    month: string;
}


export default function AdDateMonth({ month }: AdDateMonthProps) {
    return (
        <div className="text-xs font-inner  text-[#80828B]">
                {month}
        </div>
    )
}
