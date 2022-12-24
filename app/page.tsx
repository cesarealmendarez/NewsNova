/*
    © Cesar Almendarez 2022
    -HomePage.tsx-
        ***
    -TODO-
        ***
*/

import fetchNews from "../utilities/fetchNews";
import NewsFeed from "./NewsFeed";

async function HomePage(){

    const news : NewsResponse = await fetchNews("", "");

    return(
        <div className="w-full flex flex-col space-y-6">
            <div className="w-full flex flex-row items-center justify-center bg-neutral-800 px-6 py-4 rounded-xl shadow space-x-4">
                <h1 className="text-left text-3xl 2xl:text-4xl xl:text-4xl lg:text-4xl md:text-4xl text-white font-black tracking-tighter"><span className="mr-2">🏠</span>Home Page</h1>
            </div>        

            <NewsFeed news={news}/>
        </div>   
    );
}

export default HomePage;