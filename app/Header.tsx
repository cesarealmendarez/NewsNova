/*
    © Cesar Almendarez 2022
    -Header.tsx-
        ***
    -TODO-
        ***
*/

"use client";

import { useState, Fragment, FormEvent } from "react";
import { Transition, Dialog } from "@headlessui/react";
import { useRouter, usePathname } from "next/navigation";
import { categories } from "../utilities/constants";
import Link from "next/link";
import { AiFillGithub } from "react-icons/ai";

export default function Header(){
    const router = useRouter();
    const pathname = usePathname();

    const [searchModalOpen, setSearchModalOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");

    const [selectCategoryModalOpen, setSelectCategoryModalOpen] = useState(false);

    const [aboutModalOpen, setAboutModalOpen] = useState(false);

    const [mobileMenuModalOpen, setMobileMenuModalOpen] = useState(false);

    const handleSearch = ( e: FormEvent<HTMLFormElement> ) => {
        e.preventDefault();

        if(!searchTerm){ return };

        setSearchTerm("");
        setSearchModalOpen(false);

        router.push(`/search?term=${searchTerm}`);
    };

    const categoryEmoji = ( category : string ) => {
        switch(category){
            case "general" : return(<>🌐</>);
            case "business" : return(<>💸</>);                                
            case "entertainment" : return(<>🍿</>);                                
            case "health" : return(<>🧬</>);    
            case "science" : return(<>🔬</>);                                                                                                                                
            case "sports" : return(<>🏟️</>);       
            case "technology" : return(<>📱</>);    
            default : return(<>🌐</>);           
        }
    };    

    return(
        <>
            {/* Not-Mobile Header */}
            <div className="hidden 2xl:flex xl:flex lg:flex md:hidden w-full flex-row items-center justify-start px-6 py-4 bg-violet-500 rounded-xl">
                <div className="w-1/3 flex flex-row items-center justify-start">
                    <Link
                        href={"/"}
                        className="outline-0"
                    >
                        <h1 className="text-left text-4xl text-white font-black tracking-tighter"><span className="mr-2">📰</span>NewsNova</h1>
                    </Link>
                </div>
                <div className="w-2/3 flex flex-row items-center justify-end space-x-4">
                    <button
                        onClick={() => {
                            setSearchModalOpen(true);
                        }}
                        className="flex flex-row items-center justify-center text-center text-base text-white font-semibold bg-violet-900 px-4 py-2 rounded-xl outline-0"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                        </svg>
                        Search
                    </button>
                    <button
                        onClick={() => {
                            setSelectCategoryModalOpen(true);                            
                        }}
                        className="flex flex-row items-center justify-center text-center text-base text-white font-semibold bg-violet-900 px-4 py-2 rounded-xl outline-0"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM3.75 12h.007v.008H3.75V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm-.375 5.25h.007v.008H3.75v-.008zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                        </svg>
                        View Category
                    </button>  
                    <button
                        onClick={() => {
                            setAboutModalOpen(true);
                        }}
                        className="flex flex-row items-center justify-center text-center text-base text-white font-semibold bg-violet-900 px-4 py-2 rounded-xl outline-0"
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
                    <Link
                        href={"/"}
                        className="outline-0"
                    >                    
                        <h1 className="text-left text-3xl text-white font-black"><span className="mr-2">📰</span>NewsNova</h1>
                    </Link>
                </div>
                <div className="w-1/3 flex flex-row items-center justify-end space-x-4">
                    <button
                        onClick={() => {
                            setMobileMenuModalOpen(true);
                        }}
                        className="flex flex-row items-center justify-center text-center text-base text-white font-semibold bg-violet-900 p-2 rounded-xl outline-0"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
                        </svg>                    
                    </button>  
                </div>
            </div>

            {/* Search Modal */}
            <Transition 
                appear 
                show={searchModalOpen} 
                as={Fragment}
            >
                <Dialog 
                    as="div" 
                    className="relative z-10" 
                    onClose={() => {
                        setSearchModalOpen(false);
                        setSearchTerm("");
                    }}
                >
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-violet-500 bg-opacity-50"/>
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-start justify-center pt-12 px-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-full max-w-xl flex flex-col items-start justify-start bg-neutral-900 p-6 space-y-6 rounded-xl transition-all transform">
                                    <div className="w-full flex flex-row items-start justify-start">
                                        <div className="w-2/3 flex flex-row items-start justify-start">
                                            <h1 className="text-left text-2xl 2xl:text-3xl xl:text-3xl lg:text-3xl md:text-3xl text-white font-black tracking-tighter outline-0">Search NewsNova</h1>
                                        </div>
                                        <div className="w-1/3 flex flex-row items-start justify-end">
                                            <button 
                                                className="flex flex-col items-center justify-center text-center text-base text-white bg-violet-500 p-2 rounded-xl outline-0"
                                                onClick={() => {
                                                    setSearchModalOpen(false);
                                                    setSearchTerm("");
                                                }}
                                            >
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                

                                    <form 
                                        onSubmit={handleSearch}
                                        className="w-full flex flex-col items-center justify-center space-y-4"
                                    >
                                        <input
                                            placeholder="What are you looking for?"
                                            value={searchTerm}
                                            onChange={(value) => {setSearchTerm(value.target.value);}}
                                            className="
                                                w-full flex flex-row items-center justify-start text-left text-base text-white font-normal bg-neutral-800 outline-0 p-4 rounded-xl
                                                placeholder:text-white
                                            "
                                        />

                                        <button 
                                            disabled={!searchTerm.trim()} 
                                            className="
                                                w-full flex flex-row item-center justify-center text-center text-base text-white font-semibold bg-violet-500 p-4 rounded-xl outline-0
                                                disabled:opacity-50
                                                transition-all duration-300
                                            "
                                        >
                                            Search
                                        </button>
                                    </form>                                
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>    
            
            {/* Select Category Modal */}
            <Transition appear show={selectCategoryModalOpen} as={Fragment}>
                <Dialog 
                    as="div" 
                    className="relative z-10" 
                    onClose={() => {
                        setSelectCategoryModalOpen(false);
                    }}
                >
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-violet-500 bg-opacity-50"/>
                    </Transition.Child>
            
                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-start justify-center px-4 pt-12 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-full max-w-xl flex flex-col items-start justify-start bg-neutral-900 p-6 space-y-6 rounded-xl transition-all transform shadow">
                                    <div className="w-full flex flex-row items-center justify-start">
                                        <div className="w-2/3 flex flex-row items-center justify-start">
                                            <h1 className="text-left text-2xl 2xl:text-3xl xl:text-3xl lg:text-3xl md:text-3xl text-white font-black tracking-tighter outline-0">Select to View Specific Category</h1>
                                        </div>
                                        <div className="w-1/3 flex flex-row items-center justify-end">
                                            <button 
                                                className="flex flex-col items-center justify-center text-center text-base text-white bg-violet-500 p-2 rounded-xl outline-0"
                                                onClick={() => {
                                                    setSelectCategoryModalOpen(false);
                                                }}
                                            >
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                                </svg>
                                            </button>
                                        </div>
                                    </div>

                                    <div className="w-full grid grid-cols-2 2xl:grid-cols-3 xl:grid-cols-3 lg:grid-cols-3 gap-4">
                                        {categories.map((category, categoryIDX) => (
                                            <>
                                                {pathname?.split("/").pop() === category ?
                                                    <Link
                                                        key={categoryIDX}
                                                        href={`/category/${category}`} 
                                                        onClick={() => {setSelectCategoryModalOpen(false);}}
                                                        className="
                                                            col-span-1 flex flex-col item-center justify-center text-center capitalize text-base text-white font-semibold bg-violet-900 p-4 rounded-xl outline-0
                                                            2xl:hover:scale-105 2xl:hover:bg-violet-900 
                                                            xl:hover:scale-105 xl:hover:bg-violet-900
                                                            lg:hover:scale-105 lg:hover:bg-violet-900
                                                            transition-all duration-300 ease-in                                                                
                                                        "                                           
                                                    >
                                                        <span className="text-3xl mr-2">{categoryEmoji(category)}</span>
                                                        {category}
                                                    </Link>                                                      
                                                    :                                                                                                                                                       
                                                    <Link
                                                        key={categoryIDX}
                                                        href={`/category/${category}`} 
                                                        onClick={() => {setSelectCategoryModalOpen(false);}}
                                                        className="
                                                            col-span-1 flex flex-col item-center justify-center text-center capitalize text-white font-semibold bg-neutral-800 p-4 rounded-xl outline-0
                                                            2xl:hover:scale-105 2xl:hover:bg-violet-900 
                                                            xl:hover:scale-105 xl:hover:bg-violet-900
                                                            lg:hover:scale-105 lg:hover:bg-violet-900
                                                            transition-all duration-300 ease-in                                                              
                                                        "                                           
                                                    >
                                                        <span className="text-3xl mr-2">{categoryEmoji(category)}</span>
                                                        {category}
                                                    </Link>                                                     
                                                }
                                            </>                                             
                                        ))}     
                                                                                                                                                                    
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>            

            {/* About Modal */}
            <Transition appear show={aboutModalOpen} as={Fragment}>
                <Dialog 
                    as="div" 
                    className="relative z-10" 
                    onClose={() => {
                        setAboutModalOpen(false);
                    }}
                >
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-violet-500 bg-opacity-50"/>
                    </Transition.Child>
            
                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-start justify-center px-4 pt-12 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="relative w-full max-w-xl flex flex-col items-center justify-center bg-neutral-900 p-6 rounded-xl transition-all transform shadow">
                                    <button 
                                        className="absolute top-6 right-6 flex flex-col items-center justify-center text-center text-base text-white bg-violet-500 p-2 rounded-xl outline-0"
                                        onClick={() => {
                                            setAboutModalOpen(false);
                                        }}
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    </button>                                    

                                    <h1 className="text-center text-3xl 2xl:text-4xl xl:text-4xl lg:text-4xl md:text-4xl text-white font-black">📰</h1>
                                    <h1 className="text-center text-3xl 2xl:text-4xl xl:text-4xl lg:text-4xl md:text-4xl text-white font-black mb-4 tracking-tighter">NewsNova</h1>
                                    <p className="text-center text-base text-white font-normal">Live news app built ontop of Next.js 13. Front-end styled with TailwindCSS and HeadlessUI. Querying Mediastack REST API with GraphQL. Statically typed with TypeScript.</p>

                                    <div className="w-full grid grid-cols-1 2xl:grid-cols-2 xl:grid-cols-2 lg:grid-cols-2 gap-4 mt-4">
                                        <Link
                                            target={"_blank"}
                                            href={"https://github.com/cesarealmendarez/NewsNova"}
                                            className="
                                                col-span-1 flex flex-col items-center justify-end text-center text-xl text-white font-black bg-neutral-800 p-4 rounded-xl outline-0
                                                2xl:hover:scale-105 2xl:hover:bg-violet-900 
                                                xl:hover:scale-105 xl:hover:bg-violet-900
                                                lg:hover:scale-105 lg:hover:bg-violet-900
                                                transition-all duration-300 ease-in                                                 
                                            "   
                                        >
                                            <AiFillGithub size={45} className="mb-2"/>
                                            NewsNova on GitHub
                                        </Link>
                                        <Link
                                            target={"_blank"}
                                            href={"https://github.com/cesarealmendarez"}
                                            className="
                                                col-span-1 flex flex-col items-center justify-end text-center text-xl text-white font-black bg-neutral-800 p-4 rounded-xl outline-0
                                                2xl:hover:scale-105 2xl:hover:bg-violet-900 
                                                xl:hover:scale-105 xl:hover:bg-violet-900
                                                lg:hover:scale-105 lg:hover:bg-violet-900
                                                transition-all duration-300 ease-in                                                  
                                            "
                                        >
                                            <img 
                                                className="h-12 w-12 object-cover rounded-full border-2 border-neutral-800 mb-2" 
                                                src={"https://avatars.githubusercontent.com/u/89669770?v=4"}
                                            />
                                            Cesar Almendarez
                                        </Link>                                    
                                    </div>
                                </Dialog.Panel>                            
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>  

            {/* Mobile Menu Modal */}
            <Transition appear show={mobileMenuModalOpen} as={Fragment}>
                <Dialog 
                    as="div" 
                    className="relative z-10" 
                    onClose={() => {
                        setMobileMenuModalOpen(false);
                    }}
                >
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-violet-500 bg-opacity-50"/>
                    </Transition.Child>
            
                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-start justify-center px-4 pt-12 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-full max-w-xl flex flex-col items-start justify-start bg-neutral-900 p-6 space-y-6 rounded-xl transition-all transform shadow">
                                    <div className="w-full flex flex-row items-center">
                                        <div className="w-1/3 flex flex-row items-center justify-start">
                                            <h1 className="text-left text-2xl 2xl:text-3xl xl:text-3xl lg:text-3xl md:text-3xl text-white font-black tracking-tighter outline-0">
                                                NewsNova
                                            </h1>                                                
                                        </div>
                                        <div className="w-2/3 flex flex-row items-center justify-end space-x-4">
                                            <button 
                                                className="flex flex-row item-center justify-center text-center text=base text-white font-semibold bg-violet-500 p-2 rounded-xl outline-0"
                                                onClick={() => {setMobileMenuModalOpen(false);}}
                                            >
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                                </svg>
                                            </button>  
                                        </div>
                                    </div>                                     
                                    <div className="w-full flex flex-col items-center justify-center space-y-4">                                   
                                        <button
                                            onClick={() => {
                                                setMobileMenuModalOpen(false);
                                                setTimeout(() => {
                                                    setSearchModalOpen(true);
                                                }, 500);                                                 
                                            }}
                                            className="w-full flex flex-row item-center justify-center text-center capitalize text-base text-white font-semibold bg-neutral-800 p-4 rounded-xl outline-0"                                                                                   
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-2">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                                            </svg>                                            
                                            Search
                                        </button>   
                                        <button
                                            onClick={() => {
                                                setMobileMenuModalOpen(false);
                                                setTimeout(() => {
                                                    setSelectCategoryModalOpen(true);
                                                }, 500);                                                
                                            }}
                                            className="w-full flex flex-row item-center justify-center text-center capitalize text-base text-white font-semibold bg-neutral-800 p-4 rounded-xl outline-0"                                                                                
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-2">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM3.75 12h.007v.008H3.75V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm-.375 5.25h.007v.008H3.75v-.008zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                                            </svg>                                              
                                            View Category
                                        </button>   
                                        <button
                                            onClick={() => {
                                                setMobileMenuModalOpen(false);
                                                setTimeout(() => {
                                                    setAboutModalOpen(true);
                                                }, 500);
                                            }}
                                            className="w-full flex flex-row item-center justify-center text-center capitalize text-base text-white font-semibold bg-neutral-800 p-4 rounded-xl outline-0"                                          
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-2">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
                                            </svg>                                                                              
                                            About
                                        </button>                                                                                   
                                    </div>                                 
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>                
        </>
    );
}