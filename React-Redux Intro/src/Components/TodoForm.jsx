import {
  Input,
  FormLabel,
  RadioGroup,
  HStack,
  Radio,
  Button,
  FormControl,
  Heading,
} from "@chakra-ui/react";
import { useState } from "react";
import { addTodo } from "../Redux/Todos/actions"
import { store } from "../Redux/store";
import { v4 as uuid } from "uuid";
import { useDispatch } from "react-redux";
import axios from "axios";

export const TodoForm = () => {
  const dispatch = useDispatch();

  const [todo, setTodo] = useState({
    id: "",
    title: "",
    description: "",
    status: "false",
  });

  const handleChange = (e) => {
    e.target;
    // console.log(" e.target:", e.target);
    setTodo({
      ...todo,

      [e.target.name]: e.target.value,
    });
      
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // console.log(todo);
    if (todo.title.trim() == "") {
      alert("Title can not be empty");
      return;
    }

    const temp = {
      ...todo,
      id: uuid().slice(0, 4),
    };

    axios
      .post("http://localhost:8080/todos", temp)
        .then(function (res) {
          getData();
        console.log(res);
      })
      .catch(function (error) {
        console.log(error);
      });

    dispatch(addTodo(temp));
    };
    
    
  const getData = () => {
    axios
      .get("http://localhost:8080/todos")
      .then(function (data) {
        // handle success
        dispatch(storeData(data.data));
        // console.log(data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  };

  return (
    <>
      <Heading m="40px auto" textAlign="center">
        Todo App with React-redux
      </Heading>
      <FormControl w={500} m="20px auto">
        <FormLabel htmlFor="title">
          Todo Title <span style={{ color: "red" }}>*</span>
        </FormLabel>
        <Input
          id="title"
          name="title"
          placeholder="todo title"
          onChange={handleChange}
          value={todo.title}
          mb={3}
        />
        <FormLabel htmlFor="todo">Todo Desciption</FormLabel>
        <Input
          id="todo"
          name="description"
          placeholder="description"
          onChange={handleChange}
          value={todo.description}
          mb={3}
        />
        <FormLabel as="legend">
          Todo Status <span style={{ color: "red" }}>*</span>
        </FormLabel>
        <RadioGroup defaultValue="false" name="status">
          <HStack spacing="24px">
            <Radio value="false" onChange={handleChange}>
              Not Completed
            </Radio>
            <Radio value="true" onChange={handleChange}>
              Completed
            </Radio>
          </HStack>
        </RadioGroup>

        <Button
          mt={4}
          w="100%"
          colorScheme="teal"
          type="submit"
          onClick={handleSubmit}
        >
          Submit
        </Button>
      </FormControl>
    </>
  );
};
