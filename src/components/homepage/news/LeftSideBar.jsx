import Link from 'next/link';
import React from 'react';

const LeftSideBar = ({ categories, activeId }) => {
    return (
        <div>
            <h2 className="font-semibold text-xl text-gray-700 mb-5">All Caterogy</h2>

            <ul className="flex flex-col gap-3">
                {
                    categories.news_category.map((category) => {
                        return <li key={category.category_id}
                            className={`${activeId === category.category_id && "bg-gray-300"} font-medium text-gray-600 text-lg rounded-lg`}>
                            <Link href={`/category/${category.category_id}`} className='block py-3 px-14'>{category.category_name}</Link>
                        </li>
                    })
                }
            </ul>
        </div>
    );
};

export default LeftSideBar;