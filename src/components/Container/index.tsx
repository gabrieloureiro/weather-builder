import * as C from "@chakra-ui/react";

const Container: React.FC = ({ children }) => {
  return (
    <C.Box
      maxW="100%"
      minH="100vh"
      position="relative"
      p="96px 24px 24px"
      transition="padding 0.5s ease"
    >
      <C.Box as="main" m="0 auto" maxW="1180px">
        {children}
      </C.Box>
    </C.Box>
  );
};

export default Container;
