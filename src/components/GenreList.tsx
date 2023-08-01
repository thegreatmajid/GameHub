import {
  HStack,
  List,
  ListItem,
  Image,
  Spinner,
  Button,
  Heading,
} from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

export const persianGenre: { [key: string]: string } = {
  action: "اکشن",
  indie: "ایندی",
  adventure: "ماجراجویی",
  "role-playing-games-rpg": "جهان باز",
  strategy: "استراتژیک",
  shooter: "شوتر",
  casual: "معمولی",
  simulation: "شبیه سازی",
  puzzle: "پازل",
  arcade: "آرکید",
  platformer: "پلتفورمی",
  "massively-multiplayer": "مولتی پلیر",
  racing: "ماشین مسابقه",
  sports: "ورزشی",
  family: "خانوادگی",
  fighting: "جنگی",
  "board-games": "تخته ای",
  card: "کارتی",
  educational: "آموزشی",
};

const GenreList = ({ selectedGenre, onSelectGenre }: Props) => {
  const { data, error, isLoading } = useGenres();

  if (error) return null;

  if (isLoading) return <Spinner marginY={"20px"} boxSize={"100px"}></Spinner>;

  return (
    <>
      <Heading marginY={10} paddingTop={5} fontSize="2xl">
        ژانر
      </Heading>
      <List>
        {data.map((genre) => (
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
                fontWeight={genre.id === selectedGenre?.id ? "bold" : "light"}
                variant="link"
                onClick={() => onSelectGenre(genre)}
                fontSize="lg"
              >
                {persianGenre[genre.slug]}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
