
interface AdPriceProps {
    price: string;
}

export default function AdPrice({ price }: AdPriceProps) {
    return (
        <div className="text-xs font-inner  text-[#A47B7B]">
            {price}
        </div>
    )
}
