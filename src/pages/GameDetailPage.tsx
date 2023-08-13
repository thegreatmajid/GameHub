import { Center, Heading, Spinner } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import ExpandableText from "../components/ExpandableText";
import GameAttributes from "../components/GameAttributes";
import useGame from "../hooks/useGame";

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
    <div dir="ltr">
      <Heading>{data.name}</Heading>
      <ExpandableText>{data.description_raw}</ExpandableText>
      <GameAttributes data={data}></GameAttributes>
    </div>
  );
};

export default GameDetailPage;
