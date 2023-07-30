import { HStack, List, ListItem, Image, Text, Spinner } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";

const GenreList = () => {
  const persianGenre: { [key: string]: string } = {
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
  const { data, error, isLoading } = useGenres();

  if (error) return null;

  if (isLoading) return <Spinner marginY={"20px"} boxSize={"100px"}></Spinner>;

  return (
    <List>
      {data.map((genre) => (
        <ListItem key={genre.id} paddingY={"5px"}>
          <HStack>
            <Image
              boxSize={"32px"}
              borderRadius={"10px"}
              src={getCroppedImageUrl(genre.image_background)}
            ></Image>
            <Text fontSize="lg">{persianGenre[genre.slug]}</Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
