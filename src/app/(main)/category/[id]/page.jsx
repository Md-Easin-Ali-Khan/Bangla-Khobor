import LeftSideBar from '@/components/homepage/news/LeftSideBar';
import RightSideBar from '@/components/homepage/news/RightSideBar';
import { getCategories, getNewsByCategoryId } from '@/lib/data';
import React from 'react';

const NewsCategoryPage = async ({ params }) => {
    const { id } = await params

    const categories = await getCategories();

    const news = await getNewsByCategoryId(id)

    return (
        <div className="grid grid-cols-12 gap-7">
            <div className="col-span-3">
                <LeftSideBar categories={categories} activeId={id} />
            </div>

            <div className="col-span-6">
                <h2 className='font-medium text-xl text-gray-600 mt-6 text-center'>All News Here</h2>
                {
                    news.length > 0 ? news.map(n => (
                        <p key={n._id} className='p-4 border border-gray-500 my-4'>{n.title}</p>
                    )): <p className='font-medium text-3xl text-gray-600 mt-6 text-center'>No News Found</p>
                }
            </div>

            <div className="col-span-3">
                <RightSideBar />
            </div>
        </div>
    );
};

export default NewsCategoryPage;