import { store } from "../Redux/store";
import { Box, Flex, Text, Button, Heading } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodo, storeData, toggleTodo } from "../Redux/Todos/actions";
import { useEffect } from "react";
import axios from "axios";


export const TodoItem = () => {
  const todos = useSelector((store) => store.todos);
  const dispatch = useDispatch();

  const getData = () => {
    axios
      .get("http://localhost:8080/todos")
      .then(function (data) {
        // handle success
        dispatch(storeData(data.data))
        // console.log(data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  };

  useEffect(() => {
    getData();

  }, []);

  // console.log("todos:", todos);
  return (
    <Flex m="20px auto" maxWidth={1100} gap={6} flexWrap="wrap">
      {todos.length === 0 ? <Heading>No Todo's</Heading> : null}
      {todos.map((t) => (
        <Box
          pt={3}
          pb={16}
          px={4}
          w={250}
          maxHeight={350}
          overflow="hidden"
          boxShadow="md"
          key={t.id}
          pos="relative"
        >
          <Link to={`/todos/:${t.id}`}>
            <Box>
              <Text fontSize="2xl" fontWeight="bold" textAlign="center">
                {t.title}
              </Text>
              <Box fontSize="md" maxHeight={200} py={2} overflow="auto">
                {t.description}
              </Box>
            </Box>{" "}
          </Link>

          {t.status == "true" ? (
            <Button
              pos="absolute"
              bottom={0}
              colorScheme="blue"
              my={3}
              onClick={() => {
                dispatch(toggleTodo(t));
              }}
            >
              Incomplete
            </Button>
          ) : (
            <Button
              pos="absolute"
              bottom={0}
              my={3}
              colorScheme="green"
              onClick={() => {
                dispatch(toggleTodo(t));
              }}
            >
              Complete
            </Button>
          )}
          <Button
            colorScheme="red"
            pos="absolute"
            bottom={0}
            right={0}
            m={3}
            onClick={() => {
              dispatch(deleteTodo(t));
            }}
          >
            Delete
          </Button>
        </Box>
      ))}
    </Flex>
  );
};
