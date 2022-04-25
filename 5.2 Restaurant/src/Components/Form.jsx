import {
  Input,
  Center,
  Button,
  Stack,
  Heading,
  Box,
  Flex,
  Spacer,
  Select,
  Image,
  Text,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { RestaurantDetails } from "./RestaurantDetails";

export const Form = () => {
  const [restDetails, setRestDetails] = useState({});

  const [allRest, setAllRest] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    fetch("http://localhost:8080/restaurant")
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setAllRest(res);
      });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRestDetails({
      ...restDetails,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // console.log(restDetails)
    fetch("http://localhost:8080/restaurant", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(restDetails),
    }).then((res) => {
      getData();
    });
  };

  const handleView = (e) => {
    const type = e.target.value;

    if (type == "asc") {
      fetch("http://localhost:8080/restaurant")
        .then((res) => res.json())
        .then((res) => {
          res.sort((a, b) => {
            return a.reviews - b.reviews;
          });
          setAllRest(res);
        });
    } else if (type == "desc") {
      fetch("http://localhost:8080/restaurant")
        .then((res) => res.json())
        .then((res) => {
          res.sort((a, b) => {
            return b.reviews - a.reviews;
          });
          setAllRest(res);
        });
    }
  };

  const handleFilter = (e) => {
    const filter = e.target.value;

    fetch("http://localhost:8080/restaurant")
      .then((res) => res.json())
      .then((res) => {
        const ans = res.filter((data) => {
          return data.payment_methods.toLowerCase().includes(filter);
        });
        setAllRest(ans);
        console.log("res:", ans);
      });
  };

  const handleDelete = (id) => {
    fetch(`http://localhost:8080/restaurant/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        getData();
      });
  };

  return (
    <Flex p={10} flexWrap="wrap">
      <form>
        <Stack
          width="500px"
          spacing={3}
          p={4}
          border="1px"
          borderColor="gray.200"
          boxShadow="md"
          borderRadius="xl"
        >
          <Heading color="teal">Fill Restaurant Details</Heading>
          <Input
            name="name"
            placeholder="Restaurant Name"
            onChange={handleChange}
          />
          <Input
            name="categories"
            placeholder="Categories"
            onChange={handleChange}
          />
          <Input
            name="cost_for_one"
            placeholder="Cost for one"
            onChange={handleChange}
          />
          <Input
            name="payment_methods"
            placeholder="Payment methods"
            onChange={handleChange}
          />
          <Input
            type="number"
            name="reviews"
            placeholder="Reviews"
            onChange={handleChange}
          />
          <Input
            type="text"
            name="link"
            placeholder="image link"
            onChange={handleChange}
          />
          <Button
            type="submit"
            colorScheme="teal"
            w="100%"
            onClick={handleSubmit}
          >
            Submit
          </Button>
        </Stack>
      </form>
      <Spacer />
      {allRest.length != 0 ? (
        <Flex
          gap={6}
          border="1px"
          borderColor="gray.200"
          height="650px"
          width="900px"
          flexDirection="column"
          borderRadius="xl"
          boxShadow="md"
          p={10}
          overflowY="auto"
          css={{
            "&::-webkit-scrollbar": {
              width: "4px",
            },
            "&::-webkit-scrollbar-track": {
              width: "6px",
            },
            "&::-webkit-scrollbar-thumb": {
              background: "blue",
              borderRadius: "24px",
            },
          }}
        >
          <Flex gap="5">
            {" "}
            <Select
              variant="outline"
              placeholder="Sort By Review"
              onChange={handleView}
            >
              <option value="asc">Low to High </option>
              <option value="desc">High to Low </option>
            </Select>
            <Select
              variant="outline"
              placeholder="Filter By Payment Method"
              onChange={handleFilter}
            >
              <option value="card">Card</option>
              <option value="cash">Cash</option>
              <option value="upi">UPI</option>
            </Select>
          </Flex>
          {allRest.map((data) => (
            <RestaurantDetails
              name={data.name}
              categories={data.categories}
              cost_for_one={data.cost_for_one}
              payment_methods={data.payment_methods}
              reviews={data.reviews}
              id={data.id}
              link={data.link}
              handleDelete={handleDelete}
            />
          ))}
        </Flex>
      ) : null}
    </Flex>
  );
};
