import { Avatar, Box, Flex, Icon, IconButton, Tooltip } from "@chakra-ui/react";
import { PhoneIcon, EmailIcon, EditIcon } from "@chakra-ui/icons";

function CustomTooltip({ props }) {
  const { avtsrc } = props;
  return (
    <Tooltip>
      <Avatar src={avtsrc} />
    </Tooltip>
  );
}

export function Header(props) {
  return (
    <Flex justify="space-between">
      <Avatar src={props.avtsrc} width="30" height="30" />
      <Box>
        <IconButton icon={<PhoneIcon />} />
        <IconButton icon={<EmailIcon />} />
        <IconButton icon={<EditIcon />} />
      </Box>
      {/* <Icon as={CustomTooltip} label="Avatar" avtsrc={props.avtsrc} /> */}
    </Flex>
  );
}
