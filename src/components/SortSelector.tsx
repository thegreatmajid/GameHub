import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

const SortSelector = () => {
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown></BsChevronDown>}>
        مرتب شده براساس : ارتباط
      </MenuButton>
      <MenuList>
        <MenuItem>ارتباط</MenuItem>
        <MenuItem>تاریخ</MenuItem>
        <MenuItem>اسم</MenuItem>
        <MenuItem>نشر</MenuItem>
        <MenuItem>محبوبیت</MenuItem>
        <MenuItem>امتیاز</MenuItem>
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
