import * as C from "@chakra-ui/react";
import { useIntl } from "react-intl";

const Header = () => {
  const { formatMessage } = useIntl();
  return (
    <C.Flex
      w="100%"
      h="56px"
      bg="gray.700"
      borderRadius="16px"
      p="12px 24px"
      align="center"
      justify="space-between"
      mb="184px"
    >
      <C.Text
        as="h1"
        fontSize="3xl"
        fontWeight="bold"
        w="256px"
        letterSpacing="tight"
      >
        {formatMessage({ id: "page.home.title" })}
        <C.Text as="span" ml="2px" color="cyan.400">
          .
        </C.Text>
      </C.Text>
    </C.Flex>
  );
};

export default Header;
