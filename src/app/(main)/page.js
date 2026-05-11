
async function getCategories() {
  const res = await fetch("https://openapi.programming-hero.com/api/news/categories");
  const data = await res.json();
  return data.data
}

export default async function Home() {
  const categories = await getCategories();
  console.log(categories, "categories")

  return (
    <div className="grid grid-cols-12 gap-6">
      <div className="col-span-3">
        <h2 className="font-semibold text-2xl text-gray-700 mb-9">All Caterogy</h2>

        <ul className="flex flex-col gap-3">
          {
            categories.news_category.map((category) => {
              return <li key={category.category_id} className="font-medium text-xl text-gray-600 py-3 px-14 bg-gray-300">{category.category_name}</li>
            })
          }
        </ul>
      </div>

      <div className="bg-blue-500 col-span-6">
        <h2>Dragon News Home</h2>
      </div>

      <div className="bg-fuchsia-500 col-span-3">
        <h2>Find Us On</h2>
      </div>
    </div>
  );
}
