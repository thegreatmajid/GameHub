import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatforms, { Platform } from "../hooks/usePlatforms";

interface Props {
  onSelectPlatform: (platform: Platform) => void;
  selectedPlatformID?: number;
}

export const persianPlatforms: { [key: number]: string } = {
  1: "کامپیوتر",
  2: "پلی استیشن",
  3: "ایکس باکس",
  4: "آی او اس",
  8: "آندروید",
  5: "مک",
  6: "لینوکس",
  7: "نینتندو",
  9: "آتاری",
  10: "آمیگا",
  11: "سگا",
  12: "3DO",
  13: "نعو جعو",
  14: "وب",
};

const PlatformSelector = ({ onSelectPlatform, selectedPlatformID }: Props) => {
  const platformsQuery = usePlatforms();

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown></BsChevronDown>}>
        {selectedPlatformID ? persianPlatforms[selectedPlatformID] : "پلتفورم"}
      </MenuButton>
      <MenuList>
        {platformsQuery.data?.results.map((platform) => (
          <MenuItem
            onClick={() => onSelectPlatform(platform)}
            key={platform.id}
          >
            {persianPlatforms[platform.id]}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
