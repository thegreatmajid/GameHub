import {
  HStack,
  List,
  ListItem,
  Image,
  Spinner,
  Button,
  Heading,
} from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";
import useGameQueryStore from "../store";

export const persianGenre: { [key: number]: string } = {
  4: "اکشن",
  51: "ایندی",
  3: "ماجراجویی",
  5: "جهان باز",
  10: "استراتژیک",
  2: "شوتر",
  40: "معمولی",
  14: "شبیه سازی",
  7: "پازل",
  11: "آرکید",
  83: "پلتفورمی",
  59: "مولتی پلیر",
  1: "ماشین مسابقه",
  15: "ورزشی",
  19: "خانوادگی",
  6: "جنگی",
  28: "تخته ای",
  17: "کارتی",
  34: "آموزشی",
};

const GenreList = () => {
  const selectedGenreID = useGameQueryStore((s) => s.gameQuery.genreID);
  const setGenreID = useGameQueryStore((s) => s.setGenreID);
  const genreQuery = useGenres();

  if (genreQuery.error) return null;

  if (genreQuery.isLoading)
    return <Spinner marginY={"20px"} boxSize={"100px"}></Spinner>;

  return (
    <>
      <Heading marginY={10} paddingTop={5} fontSize="2xl">
        ژانر
      </Heading>
      <List>
        {genreQuery.data?.results.map((genre) => (
          <ListItem key={genre.id} paddingY={"5px"}>
            <HStack>
              <Image
                objectFit="cover"
                boxSize={"32px"}
                borderRadius={"10px"}
                src={getCroppedImageUrl(genre.image_background)}
              ></Image>
              <Button
                whiteSpace="normal"
                textAlign="right"
                fontWeight={genre.id === selectedGenreID ? "bold" : "light"}
                variant="link"
                onClick={() => setGenreID(genre.id)}
                fontSize="lg"
              >
                {persianGenre[genre.id]}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
