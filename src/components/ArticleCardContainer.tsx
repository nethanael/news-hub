import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface ArticleCardContainerProps {
  children: ReactNode;
}

const ArticleCardContainer = ({ children }: ArticleCardContainerProps) => {
  return (
    <Box width="300px" borderRadius={10} overflow="hidden">
      {children}
    </Box>
  );
};

export default ArticleCardContainer;
