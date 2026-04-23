import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import NewsGrid from "./components/NewsGrid";
import SourcesList from "./components/SourcesList";
import { useState } from "react";
import CategorySelector from "./components/CategorySelector";

function App() {
  const [selectedCategory, setSelectedCategory] = useState("top");

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
        <NavBar />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" paddingX={5}>
          <SourcesList />
        </GridItem>
      </Show>
      <GridItem area="main">
        <CategorySelector
          selectedCategory={selectedCategory}
          onSelectCategory={(category) => setSelectedCategory(category)}
        />
        <NewsGrid selectedCategory={selectedCategory} />
      </GridItem>
    </Grid>
  );
}

export default App;
