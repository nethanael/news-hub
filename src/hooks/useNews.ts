import { NewsQuery } from "../entities/NewsQuery";
import useData from "./useData";

export interface NewsArticle {
  article_id: string;
  title: string;
  image_url: string;
  category: string[];
  source_name: string;
  link: string;
}

const useNews = (newsQuery: NewsQuery) => 
    useData<NewsArticle>("/latest", 
       {
      params: {
        category: newsQuery.category,
        sort: newsQuery.sort,
        ...(newsQuery.searchText ? { qInTitle: newsQuery.searchText } : {}),
        },
      },
      [newsQuery]
    );

export default useNews;
