import { Box, Button, Heading, Text, HStack } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { deleteTodo, toggleTodo } from "../Redux/Todos/actions";

export const Todo = () => {
  const { id } = useParams();

  const todoid = id.substring(1);
  const todos = useSelector((store) => store.todos);

  const todo = todos.find((item) => item.id == todoid);
  // console.log('todojh:', todo)

  const dispatch = useDispatch();

  const navigate = useNavigate();

  return (
    <>
      <Box
        w={400}
        minHeight={400}
        m="40px auto"
        p={7}
        boxShadow="xl"
        borderRadius={20}
        border="1px solid lightblue"
      >
        <Heading textAlign="center">{todo.title}</Heading>
        <Text fontSize="md" mt={3}>
          <b>Task : </b>
          {todo.description}
        </Text>
        <HStack gap={3} mt={3} w="100%">
          {" "}
          {todo.status == "true" ? (
            <Button
              w="100%"
              colorScheme="blue"
              onClick={() => {
                dispatch(toggleTodo(todo));
              }}
            >
              Incomplete
            </Button>
          ) : (
            <Button
              w="100%"
              colorScheme="green"
              onClick={() => {
                dispatch(toggleTodo(todo));
              }}
            >
              Complete
            </Button>
          )}
          <Button
            w="100%"
            colorScheme="red"
            ml={3}
            onClick={() => {
              dispatch(deleteTodo(todo));
              navigate("/todos");
            }}
          >
            Delete
          </Button>
        </HStack>
      </Box>
    </>
  );
};
