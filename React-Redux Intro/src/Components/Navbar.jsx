import { Flex, Spacer, Box, Center } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <>
      <Flex justify="center" h={50} background="#bdbdbd">
        <Center>
          {" "}
          <Link to="/">
            <Box mx={10}>
              <b>TODO'S App</b>
            </Box>
          </Link>
        </Center>
        <Spacer />
        <Flex justifyContent="center">
          <Center>
            <Link to="/">
              {" "}
              <Box mx={40}>
                <b>Home</b>
              </Box>
            </Link>
          </Center>
          <Center>
            <Link to="todos">
              <Box mx={40}>
                <b>Show Todos</b>
              </Box>
            </Link>
          </Center>
        </Flex>
      </Flex>
    </>
  );
};
