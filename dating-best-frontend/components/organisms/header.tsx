import Image from 'next/image';
import Search from '../molecules/Serach';

import LogoImg from '@/public/logos/logo.svg'
import FrendsLogo from '@/public/users.svg'
import UserIcon from '@/public/userIcon.svg'

export default function Header() {
    return (
        <header className="container flex justify-between my-8 w-full">
            <Image 
                width={167}
                src={LogoImg} 
                alt="Логотип" 
            />
            <Search/>
            <div className="flex max gap-4">
                <Image alt="Лого друга" src={FrendsLogo} width={37}/>
                <Image alt="Лого Пользователя" src={UserIcon} width={37}/>
            </div>
        </header>
    );
} 



























