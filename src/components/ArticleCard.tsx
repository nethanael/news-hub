import { Card, CardBody, Heading, HStack, Image, Text } from "@chakra-ui/react";
import { NewsArticle } from "../hooks/useNews";
import CategoryIconList from "./CategoryIconList";
import SourceInfo from "./sourceInfo";

interface ArticleCardProps {
  newsArticle: NewsArticle;
}

const ArticleCard = ({ newsArticle }: ArticleCardProps) => {
  return (
    <Card borderRadius={10} overflow="hidden">
      <Image src={newsArticle.image_url} />
      <CardBody>
        <Heading fontSize="2xl">{newsArticle.title}</Heading>
        <HStack justifyContent="space-between">
          <CategoryIconList newsArticle={newsArticle} />
          <SourceInfo newsArticle={newsArticle} />
        </HStack>
      </CardBody>
    </Card>
  );
};

interface ArticleCardProps {}

export default ArticleCard;
