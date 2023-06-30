import { CheckIcon } from "@chakra-ui/icons";
import { Avatar, Box, Flex, HStack, Icon, Text } from "@chakra-ui/react";
import { chatData } from "../data.js";

function ListItem({ props }) {
  const { src, message, date, name, seen } = props;
  return (
    <HStack>
      <Box w="10%">
        <Avatar mx="3" size="sm" src={src} />
      </Box>
      <Box flex="1" pr="4">
        <Flex justify="space-between" align="baseline">
          <Box>
            <Text>{name}</Text>
            <HStack>
              {seen ? <CheckIcon w="10" h="10" /> : null}
              <Text>{message}</Text>
            </HStack>
          </Box>

          <Text>{date}</Text>
        </Flex>
      </Box>
    </HStack>
  );
}
export const ContactList = (props) => {
  return (
    <Box>
      {chatData.map((item) => (
        <ListItem props={item} />
      ))}
    </Box>
  );
};
