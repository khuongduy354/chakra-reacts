import { SunIcon } from "@chakra-ui/icons";
import {
  Avatar,
  Box,
  Button,
  Divider,
  Flex,
  HStack,
  IconButton,
  Image,
  Input,
  Link,
  List,
  Select,
  Text,
} from "@chakra-ui/react";
import data from "../data";

function SearchBar(props) {
  return (
    <Flex maxW="60%" grow={1} direction="column">
      <Flex>
        <Input placeholder="dang ky va nhap vouch" />
        <IconButton icon={<SunIcon />} />
      </Flex>
      <Flex justify="space-between">
        <Link>Home</Link>
        <Link>Home</Link>
        <Link>Home</Link>
        <Link>Home</Link>
      </Flex>
    </Flex>
  );
}

function NavBar(props) {
  return (
    <Flex justify="space-between" w="100%" p="4">
      <Box>
        <HStack divider={<Divider color="black" />}>
          <Text>Home</Text>
          <Text>Home</Text>
          <Text>Home</Text>
          <SunIcon />
          <SunIcon />
        </HStack>
      </Box>
      <Box>
        <HStack>
          <Button leftIcon={<SunIcon />}>asdf</Button>
          <Button leftIcon={<SunIcon />}>asdf</Button>
          <Select>
            <option>asdf</option>
            <option>asdf</option>
          </Select>
          <HStack divider="">
            <Button>sign in</Button>
            <Button>sign in</Button>
          </HStack>
        </HStack>
      </Box>
    </Flex>
  );
}

export function Header(props) {
  return (
    <Box>
      <NavBar />
      <Flex justify="space-around" align="center">
        <Image src={data.shopeeLogo} />
        <SearchBar />
        <IconButton icon={<SunIcon />} />
      </Flex>
    </Box>
  );
}
