import {
  Card,
  CardBody,
  Heading,
  HStack,
  Image,
  Link,
  Text,
} from "@chakra-ui/react";
import { NewsArticle } from "../hooks/useNews";
import CategoryIconList from "./CategoryIconList";
import SourceInfo from "./SourceInfo";
import noImage from "../assets/no-image-placeholder.webp";

interface ArticleCardProps {
  newsArticle: NewsArticle;
}

const ArticleCard = ({ newsArticle }: ArticleCardProps) => {
  return (
    <Card>
      <Image src={newsArticle.image_url || noImage} />
      <CardBody>
        <HStack justifyContent="space-between" marginBottom={3}>
          <CategoryIconList newsArticle={newsArticle} />
          <SourceInfo sourceInfo={newsArticle.source_name} />
        </HStack>
        <Heading fontSize="2xl">{newsArticle.title}</Heading>
        <Text fontSize="xs">
          <Link href={newsArticle.link} isExternal>
            Ir a la noticia...
          </Link>
        </Text>
      </CardBody>
    </Card>
  );
};

export default ArticleCard;
