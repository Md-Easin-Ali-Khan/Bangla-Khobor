import RightSideBar from "@/components/homepage/news/RightSideBar";
import { getDetalsById } from "@/lib/data";
import Image from "next/image";
import { FaArrowLeft, FaRegBookmark, FaStar } from "react-icons/fa";
import { FiShare2 } from "react-icons/fi";
import { IoEye } from "react-icons/io5";

const NewsDetailsPage = async ({ params }) => {
    const { id } = await params
    const news = await getDetalsById(id)

    return (
        <div className="grid grid-cols-3 gap-5 mx-10">
            <div className="card bg-base-100 w-full shadow-sm col-span-2">
                <h2 className='font-semibold text-xl text-gray-700 mb-5'>All News Here</h2>
                <div className="card-body shadow-2xl mb-5">

                    <div>
                        <div className='flex justify-between items-center'>
                            <div className='flex gap-4 items-center'>
                                <Image
                                    src={news.author?.img}
                                    alt={news.author?.name || "News thumbnail"}
                                    width={40}
                                    height={40}
                                    className='rounded-full'
                                />
                                <div>
                                    <h3 className='font-semibold text-[16px] text-gray-500'>{news.author?.name}</h3>
                                    <p className='text-sm'>{news.author?.published_date}</p>
                                </div>
                            </div>
                            <div className='flex gap-2.5'>
                                <FaRegBookmark className='w-5 h-5' />
                                <FiShare2 className='w-5 h-5' />
                            </div>
                        </div>

                        <div>
                            <h2 className='font-bold text-xl text-gray-700 mt-7 mb-5'>{news.title}</h2>

                            <figure className="relative w-full aspect-video">
                                <Image
                                    src={news.thumbnail_url}
                                    fill
                                    alt={news.author.name || "News thumbnail"}
                                    className="object-cover object-top rounded-2xl"
                                />
                            </figure>
                            <p className='font-normal text-lg text-gray-500 mt-5'>{news.details}</p>

                            <button className="btn gap-3 font-medium text-xl text-gray-300 bg-[#D72050] my-5"><FaArrowLeft /> All news in this category</button>

                            <div className='flex justify-between '>
                                <div className='flex justify-between items-center gap-2.5'>
                                    <div className='flex gap-1.5'>
                                        {(() => {
                                            const stars = [];
                                            for (let i = 0; i < 4; i++) {
                                                stars.push(<FaStar key={i} className='text-[#FF8C47] w-5 h-5' />)
                                            }
                                            return stars
                                        })()}
                                    </div>
                                    <p className='font-normal text-lg text-gray-500'>{news.rating.number}</p>
                                </div>

                                <div className='flex gap-2.5'>
                                    <IoEye className='w-6 h-6 text-gray-500' />
                                    <p className='font-normal text-lg text-gray-500'>{news.total_view}</p>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>
            </div>

            {/* RightSideBar section */}
            <div>
                <RightSideBar />
            </div>
        </div>
    );
};

export default NewsDetailsPage;