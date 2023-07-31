import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatforms from "../hooks/usePlatforms";

const PlatformSelector = () => {
  const persianPlatforms: { [key: string]: string } = {
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
    "neo-geo": "Neo Geo",
    web: "وب",
  };
  const { data } = usePlatforms();

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown></BsChevronDown>}>
        پلتفورم
      </MenuButton>
      <MenuList>
        {data.map((platform) => (
          <MenuItem key={platform.id}>
            {persianPlatforms[platform.slug]}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
