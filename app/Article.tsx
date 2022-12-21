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
                col-span-1 max-w-full flex flex-col items-start justify-start bg-neutral-800 rounded-xl cursor-pointer outline-0
                hover:scale-105 hover:bg-violet-900
                transition-all duration-300 ease-in     
            "
        >
            {article.image != "" && article.image != null ?
                <img
                    src={article.image}
                    className="w-full h-40 object-cover rounded-t-xl"
                />
                :
                <></>
            }

            <div className="flex flex-grow flex-col items-start justify-start p-6">
                {/* <div className="flex flex-col items-start justify-start space-y-2">
                    <h1 className="text-left text-2xl text-white font-black line-clamp-3">{article.title}</h1>
                    <p className="text-left text-lg text-white font-normal line-clamp-3">{article.description}</p>
                </div> */}
            </div>

            <div className="w-full flex flex-row items-center justify-center text-center text-base text-white font-semibold bg-violet-500 p-2 rounded-b-xl">
                Read Full Article
            </div>
        </Link>
    );
}