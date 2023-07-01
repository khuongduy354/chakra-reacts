import { SunIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Center,
  Flex,
  HStack,
  IconButton,
  Select,
  Text,
  VStack,
} from "@chakra-ui/react";
import data from "../data";
import { CreatePost } from "./CreatePost";
function FilterPanel(props) {
  return (
    <Flex justify="space-between">
      <HStack>
        <Button leftIcon={<SunIcon />}>text here</Button>
        <Button leftIcon={<SunIcon />}>text here</Button>
        <Button leftIcon={<SunIcon />}>text here</Button>
        <IconButton icon={<SunIcon />} />
      </HStack>
      <Select maxW="300" value="">
        <option value="commmunity1"></option>
        <option value="commmunity1">Commnunity 1</option>
        <option value="commmunity1">Commnunity 1</option>
      </Select>
    </Flex>
  );
}
function PostItem(props) {
  //   const { post } = props;
  return (
    <HStack mt="30">
      <VStack w="5%">
        <SunIcon />
        <Text>123</Text>
        <SunIcon />
      </VStack>
      <Box w="95%">
        <Button leftIcon={<SunIcon />}>r/something</Button>
        <Text>Posted by someone</Text>
        <h3>SOme text</h3>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui earum,
          consequatur libero tempore illo repellat aperiam a nesciunt enim,
          dicta tempora perferendis odio. Repudiandae quaerat quibusdam, eaque
          aliquam repellat itaque? Lorem ipsum, dolor sit amet consectetur
          adipisicing elit. Veniam illum dolores ipsam, voluptatibus molestias
          blanditiis sapiente ad pariatur dolor minima unde sit dolore est
          voluptas animi sed qui commodi quae!
        </Text>
        <HStack>
          <Button leftIcon={<SunIcon />}>Click </Button>
          <Button leftIcon={<SunIcon />}>Click </Button>
          <Button leftIcon={<SunIcon />}>Click </Button>
          <Button leftIcon={<SunIcon />}>Click </Button>
          <SunIcon />
        </HStack>
      </Box>
    </HStack>
  );
}

export function PostList(props) {
  return (
    <Center>
      <Box maxW="800">
        <Box>
          <CreatePost avatar={props.avatar} />
          <FilterPanel />
        </Box>
        <Box>
          {data.posts.map((post) => {
            return <PostItem key={post} />;
          })}
        </Box>
      </Box>
    </Center>
  );
}
