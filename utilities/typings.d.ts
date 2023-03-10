/*
    © Cesar Almendarez 2022
    -typings.d.ts-
        ***
    -TODO-
        ***
*/

type Article = {
    author: string | null
    category: string;
    country: string;
    description: string;
    image: string | null;
    language: string;
    published_at: string;
    source: string;
    title: string;
    url: string;
};

type NewsResponse = {
    data: Article[]
};

type Category = 
    | "business"
    | "entertainment"
    | "general"
    | "health"
    | "science"
    | "sports"
    | "technology";    

