import React from 'react';

const LeftSideBar = ({categories}) => {
    return (
        <div>
            <h2 className="font-semibold text-xl text-gray-700 mb-5">All Caterogy</h2>

            <ul className="flex flex-col gap-3">
                {
                    categories.news_category.map((category) => {
                        return <li key={category.category_id} className="font-medium text-lg text-gray-600 py-3 px-14 bg-gray-300 rounded-lg">{category.category_name}</li>
                    })
                }
            </ul>
        </div>
    );
};

export default LeftSideBar;