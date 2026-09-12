interface AdDateNumberProps {
    date: number;
}


export default function AdDateNumber({ date }: AdDateNumberProps) {
    return (
        <div className="text-xs font-inner ">
                {date}
        </div>
    )
}
