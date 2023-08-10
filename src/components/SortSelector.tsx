import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import useGameQueryStore from "../store";

const SortSelector = () => {
  const selectedSortOrder = useGameQueryStore((s) => s.gameQuery.sortOrder);
  const setSortOrder = useGameQueryStore((s) => s.setSortOrder);
  const sortOrders = [
    { value: "", label: "ارتباط" },
    { value: "-added", label: "تاریخ" },
    { value: "name", label: "اسم" },
    { value: "-released", label: "نشر" },
    { value: "-metacritic", label: "محبوبیت" },
    { value: "-rating", label: "امتیاز" },
  ];

  const currentSortOrder = sortOrders.find(
    (order) => order.value === selectedSortOrder
  );

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown></BsChevronDown>}>
        مرتب شده براساس : {currentSortOrder?.label || "ارتباط"}
      </MenuButton>
      <MenuList>
        {sortOrders.map((order) => (
          <MenuItem
            onClick={() => setSortOrder(order.value)}
            key={order.value}
            value={order.value}
          >
            {order.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
