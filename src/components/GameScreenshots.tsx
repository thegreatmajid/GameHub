import React from "react";
import useScreenshot from "../hooks/useScreenshots";
import { SimpleGrid, Image } from "@chakra-ui/react";

interface Props {
  gameID: number;
}

const GameScreenshots = ({ gameID }: Props) => {
  const { data, isLoading, error } = useScreenshot(gameID);

  if (isLoading) return null;

  if (error) throw error;

  return (
    <SimpleGrid columns={{ base: 1, md: 3 }} spacing={5} marginY={10}>
      {data?.results.map((file) => (
        <Image key={file.id} src={file.image}></Image>
      ))}
    </SimpleGrid>
  );
};

export default GameScreenshots;
