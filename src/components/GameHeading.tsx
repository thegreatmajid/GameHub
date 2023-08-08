import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";
import { persianGenre } from "./GenreList";
import { persianPlatforms } from "./PlatformSelector";

interface Props {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
  const heading = `بازی ${
    gameQuery?.genreID || gameQuery?.platformID ? "های" : "ها"
  } 
  ${gameQuery?.genreID ? persianGenre[gameQuery.genreID] : ""}
  ${gameQuery?.platformID ? persianPlatforms[gameQuery.platformID] : ""}`;

  return (
    <Heading as="h1" marginY={10} fontSize={"5xl"}>
      {heading}
    </Heading>
  );
};

export default GameHeading;
