import useData from "./useData";

export interface NewsArticle {
  article_id: string;
  title: string;
  image_url: string;
  category: string[];
  source_name: string;
  link: string;
}

const useNews = (
  selectedCategory: string, 
  selectedOrder: string, 
  searchText: string | null
  ) => 
    useData<NewsArticle>("/latest", 
       {
      params: {
        category: selectedCategory,
        sort: selectedOrder,
        ...(searchText ? { qInTitle: searchText } : {}),
        },
      },
      [selectedCategory, selectedOrder, searchText]
    );

export default useNews;
