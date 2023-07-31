import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";

const SearchInput = () => {
  return (
    <InputGroup>
      <InputLeftElement children={<BsSearch />}></InputLeftElement>
      <Input
        placeholder="جست و جو برای ..."
        borderRadius={20}
        variant="filled"
      ></Input>
    </InputGroup>
  );
};

export default SearchInput;
