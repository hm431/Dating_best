import Image from 'next/image';
import LogoImg from '../../public/logo.svg'

import Search from './serach';

export default function Header() {
    return (
        <header className=" container flex justify-evenly my-8">
            <Image 
                width={167}
                src={LogoImg} 
                alt="Логотип" 
            />
            <Search/>
            <div className="flex max">
                <div>
                    Frends logo
                </div>
                <div>
                    user logo
                </div>
            </div>
        </header>
    );
}