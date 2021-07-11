import {
  SimpleGrid,
  Box,
  Heading,
  Text,
  Button,
  Image,
} from "@chakra-ui/react";
import bgBoost from "../../images/illustration-working.svg";

const Hero = () => {
  return (
    <SimpleGrid
      columns={2}
      width="1024px"
      maxW="90%"
      m="0 auto"
      alignItems="center"
      justifyContent="space-between"
      mb={100}
      mt={45}
    >
      <Box w={450} maxW="90%">
        <Heading fontSize="3.3em" color="hsl(260, 8%, 14%)">
          More than just shorter links
        </Heading>
        <Text mt={2} mb={5} color="hsl(257, 7%, 63%)">
          Build your brand’s recognition and get detailed insights on how your
          links are performing.
        </Text>
        <Button
          borderRadius="full"
          bgColor=" hsl(180, 66%, 49%)"
          py={1.5}
          px={5}
          color="white"
          _hover={{ color: "none" }}
        >
          Get Started
        </Button>
      </Box>
      <Box>
        <Image src={bgBoost}></Image>
      </Box>
    </SimpleGrid>
  );
};

export default Hero;
