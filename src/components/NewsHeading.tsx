import { Heading } from "@chakra-ui/react";
import { NewsQuery } from "../entities/NewsQuery";

interface NewsHeadingProps {
  newsQuery: NewsQuery;
}

const NewsHeading = ({ newsQuery }: NewsHeadingProps) => {
  const heading = `Filtrado por: ${newsQuery.category || ""} y ${newsQuery.sort || ""}`;

  return (
    <Heading as="h1" marginY={5}>
      {heading}
    </Heading>
  );
};

export default NewsHeading;
