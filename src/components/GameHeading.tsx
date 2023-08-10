import { Heading } from "@chakra-ui/react";
import { persianGenre } from "./GenreList";
import { persianPlatforms } from "./PlatformSelector";
import useGameQueryStore from "../store";

const GameHeading = () => {
  const genreID = useGameQueryStore((s) => s.gameQuery.genreID);
  const platformID = useGameQueryStore((s) => s.gameQuery.platformID);

  const heading = `بازی ${genreID || platformID ? "های" : "ها"} 
  ${genreID ? persianGenre[genreID] : ""}
  ${platformID ? persianPlatforms[platformID] : ""}`;

  return (
    <Heading as="h1" marginY={10} fontSize={"5xl"}>
      {heading}
    </Heading>
  );
};

export default GameHeading;
