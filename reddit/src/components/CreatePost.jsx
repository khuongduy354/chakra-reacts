import { SunIcon } from "@chakra-ui/icons";
import {
  Avatar,
  Box,
  Center,
  HStack,
  IconButton,
  Input,
} from "@chakra-ui/react";

export function CreatePost(props) {
  return (
    <HStack>
      <Avatar size="sm" src={props.avatar} />
      <Input placeholder="Create Post" />
      <IconButton icon={<SunIcon />} name="" />
      <IconButton icon={<SunIcon />} />
    </HStack>
  );
}
