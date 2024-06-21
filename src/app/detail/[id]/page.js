
import DBdata from "/public/data/db.json";

export async function generateStaticParams() {
  // DBdata에서 모든 항목의 ID를 사용하여 경로 생성
  const paths = DBdata.list_group1.map(item => ({
    id: item.id.toString()
  }));

  return paths;
}

export default async function DetailPage({ params }) {
  const id = params.id;
  const item = DBdata.list_group1.find(item => item.id === parseInt(id));

  return (
    <main>
      <div className="w-[30rem] mx-auto pt-28 lg:w-[51rem]">
        <div className="">
          <p className="text-xl text-center tracking-tighter">{item.cate}</p>
          <p className="mt-4 text-center text-5xl font-bold tracking-tighter leading-tight" dangerouslySetInnerHTML={{ __html: item.title }}></p>
        </div>
        <div className="flex justify-center mt-20 text-center">
          <img src={item.img} className="w-full" width={800} height={auto} alt="" />
        </div>
        <div className="mt-5 mb-10">
          <div dangerouslySetInnerHTML={{ __html: item.body }}></div>
        </div>
      </div>
    </main>
  )
}