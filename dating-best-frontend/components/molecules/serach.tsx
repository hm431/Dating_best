import Form from 'next/form'
import SearchImg from '@//public/free-icon-search-4024513.png'

//TODO Скачать лого лупы из макета заменить на нужное 
export default function Search() {
    return (
        <Form action="/search" className='flex justify-between bg-[#D9D9D9] w-120 rounded-2xl'>
            <input
                name="query"
                placeholder="Поиск"
                className='text-black mx-[21px] focus:outline-none w-full'
                style={{
                    backgroundImage: `url(${SearchImg.src})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'right center',
                    backgroundSize: '18px 18px',
                }}
            />
        </Form>

    );
}