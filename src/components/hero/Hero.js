import { Box, Heading, Flex, Text, Button, Image } from "@chakra-ui/react";
import bgBoost from "../../images/illustration-working.svg";

const Hero = () => {
  return (
    <Flex
      direction={{
        base: "column-reverse",
        sm: "column-reverse",
        md: "initial",
        lg: "initial",
      }}
      width="1024px"
      maxW="90%"
      m="0 auto"
      alignItems="center"
      justifyContent="space-between"
      mb={100}
      mt={45}
    >
      <Box
        maxW="90%"
        textAlign={{
          base: "center",
          sm: "center",
          md: "initial",
          lg: "initial",
        }}
        my={{ base: "25px", sm: "25px", md: "initial", lg: "initial" }}
      >
        <Heading
          fontSize={{ base: "2em", sm: "2em", md: "3.3em", lg: "3.3em" }}
          color="hsl(260, 8%, 14%)"
        >
          More than just shorter links
        </Heading>
        <Text
          mt={2}
          mb={5}
          color="hsl(257, 7%, 63%)"
          maxW="90%"
          w={450}
          fontSize={{ base: "15px", sm: "15px", md: "18px", lg: "18px" }}
        >
          Build your brand’s recognition and get detailed insights on how your
          links are performing.
        </Text>
        <Button
          borderRadius="full"
          bgColor=" hsl(180, 66%, 49%)"
          py={1.5}
          px={5}
          color="white"
          _hover={{ color: "none", opacity: ".6" }}
        >
          Get Started
        </Button>
      </Box>
      <Box>
        <Image src={bgBoost}></Image>
      </Box>
    </Flex>
  );
};

export default Hero;
