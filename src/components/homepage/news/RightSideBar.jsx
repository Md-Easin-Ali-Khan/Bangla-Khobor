import Image from 'next/image';
import image1 from '@/assets/swimming.png';
import image2 from '@/assets/class.png';
import image3 from '@/assets/playground.png';
import image4 from '@/assets/group.png'
import React from 'react';
import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter } from 'react-icons/fa';

const RightSideBar = () => {
    return (
        <div>
            <div>
                <h2 className='font-semibold text-xl text-gray-700 mb-5'>Login With</h2>
                <div className='flex flex-col gap-4'>
                    <button className='btn border-blue-600 text-blue-600'><FaGoogle />Login with Google</button>

                    <button className='btn border-black '><FaGithub />Login with GitHub</button>
                </div>
            </div>

            <div>
                <h2 className='font-semibold text-xl text-gray-600 my-7'>Find Us On</h2>
                <ul className='flex flex-col gap-8 ml-5'>
                    <li className='flex gap-4 items-center text-gray-500'><FaFacebook className='text-[#3B599C] my-2 w-5 h-5' /> Facebook</li>
                    <li className='flex gap-4 items-center text-gray-500'><FaTwitter className='text-[#58A7DE] my-2 w-5 h-5' /> Twitter</li>
                    <li className='flex gap-4 items-center text-gray-500'><FaInstagram className='text-[#D82D7E] my-2 w-5 h-5' /> Instagram</li>
                </ul>
            </div>

            <div>
                <h2 className='font-semibold text-xl text-gray-600 my-7'>Q-Zone</h2>

                <div>
                    <div>
                        <div className='relative w-full aspect-square'>
                            <Image
                                src={image1}
                                fill
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                alt='swimming'
                                className="rounded-xl object-cover p-6"
                            />
                        </div>
                        <p className='text-center mb-6'>Swimming</p>
                    </div>

                    <div>
                        <div className='relative w-full aspect-square'>
                            <Image
                                src={image2}
                                fill
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                alt='class'
                                className="rounded-xl object-cover p-6"
                            />
                        </div>
                        <p className='text-center mb-6'>Class</p>
                    </div>

                    <div>
                        <div className='relative w-full aspect-square'>
                            <Image
                                src={image3}
                                fill
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                alt='playground'
                                className="rounded-xl object-cover p-6"
                            />
                        </div>
                        <p className='text-center mb-6'>Playground</p>
                    </div>

                    <div className='relative w-full aspect-square'>
                        <Image
                            src={image4}
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            alt='group'
                            className="rounded-xl object-cover p-6"
                        />
                    </div>

                </div>
            </div>
        </div>

    );
};

export default RightSideBar;