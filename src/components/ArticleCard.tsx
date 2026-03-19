import { Card, CardBody, Heading, Image } from "@chakra-ui/react";
import { NewsArticle } from "../hooks/useNews";

interface ArticleCardProps {
  newsArticle: NewsArticle;
}

const ArticleCard = ({ newsArticle }: ArticleCardProps) => {
  return (
    <Card borderRadius={10} overflow="hidden">
      <Image src={newsArticle.image_url} />
      <CardBody>
        <Heading fontSize="2xl">{newsArticle.title}</Heading>
      </CardBody>
    </Card>
  );
};

interface ArticleCardProps {}

export default ArticleCard;
