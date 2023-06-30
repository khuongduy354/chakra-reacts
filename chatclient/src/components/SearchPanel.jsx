import { SearchIcon } from "@chakra-ui/icons";
import { Box, HStack, Textarea } from "@chakra-ui/react";

export const SearchPanel = ({ props }) => {
  return (
    <HStack>
      <SearchIcon w="10%" size="xs" />
      <Textarea w="90%" placeholder="Here is a sample placeholder" />
    </HStack>
  );
};
