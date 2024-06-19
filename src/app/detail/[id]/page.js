import DBdata from "/public/data/db.json";

// generateStaticParams 함수 추가
export async function generateStaticParams() {
  const paths = DBdata.list_group1.map((item) => ({
    params: { id: item.id.toString() }
  }));
  return paths;
}

// getStaticProps 함수 추가
export async function getStaticProps({ params }) {
  const id = params.id;
  const resp = DBdata.list_group1.find(item => item.id === parseInt(id));

  return {
    props: {
      item: resp
    }
  };
}

// DetailPage 컴포넌트 수정
export default function DetailPage({ item }) {
  return (
    <main>
      <div className="w-[30rem] mx-auto pt-28 lg:w-[51rem]">
        <div className="">
          <p className="text-xl text-center tracking-tighter">{item.cate}</p>
          <p className="mt-4 text-center text-5xl font-bold tracking-tighter leading-tight" dangerouslySetInnerHTML={{ __html: item.title }}></p>
        </div>
        <div className="flex justify-center mt-20 text-center">
          <img src={item.img} className="w-full" alt="" />
        </div>
        <div className="mt-5 mb-10">
          <div dangerouslySetInnerHTML={{ __html: item.body }}></div>
        </div>
      </div>
    </main>
  );
}