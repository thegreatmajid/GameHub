import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const GameCardContainer = ({ children }: Props) => {
  return (
    <Box
      overflow="hidden"
      dir="ltr"
      borderRadius={15}
      _hover={{ transform: "scale(1.05)", transition: "0.25s ease-out" }}
    >
      {children}
    </Box>
  );
};

export default GameCardContainer;
