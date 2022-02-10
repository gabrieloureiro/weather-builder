import { ChakraProvider as DefaultChakraProvider } from "@chakra-ui/react";

import { theme } from "styles/theme";

export const ChakraProvider: React.FC = ({ children }) => {
  return (
    <DefaultChakraProvider theme={theme}>{children}</DefaultChakraProvider>
  );
};

