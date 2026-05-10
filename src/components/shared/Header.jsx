import logo from '@/assets/logo.png'
import { format } from "date-fns";
import Image from 'next/image';

const Header = () => {
    return (
        <div className='text-center mb-7'>
            <Image src={logo} width={300} height={200} alt='logo' className='mx-auto mb-5'></Image>

            <p className='font-normal text-lg text-gray-600 mb-2.5'>Journalism Without Fear or Favour</p>
            <p className='font-medium text-xl text-gray-600'>{format(new Date(), "EEEE, MMM dd, yyyy")}</p>
        </div>
    );
};

export default Header;