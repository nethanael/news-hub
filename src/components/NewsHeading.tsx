import { Heading } from "@chakra-ui/react";
import { NewsQuery } from "../entities/NewsQuery";
import categories from "../data/NewsCategories";

interface NewsHeadingProps {
  newsQuery: NewsQuery;
}

const NewsHeading = ({ newsQuery }: NewsHeadingProps) => {
  const selectedCategory = categories.find(
    (category) => category.name === newsQuery.category,
  );

  const heading = `${selectedCategory?.label || "Noticias"}`;

  return (
    <Heading as="h1" marginY={5}>
      {heading}
    </Heading>
  );
};

export default NewsHeading;
