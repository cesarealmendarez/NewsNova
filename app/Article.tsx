"use client";

import Link from "next/link";

type Props = {
    article : Article
};

export default function Article({ article } : Props){
    return(
        <Link
            href={""}
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
                <h1 className="text-left text-2xl text-white font-black line-clamp-3">{article.title}</h1>
                <p className="text-left text-lg text-white font-normal line-clamp-4">{article.description}</p>
            </div>
            <div className="w-full flex flex-row items-center justify-center text-center text-base text-white font-semibold bg-violet-500 p-2 rounded-b-xl">
                Read Full Article
            </div>            
        </Link>
    );
}