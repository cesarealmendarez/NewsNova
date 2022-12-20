"use client";

export default function Header(){
    return(
        <>
            {/* Not-Mobile Hidden */}
            <div className="hidden 2xl:flex xl:flex lg:flex md:hidden w-full flex-row items-center justify-start px-6 py-4 bg-violet-500 rounded-xl">
                <div className="w-1/3 flex flex-row items-center justify-start">
                    <h1 className="text-left text-4xl text-white font-black"><span className="mr-2">🗞️</span>NewsNova</h1>
                </div>
                <div className="w-2/3 flex flex-row items-center justify-end space-x-4">
                    <button
                        // onClick={() => {}}
                        className="flex flex-row items-center justify-center text-center text-base text-white font-semibold bg-violet-900 px-4 py-2 rounded-xl"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                        </svg>
                        Search
                    </button>
                    <button
                        // onClick={() => {}}
                        className="flex flex-row items-center justify-center text-center text-base text-white font-semibold bg-violet-900 px-4 py-2 rounded-xl"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM3.75 12h.007v.008H3.75V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm-.375 5.25h.007v.008H3.75v-.008zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                        </svg>
                        View Category
                    </button>  
                    <button
                        // onClick={() => {}}
                        className="flex flex-row items-center justify-center text-center text-base text-white font-semibold bg-violet-900 px-4 py-2 rounded-xl"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
                        </svg>
                        About
                    </button>                                 
                </div>
            </div>

            {/* Mobile Header */}
            <div className="flex 2xl:hidden xl:hidden lg:hidden w-full flex-row items-center justify-start p-4 bg-violet-500 rounded-xl">
                <div className="w-2/3 flex flex-row items-center justify-start">
                    <h1 className="text-left text-3xl text-white font-black"><span className="mr-2">🗞️</span>NewsNova</h1>
                </div>
                <div className="w-1/3 flex flex-row items-center justify-end space-x-4">
                    <button
                        // onClick={() => {}}
                        className="flex flex-row items-center justify-center text-center text-base text-white font-semibold bg-violet-900 p-2 rounded-xl"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
                        </svg>                    
                    </button>  
                </div>
            </div>
        </>
    );
}