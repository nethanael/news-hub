import { useState, useEffect } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

export interface NewsArticle {
  article_id: string;
  title: string;
  image_url: string;
  category: string[];
  source_name: string
}

interface FetchNewsResponse {
  status: string;
  totalResults: number;
  results: NewsArticle[];
}

const useNews = () => {
  const [news, setNews] = useState<NewsArticle[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    setLoading(true);
    apiClient
      .get<FetchNewsResponse>("/latest", { signal: controller.signal})
      .then((res) => {
        setNews(res.data.results);
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setLoading(false);
      });

      return () => controller.abort();

  }, []);

return {news, error, isLoading};

}

export default useNews;
