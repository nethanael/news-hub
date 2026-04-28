import { Box, Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import NewsGrid from "./components/NewsGrid";
import SourcesList from "./components/SourcesList";
import { useState } from "react";
import CategorySelector from "./components/CategorySelector";
import SortSelector from "./components/SortSelector";
import { NewsQuery } from "./entities/NewsQuery";
import NewsHeading from "./components/NewsHeading";

function App() {
  const [newsQuery, setNewsQuery] = useState<NewsQuery>({
    category: "top",
    sort: "Pubdateasc",
    searchText: null,
  });

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <GridItem area="nav">
        <NavBar
          onSearch={(searchText) => setNewsQuery({ ...newsQuery, searchText })}
        />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" paddingX={5}>
          <SourcesList />
        </GridItem>
      </Show>
      <GridItem area="main">
        <Box paddingLeft={2}>
          <NewsHeading newsQuery={newsQuery} />
          <HStack spacing={5} marginBottom={3}>
            <CategorySelector
              selectedCategory={newsQuery.category}
              onSelectCategory={(category) =>
                setNewsQuery({ ...newsQuery, category })
              }
            />
            <SortSelector
              selectedOrder={newsQuery.sort}
              onSelectOrder={(sort) => setNewsQuery({ ...newsQuery, sort })}
            />
          </HStack>
        </Box>
        <NewsGrid newsQuery={newsQuery} />
      </GridItem>
    </Grid>
  );
}

export default App;
