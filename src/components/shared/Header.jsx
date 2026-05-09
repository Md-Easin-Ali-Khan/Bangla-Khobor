import logo from '@/assets/logo.png'
import { format } from "date-fns";
import Image from 'next/image';

const Header = () => {
    return (
        <div>
            <div className='text-center'>
                <Image src={logo} width={300} height={200} alt='logo' className='mx-auto mb-5'></Image>
                <p className='font-normal text-lg text-gray-600 mb-2.5'>Journalism Without Fear or Favour</p>
                <p>{format(new Date(), "EEEE, MMM dd, yyyy")}</p>
            </div>
        </div>
    );
};

export default Header;