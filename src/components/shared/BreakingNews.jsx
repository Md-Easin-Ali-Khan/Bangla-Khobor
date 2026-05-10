import React from 'react';
import Marquee from 'react-fast-marquee';

const newsData = [
    {
        _id: "1",
        title: "Breaking News: Government Announces New Digital Media Policy",
    },
    {
        _id: "2",
        title: "Breaking News: Global Fuel Prices Drop Amid Market Changes",
    },
    {
        _id: "3",
        title: "Breaking News: Tech Industry Opens New Opportunities for Young Developers",
    }
];

const BreakingNews = () => {
    return (
        <div className='flex items-center gap-5 bg-gray-200 py-4'>
            <button className='font-medius text-xl text-white bg-[#D72050] btn'>Latest</button>
            <Marquee pauseOnHover={true} speed={60}>
                {newsData.map((breaking) => (
                    <span
                        key={breaking._id}
                        className="mr-16 text-gray-800 font-medium cursor-pointer"
                    >
                        {breaking.title}
                    </span>
                ))}
            </Marquee>
        </div>
    );
};

export default BreakingNews;