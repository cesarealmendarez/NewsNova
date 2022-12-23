"use client";

import Link from "next/link";
import TimeAgo from "react-timeago"

type Props = {
    article : Article
};

export default function Article({ article } : Props){
    return(
        <Link
            href={{ 
                pathname: '/article', 
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
                col-span-1 flex flex-col items-start justify-start bg-neutral-800 rounded-xl cursor-pointer outline-0
                2xl:hover:scale-105 2xl:hover:bg-violet-900 
                xl:hover:scale-105 xl:hover:bg-violet-900
                lg:hover:scale-105 lg:hover:bg-violet-900
                transition-all duration-500
            "
        >
            {article.image != "" && article.image != null ?
                <img 
                    src={article.image}
                    className="w-full h-40 object-cover rounded-t-xl"
                />
                :
                <div 
                    className="w-full h-40 flex flex-row items-center justify-start text-left text-violet-500 bg-violet-100 pl-4 rounded-t-xl"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-24 h-24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                    </svg>
                </div>
            }

            <div className="w-full flex flex-grow flex-wrap flex-col items-start justify-start p-6 overflow-clip">
                <div className="w-full flex flex-wrap flex-row items-center justify-start mb-2">
                    <p className="text-ellipsis truncate flex flex-row items-center justify-start text-left text-sm text-white font-semibold bg-violet-500 px-4 py-1 rounded-full border-8 border-neutral-800">
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 mr-2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z" />
                            </svg>                            
                        </span>
                        {article.source}
                    </p>
                    <p className="text-ellipsis truncate flex flex-row items-center justify-start text-left text-sm text-violet-500 font-semibold bg-violet-200 px-4 py-1 rounded-full border-8 border-neutral-800">
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 mr-2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z" />
                            </svg>                            
                        </span>
                        <TimeAgo date={article.published_at}/>
                    </p>                    
                </div>
                {/* <div className="w-full flex flex-row items-center mb-2">
                    <p className="w-24 text-ellipsis truncate bg-rose-500">{article.source}</p>
                    <p className="w-24 text-ellipsis truncate bg-rose-500">{article.source}</p>
                </div> */}

                {/* <div className="w-full grid grid-flow-row-dense grid-cols-2 gap-4 mb-2">
                    <div className="flex flex-row items-center justify-center text-center text-sm text-violet-500 font-semibold bg-violet-100 px-4 py-1 rounded-xl">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 mr-2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z" />
                        </svg>
                        {article.source}
                    </div>                    
                    <div className="flex flex-row items-center justify-center text-center text-sm text-violet-500 font-semibold bg-violet-100 px-4 py-1 rounded-xl">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 mr-2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        30 min ago
                    </div>
                </div> */}
                <h1 className="text-left text-2xl text-white font-black line-clamp-3">{article.title}</h1>
                <p className="text-left text-lg text-white font-normal line-clamp-4">{article.description}</p>
            </div>
            <div className="w-full flex flex-row items-center justify-center text-center text-base text-white font-semibold bg-violet-500 p-2 rounded-b-xl">
                Read Full Article
            </div>            
        </Link>
    );
}