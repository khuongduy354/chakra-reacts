import {
  Box,
  Flex,
  HStack,
  IconButton,
  Image,
  Input,
  Select,
  Text,
  Textarea,
} from "@chakra-ui/react";
import data from "../data";
import { SearchIcon, SunIcon } from "@chakra-ui/icons";

const Searchbar = (props) => {
  return (
    <Box>
      <HStack>
        <SearchIcon />
        <Input placeholder="Search" h="30" />
      </HStack>
    </Box>
  );
};
export const NavBar = (props) => {
  return (
    <Flex justify="space-around" align="center" mt="-3">
      <Box>
        <Image boxSize="100px" objectFit="contain" src={data.redditLogo} />
      </Box>

      <Select placeholder="User Settings" maxW="200">
        <option value="commmunity1">Commnunity 1</option>
        <option value="commmunity1">Commnunity 1</option>
        <option value="commmunity1">Commnunity 1</option>
        <option value="commmunity1">Commnunity 1</option>
      </Select>
      <Searchbar />
      <Box>
        <HStack>
          <SunIcon />
          <SunIcon />
          <SunIcon />
          <SunIcon />
          <SunIcon />
        </HStack>
      </Box>
      <IconButton
        icon={
          <HStack px="4">
            <SunIcon />
            <Text>Advertise</Text>
          </HStack>
        }
      />
      <Select placeholder="DashBoard" maxW="150">
        <option value="commmunity1">Commnunity 1</option>
        <option value="commmunity1">Commnunity 1</option>
        <option value="commmunity1">Commnunity 1</option>
        <option value="commmunity1">Commnunity 1</option>
      </Select>
    </Flex>
  );
};
