import useTrailer from "../hooks/useTrailer";

interface Props {
  gameID: number;
}

const GameTrailer = ({ gameID }: Props) => {
  const { data, isLoading, error } = useTrailer(gameID);

  if (isLoading) return null;

  if (error) throw error;

  const first = data?.results[0];

  return first ? (
    <video src={first.data[480]} poster={first.preview} controls></video>
  ) : null;
};

export default GameTrailer;
