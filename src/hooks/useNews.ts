import useData from "./useData";

export interface NewsArticle {
  article_id: string;
  title: string;
  image_url: string;
  category: string[];
  source_name: string;
  link: string;
}

const useNews = () => useData<NewsArticle>("/latest");

export default useNews;
