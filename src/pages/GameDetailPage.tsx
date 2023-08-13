import { useParams } from "react-router-dom";
import useGame from "../hooks/useGame";
import { Center, Heading, Spinner, Text } from "@chakra-ui/react";
import ExpandableText from "../components/ExpandableText";

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
    </div>
  );
};

export default GameDetailPage;
