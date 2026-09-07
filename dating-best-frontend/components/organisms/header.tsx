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
                <Image src={FrendsLogo} width={37} alt='Кнопка друзей'/>
                <Image src={UserIcon} width={37} alt='Кнопка пользователей'/>
            </div>
        </header>
    );
} 