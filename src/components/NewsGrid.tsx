import { SimpleGrid, Text } from "@chakra-ui/react";
import useNews from "../hooks/useNews";
import ArticleCard from "./ArticleCard";
import ArticleCardSkeleton from "./ArticleCardSkeleton";
import ArticleCardContainer from "./ArticleCardContainer";

const NewsGrid = () => {
  const { data, error, isLoading } = useNews();

  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        spacing={10}
        padding="10px"
      >
        {isLoading &&
          skeletons.map((skeleton) => (
            <ArticleCardContainer>
              <ArticleCardSkeleton key={skeleton} />
            </ArticleCardContainer>
          ))}
        {data.map((article) => (
          <ArticleCardContainer>
            <ArticleCard key={article.article_id} newsArticle={article} />
          </ArticleCardContainer>
        ))}
      </SimpleGrid>
    </>
  );
};

export default NewsGrid;
