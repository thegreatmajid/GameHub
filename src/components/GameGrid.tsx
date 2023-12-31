import { Box, SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardContainer from "./GameCardContainer";
import GameCardSkeleton from "./GameCardSkeleton";

const GameGrid = () => {
  const { data, error, isLoading, fetchNextPage, hasNextPage } = useGames();
  const skeletons = [1, 2, 3, 4, 5, 6];

  if (error) return <Text>{error.message}</Text>;

  const fethGamesCount =
    data?.pages.reduce(
      (accomulator, page) => accomulator + page.results.length,
      0
    ) || 0;

  return (
    <Box padding={5}>
      <InfiniteScroll
        dataLength={fethGamesCount}
        hasMore={!!hasNextPage}
        next={() => fetchNextPage()}
        loader={<Spinner></Spinner>}
      >
        <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} spacing={10} margin={5}>
          {isLoading &&
            skeletons.map((skeleton) => (
              <GameCardContainer key={skeleton}>
                <GameCardSkeleton></GameCardSkeleton>
              </GameCardContainer>
            ))}
          {data?.pages.map((page, index) => (
            <React.Fragment key={index}>
              {page.results.map((game) => (
                <GameCardContainer key={game.id}>
                  <GameCard game={game}></GameCard>
                </GameCardContainer>
              ))}
            </React.Fragment>
          ))}
        </SimpleGrid>
      </InfiniteScroll>
      {/* {hasNextPage && (
        <Button marginY={5} onClick={() => fetchNextPage()}>
          {isFetchingNextPage ? "در حال بارگذاری..." : "بیشتر"}
        </Button>
      )} */}
    </Box>
  );
};

export default GameGrid;
