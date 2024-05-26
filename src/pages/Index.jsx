import { Container, VStack, Box, Text, Button, Heading, IconButton } from "@chakra-ui/react";
import { FaArrowRight } from "react-icons/fa";

const Index = () => {
  const homeworkAssignments = [
    { id: 1, title: "Math Homework", description: "Complete exercises 1-20 on page 32." },
    { id: 2, title: "Science Project", description: "Prepare a presentation on the solar system." },
    { id: 3, title: "History Essay", description: "Write a 2-page essay on World War II." },
  ];

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center" bg="black" color="gold">
      <VStack spacing={8} width="100%">
        <Heading as="h1" size="xl" mb={4}>
          Homework List
        </Heading>
        {homeworkAssignments.map((assignment) => (
          <Box key={assignment.id} p={5} shadow="md" borderWidth="1px" borderRadius="lg" width="100%" bg="gray.800" color="white">
            <Heading fontSize="xl">{assignment.title}</Heading>
            <Text mt={4}>{assignment.description}</Text>
            <Button mt={4} colorScheme="yellow" rightIcon={<FaArrowRight />}>
              Submit Homework
            </Button>
          </Box>
        ))}
      </VStack>
    </Container>
  );
};

export default Index;
