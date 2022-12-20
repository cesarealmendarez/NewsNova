import fetchNews from "../utilities/fetchNews";

async function HomePage(){

    const news : NewsResponse = await fetchNews("", "");

    return(
        <div>
            
        </div>
    );
}

export default HomePage;