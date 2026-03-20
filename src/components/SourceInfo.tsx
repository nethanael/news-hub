import { NewsArticle } from "../hooks/useNews";
import { Badge } from "@chakra-ui/react";

interface SourceInfoProps {
  newsArticle: NewsArticle;
}

const SourceInfo = ({ newsArticle }: SourceInfoProps) => {
  return (
    <Badge colorScheme="blue" fontSize="14px" padding={2} borderRadius="4px">
      {newsArticle.source_name}
    </Badge>
  );
};

export default SourceInfo;
