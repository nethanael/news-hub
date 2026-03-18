import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { Text } from "@chakra-ui/react";

interface NewsArticle {
  article_id: string;
  title: string;
}

interface FetchNewsResponse {
  count: number;
  results: NewsArticle[];
}

const NewsGrid = () => {
  const [news, setNews] = useState<NewsArticle[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    apiClient
      .get<FetchNewsResponse>("/latest")
      .then((res) => setNews(res.data.results))
      .catch((err) => setError(err.message));
  }, []);

  return (
    <>
      {error && <Text>{error}</Text>}
      <ul>
        {news.map((article) => (
          <li key={article.article_id}>{article.title}</li>
        ))}
      </ul>
    </>
  );
};

export default NewsGrid;
