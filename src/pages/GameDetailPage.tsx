import {
  Center,
  GridItem,
  Heading,
  SimpleGrid,
  Spinner,
} from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import ExpandableText from "../components/ExpandableText";
import GameAttributes from "../components/GameAttributes";
import useGame from "../hooks/useGame";
import GameTrailer from "../components/GameTrailer";
import GameScreenshots from "../components/GameScreenshots";

const GameDetailPage = () => {
  const { slug } = useParams();
  const { data, isLoading, error } = useGame(slug!);

  if (isLoading)
    return (
      <Center>
        <Spinner boxSize={20} />
      </Center>
    );

  if (error || !data) throw error;

  return (
    <SimpleGrid dir="ltr" columns={{ base: 1, md: 2 }} spacing={10}>
      <GridItem>
        <Heading>{data.name}</Heading>
        <ExpandableText>{data.description_raw}</ExpandableText>
        <GameAttributes data={data}></GameAttributes>
      </GridItem>
      <GridItem>
        <GameTrailer gameID={data.id}></GameTrailer>
        <GameScreenshots gameID={data.id}></GameScreenshots>
      </GridItem>
    </SimpleGrid>
  );
};

export default GameDetailPage;
