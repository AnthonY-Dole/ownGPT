import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  PopoverArrow,
  IconButton,
  Button,
  Stack,
  Flex,
} from "@chakra-ui/react";

import { IoAddCircleOutline } from "react-icons/io5";
import { RiShutDownLine, RiRestartLine, RiFileShredLine } from "react-icons/ri";

type CustomButtonMenuProps = {
  children: React.ReactNode;
};

export const CustomButtonMenu = ({ children }: CustomButtonMenuProps) => {
  return (
    <Flex justifyContent="center" mt={4}>
      <Popover placement="bottom" isLazy>
        <PopoverTrigger>
          <IconButton
            aria-label="More server options"
            icon={<IoAddCircleOutline />}
            variant="solid"
            w="fit-content"
          />
        </PopoverTrigger>
        <PopoverContent w="fit-content" _focus={{ boxShadow: "none" }}>
          <PopoverArrow />
          <PopoverBody>
            <Stack>{children}</Stack>
          </PopoverBody>
        </PopoverContent>
      </Popover>
    </Flex>
  );
};
