import { Button, Heading, Box, Flex, Image, Text } from "@chakra-ui/react";

export const RestaurantDetails = ({
  name,
  categories,
  cost_for_one,
  payment_methods,
  reviews,
  id,
    handleDelete,
  link
}) => {
  return (
    <Flex key={id} p={4} border="1px" gap="5" borderColor="gray.200">
      <Box height="200px" width="250px" objectFit="cover">
        <Image
          src={link}
          alt="Dan Abramov"
          width="100%"
          height="100%"
          objectFit="cover"
        />
      </Box>
      <Flex width="100%" gap={2} flexDirection="column" justifyContent="left">
        <Heading as="h4" size="lg">
          Name : {name}
        </Heading>
        <Text fontSize="md" fontWeight="bold">
          Categories : {categories}{" "}
        </Text>
        <Text fontSize="lg">Cost for one : {cost_for_one} </Text>
        <Text fontSize="lg">Payment Mathods : {payment_methods} </Text>

        <Flex gap="5">
          <Button colorScheme="teal" variant="outline" w="100%">
            <b>Rating : {reviews} &#9733;</b>
          </Button>
          <Button
            colorScheme="red"
            variant="outline"
            w="100%"
                      onClick={() => { handleDelete(id) }}
          >
            Delete
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
};
