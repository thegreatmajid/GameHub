import useGenres from "../hooks/useGenres";

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
  return (
    <ul>
      {data.map((genre) => (
        <li key={genre.id}>{persianGenre[genre.slug]}</li>
      ))}
    </ul>
  );
};

export default GenreList;
