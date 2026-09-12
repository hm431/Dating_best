
import Link from 'next/link';

interface AdNameProps {
    name: string;
    href: string;
    isExternal?: boolean;
}

export default function AdName({ name, href, isExternal }: AdNameProps) {
    return (
        <Link className="text-xs font-normal font-inner "  href={href} {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
            {name}
        </Link>
    )
}
