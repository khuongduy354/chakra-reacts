import { SunIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Divider,
  Flex,
  HStack,
  Select,
  Text,
} from "@chakra-ui/react";

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
    </Box>
  );
}
