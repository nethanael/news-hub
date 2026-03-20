import { useState, useEffect } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

export interface NewsArticle {
  article_id: string;
  title: string;
  image_url: string;
  category: string[];
}

interface FetchNewsResponse {
  status: string;
  totalResults: number;
  results: NewsArticle[];
}

const useNews = () => {
  const [news, setNews] = useState<NewsArticle[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    apiClient
      .get<FetchNewsResponse>("/latest", { signal: controller.signal})
      .then((res) => setNews(res.data.results))
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
      });

      return () => controller.abort();

  }, []);

return {news, error};

}

export default useNews;
