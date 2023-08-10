import { Box, Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import GameGrid from "./components/GameGrid";
import GameHeading from "./components/GameHeading";
import GenreList from "./components/GenreList";
import NavBar from "./components/NavBar";
import PlatformSelector from "./components/PlatformSelector";
import SortSelector from "./components/SortSelector";

function App() {
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
      <GridItem area={"nav"}>
        <NavBar></NavBar>
      </GridItem>
      <Show above="lg">
        <GridItem area={"aside"} paddingX={"20px"}>
          <GenreList></GenreList>
        </GridItem>
      </Show>
      <GridItem area={"main"}>
        <Box paddingRight={5}>
          <GameHeading></GameHeading>
          <HStack spacing={5} marginBottom={5}>
            <PlatformSelector></PlatformSelector>
            <SortSelector></SortSelector>
          </HStack>
        </Box>
        <GameGrid></GameGrid>
      </GridItem>
    </Grid>
  );
}

export default App;
