import Image from 'next/image';
import Search from '../molecules/Serach';

import LogoImg from '@/public/logos/logo.svg'
import FrendsLogo from '@/public/users.svg'
import UserIcon from '@/public/userIcon.svg'

export default function Header() {
    return (
        <header className="container flex justify-between my-8 w-full">
            <LogoImg 
                 width={167} 
                 alt="Логотип" 
             />
             <Search/>
             <div className="flex max gap-4">
                 <FrendsLogo alt="Лого друга"  width={37}/>
                 <UserIcon alt="Лого Пользователя" width={37}/>
             </div>
        </header>
    );
} 



























