import Image from 'next/image';
import Search from '../molecules/serach';

import LogoImg from '@/public/logo.svg'
import FrendsLogo from '@/public/users.svg'
import UserIcon from '@/public/userIcon.svg'

export default function Header() {
    return (
        <header className="container flex justify-evenly my-8">
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



























