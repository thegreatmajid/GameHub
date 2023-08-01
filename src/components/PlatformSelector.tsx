import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatforms from "../hooks/usePlatforms";
import { Platform } from "../hooks/useGames";

interface Props {
  onSelectPlatform: (platform: Platform) => void;
  selectedPlatform: Platform | null;
}

export const persianPlatforms: { [key: string]: string } = {
  pc: "کامپیوتر",
  playstation: "پلی استیشن",
  xbox: "ایکس باکس",
  ios: "آی او اس",
  android: "آندروید",
  mac: "مک",
  linux: "لینوکس",
  nintendo: "نینتندو",
  atari: "آتاری",
  "commodore-amiga": "آمیگا",
  sega: "سگا",
  "3do": "3DO",
  "neo-geo": "نعو جعو",
  web: "وب",
};

const PlatformSelector = ({ onSelectPlatform, selectedPlatform }: Props) => {
  const { data } = usePlatforms();

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown></BsChevronDown>}>
        {selectedPlatform ? persianPlatforms[selectedPlatform.slug] : "پلتفورم"}
      </MenuButton>
      <MenuList>
        {data.map((platform) => (
          <MenuItem
            onClick={() => onSelectPlatform(platform)}
            key={platform.id}
          >
            {persianPlatforms[platform.slug]}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
