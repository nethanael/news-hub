import { SimpleGrid, Text } from "@chakra-ui/react";
import useNews from "../hooks/useNews";
import ArticleCard from "./ArticleCard";

const NewsGrid = () => {
  const { news, error } = useNews();

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        spacing={10}
        padding="10px"
      >
        {news.map((article) => (
          <ArticleCard key={article.article_id} newsArticle={article} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default NewsGrid;
