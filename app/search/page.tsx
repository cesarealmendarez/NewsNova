import fetchNews from "../../utilities/fetchNews";
import NewsFeed from "../NewsFeed";

type Props = {
    searchParams? : { term : string };
};

async function SearchPage({ searchParams } : Props){

    const news : NewsResponse = await fetchNews("", searchParams?.term);

    return(
        <div className="w-full flex flex-col space-y-6">
            <div className="w-full flex flex-row items-center justify-center bg-neutral-800 px-6 py-4 rounded-xl shadow space-x-4">
                <h1 className="capitalize text-left text-3xl 2xl:text-4xl xl:text-4xl lg:text-4xl md:text-4xl text-white font-black"><span className="mr-2">🔎</span>{searchParams?.term}</h1>
            </div>        

            <NewsFeed news={news}/>
        </div>
    );
}

export default SearchPage;