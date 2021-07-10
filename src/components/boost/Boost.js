import { Box, Button, Heading, HStack } from "@chakra-ui/react";
import boostImage from "../../images/bg-boost-desktop.svg";

const Boost = () => {
  return (
    <Box bgImage={boostImage} bgColor="hsl(257, 27%, 26%)">
      <HStack
        height={250}
        justifyContent="center"
        flexDir="column"
        alignItems="center"
        textAlign="center"
      >
        <Heading color="white" mb={5}>
          Boost your links today
        </Heading>
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
      </HStack>
    </Box>
  );
};

export default Boost;
