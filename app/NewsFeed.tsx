import Article from "./Article";

type Props = {
    news : NewsResponse
};

export default function NewsFeed({ news } : Props){
    return(
        <main className="w-full grid 2xl:grid-cols-3 xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-8 mt-0">
            {news.data.map((article, articleIDX) => (
                <Article key={articleIDX} article={article}/>
            ))}
        </main>
    );
}