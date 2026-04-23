import useData from "./useData";
import { Source } from "./useSources";

export interface NewsArticle {
  article_id: string;
  title: string;
  image_url: string;
  category: string[];
  source_name: string;
  link: string;
}

const useNews = (selectedCategory: string) => useData<NewsArticle>("/latest", {params: {category: selectedCategory}}, [selectedCategory]);

export default useNews;
