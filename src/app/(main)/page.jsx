import LeftSideBar from "@/components/homepage/news/LeftSideBar";

async function getCategories() {
  const res = await fetch("https://openapi.programming-hero.com/api/news/categories");
  const data = await res.json();
  return data.data
}

export default async function Home() {
  const categories = await getCategories();

  return (
    <div className="grid grid-cols-12 gap-7">
      <div className="col-span-3">
        <LeftSideBar categories={categories} activeId={"06"}/>
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
