import Image from 'next/image';
import Form from 'next/form'
import SearchImg from '../../public/free-icon-search-4024513.png'

//TODO Скачать лого лупы из макета заменить на нужное 
export default function Search() {
    return (
        <Form action="/search" className='flex justify-between rounded-xs bg-[#D9D9D9] w-120'>
            <input 
                name="query"
                placeholder="Поиск"
                className='text-black'/>


            <Image 
                width={18} 
                src={SearchImg} 
                alt="Лого поиска"
                />
        </Form>
        
    );
}