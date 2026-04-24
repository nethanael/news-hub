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
        <Heading fontSize="2xl">{newsArticle.title}</Heading>
        <HStack justifyContent="space-between">
          <CategoryIconList newsArticle={newsArticle} />
          <SourceInfo sourceInfo={newsArticle.source_name} />
        </HStack>
        <Text fontSize="xs">
          <Link href={newsArticle.link} isExternal>
            Leer más...
          </Link>
        </Text>
      </CardBody>
    </Card>
  );
};

export default ArticleCard;
