"use client";

import TimeAgo from "react-timeago";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

export default function ArticlePage(){
    const searchParams = useSearchParams();

    const image = searchParams.get("image");
    const title = searchParams.get("title");
    const description = searchParams.get("description");
    const url = searchParams.get("url");
    const country = searchParams.get("country");
    const category = searchParams.get("category");
    const author = searchParams.get("author");
    const source = searchParams.get("source");
    const published_at = searchParams.get("published_at");


    return(
        <div className="w-full flex flex-col items-start justify-start space-y-4">
            <div className="w-full flex flex-row items-center justify-start">
                <Link
                    href={"/"}
                    className="flex flex-col items-center justify-center text-center text-white p-2 rounded-xl bg-neutral-800"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                    </svg>
                </Link>
            </div>
            <div className="w-full grid grid-cols-1 2xl:grid-cols-3 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-3 gap-y-6 2xl:gap-8 xl:gap-8 lg:gap-8 md:gap-8 bg-neutral-800 p-6 rounded-xl">
                {(image != "" && image != null) &&
                    <div className="col-span-1 w-full flex flex-col items-center justify-start">
                        <img 
                            src={image}
                            className="w-full h-auto object-cover rounded-xl"
                        />
                    </div>
                }
                <div className={`${(image != "" && image != null) ? `col-span-2` : `col-span-3`} w-full flex flex-col items-start justify-start space-y-2`}>
                    <h1 className="text-left text-2xl 2xl:text-3xl xl:text-3xl lg:text-3xl md:text-3xl text-white font-black">{title}</h1>
                    <p className="text-left text-md 2xl:text-lg xl:text-lg lg:text-lg md:text-lg text-white font-normal">{description}</p>
                    <div className="w-full flex flex-wrap flex-row items-center justify-start pt-4">                
                        {url && 
                            <Link
                                href={url}
                                className="flex flex-row items-center justify-center text-center text-base text-white font-semibold bg-violet-900 px-4 py-2 rounded-2xl border-8 border-neutral-800"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
                                </svg>                        
                                Source URL
                            </Link>                      
                        }

                        {country && 
                            <div
                                className="flex flex-row items-center justify-center text-center text-base text-white font-semibold bg-violet-900 px-4 py-2 rounded-2xl border-8 border-neutral-800"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
                                </svg>
                                {country}
                            </div>  
                        }

                        {category && 
                            <div
                                className="flex flex-row items-center justify-center text-center text-base text-white font-semibold bg-violet-900 px-4 py-2 rounded-2xl border-8 border-neutral-800"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z" />
                                </svg>
                                {category}
                            </div>  
                        }

                        {author && 
                            <div
                                className="flex flex-row items-center justify-center text-center text-base text-white font-semibold bg-violet-900 px-4 py-2 rounded-2xl border-8 border-neutral-800"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                                </svg>
                                {author}
                            </div>  
                        }

                        {source &&
                            <div
                                className="flex flex-row items-center justify-center text-center text-base text-white font-semibold bg-violet-900 px-4 py-2 rounded-2xl border-8 border-neutral-800"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z" />
                                </svg>                    
                                {source}
                            </div> 
                        }       

                        {published_at && 
                            <div                                
                                className="flex flex-row items-center justify-center text-center text-base text-white font-semibold bg-violet-900 px-4 py-2 rounded-2xl border-8 border-neutral-800"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <TimeAgo date={published_at}/>
                            </div>                    
                        }                                
                    </div>
                </div>

            </div>
        </div>

        // <div className="w-full flex flex-col items-start justify-start bg-neutral-800 rounded-xl pl-8 pt-8 pb-8 pr-24 space-y-6 ring-4 ring-violet-500">
        //     {searchParams?.image != "" && searchParams?.image != null ?
        //         <img 
        //             src={searchParams?.image}
        //             className="w-1/3 h-auto object-cover rounded-xl"
        //         />
        //         :
        //         <></>
        //     }
        //     <div>
        //         <h1 className="text-left text-3xl text-white font-black tracking-tighter">{searchParams?.title}</h1>
        //         <p className="text-left text-xl text-white font-normal tracking-tighter">{searchParams?.description}</p>
        //     </div>
        // </div>
    )
}
