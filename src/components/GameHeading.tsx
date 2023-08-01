import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";
import { persianGenre } from "./GenreList";
import { persianPlatforms } from "./PlatformSelector";

interface Props {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
  const heading = `بازی ${
    gameQuery?.genre?.slug || gameQuery?.platform?.slug ? "های" : "ها"
  } 
  ${gameQuery?.genre?.slug ? persianGenre[gameQuery.genre.slug] : ""}
  ${
    gameQuery?.platform?.slug ? persianPlatforms[gameQuery.platform.slug] : ""
  }`;

  return (
    <Heading as="h1" marginY={10} fontSize={"5xl"}>
      {heading}
    </Heading>
  );
};

export default GameHeading;
