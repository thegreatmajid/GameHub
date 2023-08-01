import { Image, ImageProps } from "@chakra-ui/react";
import Bullseye from "../assets/bulls-eye.webp";
import ThumbsUp from "../assets/thumbs-up.webp";
import Meh from "../assets/meh.webp";

interface Props {
  rating: number;
}

const Emoji = ({ rating }: Props) => {
  if (rating < 3) return;

  const emojiMap: { [key: number]: ImageProps } = {
    3: { src: Meh, alt: "meh", boxSize: "15px" },
    4: { src: ThumbsUp, alt: "recommended", boxSize: "20px" },
    5: { src: Bullseye, alt: "exceptional", boxSize: "25px" },
  };

  return <Image {...emojiMap[rating]} marginTop={2}></Image>;
};

export default Emoji;
