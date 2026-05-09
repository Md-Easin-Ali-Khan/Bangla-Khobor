import React from 'react';
import Marquee from 'react-fast-marquee';

const BreakingNews = () => {
    return (
        <div className='flex items-center gap-5 bg-gray-200 py-4'>
            <button className='font-medius text-xl text-white bg-[#D72050] btn'>Latest</button>
            <Marquee>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit iusto, exercitationem doloribus esse perferendis suscipit autem similique? Repellat quis labore autem ipsum sed nobis, placeat commodi aperiam atque vero optio delectus non modi pariatur aspernatur cumque facilis earum praesentium, dolores saepe facere. Aperiam repellat qui et eligendi reprehenderit, quo maxime accusantium hic placeat, adipisci, asperiores ipsa porro at error officia rem fugit numquam unde assumenda quia? A, exercitationem ipsam quis cupiditate recusandae fugit. Quo voluptatum autem in at asperiores, ipsum nulla non exercitationem distinctio debitis, quas ratione sunt minima modi expedita. Quod maxime veniam deserunt repudiandae, eius hic laborum magni.</Marquee>
        </div>
    );
};

export default BreakingNews;