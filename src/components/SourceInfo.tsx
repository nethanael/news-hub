import { NewsArticle } from "../hooks/useNews";
import { Badge } from "@chakra-ui/react";

interface SourceInfoProps {
  sourceInfo: string;
}

const SourceInfo = ({ sourceInfo }: SourceInfoProps) => {
  return (
    <Badge colorScheme="blue" fontSize="14px" padding={2} borderRadius="8px">
      {sourceInfo}
    </Badge>
  );
};

export default SourceInfo;
