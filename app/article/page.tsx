
type Props = {
    searchParams?: Article;
};

export default function ArticlePage({ searchParams } : Props){
    console.log(searchParams);
    return(
        <div className="w-full flex flex-col items-start justify-start bg-neutral-800 rounded-xl pl-8 pt-8 pb-8 pr-24 space-y-6 ring-4 ring-violet-500">
            {searchParams?.image != "" && searchParams?.image != null ?
                <img 
                    src={searchParams?.image}
                    className="w-1/3 h-auto object-cover rounded-xl"
                />
                :
                <></>
            }
            <div>
                <h1 className="text-left text-3xl text-white font-black tracking-tighter">{searchParams?.title}</h1>
                <p className="text-left text-xl text-white font-normal tracking-tighter">{searchParams?.description}</p>
            </div>
        </div>
    )
}
