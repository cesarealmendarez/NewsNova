/*
    © Cesar Almendarez 2022
    -Article.tsx-
        ***
    -TODO-
        ***
*/

"use client";

import Link from "next/link"
import TimeAgo from "react-timeago";

type Props = {
    article : Article
};

export default function Article({ article } : Props){
    return(
        <Link
            href={{ 
                pathname: "/article", 
                query: { 
                    author: article.author,
                    category: article.category,
                    country: article.country,
                    description: article.description,
                    image: article.image,
                    language: article.language,
                    published_at: article.published_at,
                    source: article.source,
                    title: article.title,
                    url: article.url
                } 
            }}              
            className="
                col-span-1 flex flex-col items-start justify-start bg-neutral-800 rounded-xl overflow-hidden outline-0
                2xl:hover:bg-violet-900 xl:hover:bg-violet-900 lg:hover:bg-violet-900
                2xl:hover:scale-105 xl:hover:scale-105 lg:hover:scale-105
                transition-all duration-700
            "
        >
            {article.image != "" && article.image != null ?
                <img 
                    src={article.image}
                    className="w-full h-40 object-cover rounded-t-xl"
                />
                :
                <div 
                    className="w-full h-40 flex flex-row items-center justify-start text-left text-violet-500 bg-violet-100 pl-8 rounded-t-xl"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-24 h-24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                    </svg>
                </div>
            }      

            <div className="w-full flex flex-grow flex-col items-start justify-start p-6 space-y-2">
                {article.published_at &&
                    <div className="flex flex-row items-center justify-center text-center text-base text-white font-semibold bg-violet-500 px-4 py-2 rounded-xl">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <TimeAgo date={article.published_at}/>
                    </div>                  
                }
                <h1 className="text-left text-2xl text-white font-black line-clamp-3">{article.title}</h1>
            </div>  

            <div className="w-full flex flex-row items-center justify-center text-center text-base text-white font-semibold bg-violet-500 p-2 rounded-b-xl">
                Read Full Article
            </div>   
        </Link>
    );
}