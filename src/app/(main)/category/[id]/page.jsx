import NewsCard from '@/components/homepage/news/homepage/news/NewsCard';
import LeftSideBar from '@/components/homepage/news/LeftSideBar';
import RightSideBar from '@/components/homepage/news/RightSideBar';
import { getCategories, getNewsByCategoryId } from '@/lib/data';

const NewsCategoryPage = async ({ params }) => {
    const { id } = await params
    const categories = await getCategories();
    const news = await getNewsByCategoryId(id)

    return (
        <div className="grid grid-cols-12 gap-5 mx-5">
            {/* LeftSideBar Section */}
            <div className="col-span-3">
                <LeftSideBar categories={categories} activeId={id} />
            </div>

            {/* NewsCard Section */}
            <div className="col-span-6">
                <h2 className='font-semibold text-xl text-gray-700 mb-5'>All News Here</h2>
                {
                    news.length > 0 ? news.map(n => {
                        return <NewsCard key={n._id} news={n}></NewsCard>
                    }) : <p className='font-medium text-3xl text-gray-600 mt-6 text-center'>No News Found</p>
                }
            </div>

            {/* RightSideBar */}
            <div className="col-span-3">
                <RightSideBar />
            </div>
        </div>
    );
};

export default NewsCategoryPage;