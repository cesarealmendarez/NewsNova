import { gql } from "graphql-request";
import sortNewsByImage from "./sortNewsByImage";

const fetchNews = async (
    categories : string,
    keywords? : string,
) => {
    const query = gql`
        query MyQuery(
            $access_key: String
            $countries: String
            $sort: String
            $categories: String
            $keywords: String
        ){
            myQuery(
                access_key: $access_key
                countries: $countries
                sort: $sort
                categories: $categories
                keywords: $keywords
            ){
                data{
                    title
                    description
                    image
                    author
                    published_at
                    source
                }                
            }
        }
    `;

    const queryResponse = await fetch("https://cobija.stepzen.net/api/rolling-mongoose/__graphql", {
        method: 'POST',
        cache: "no-cache",
        next: { revalidate: 0 },
        headers: {
            "Content-Type": "application/json",
            Authorization: `Apikey ${process.env.STEPZEN_API_KEY}`
        },
        body: JSON.stringify({
            query,
            variables: {
                access_key: `${process.env.MEDIASTACK_API_KEY}`,
                countries: "US",
                sort: "published_desc",
                categories: categories,
                keywords: keywords,
            }
        }),
    });

    const queryResponseJSON = await queryResponse.json();

    const sortedQueryResponse = sortNewsByImage(queryResponseJSON.data.myQuery);

    return sortedQueryResponse;

};

export default fetchNews;