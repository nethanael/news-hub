import { Text } from "@chakra-ui/react";
import useNews from "../hooks/useNews";

const NewsGrid = () => {
  const { news, error } = useNews();

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
