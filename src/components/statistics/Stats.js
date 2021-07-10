import { Box, Heading, HStack, Text, Image } from "@chakra-ui/react";
import brandImage from "../../images/icon-brand-recognition.svg";
import detailsImage from "../../images/icon-detailed-records.svg";
import customizeImage from "../../images/icon-fully-customizable.svg";

const Stats = () => {
  return (
    <Box pos="absolute" top="130px" left="127px">
      <Box textAlign="center" maxW="90%" margin="auto" w="520px" mt={55}>
        <Heading color=" hsl(255, 11%, 22%)"> Advanced Statistics</Heading>
        <Text fontSize="18px" mt={4} color=" hsl(257, 7%, 63%)">
          Track how your links are performing across the web with our advanced
          statistics dashboard.
        </Text>
      </Box>
      <HStack
        w="1100px"
        margin="auto"
        justifyContent="space-between"
        alignItems="center"
        mt={85}
        position="relative"
        _after={{
          content: '""',
          pos: "absolute",
          top: "55%",
          left: "30%",
          w: "50%",
          h: "7px",
          bg: "hsl(180, 66%, 49%)",
        }}
      >
        <Box bg="white" w={350} p={7} borderRadius="base" zIndex="1">
          <Image
            borderRadius="full"
            p={4}
            bg="hsl(257, 27%, 26%)"
            src={brandImage}
            pos="absolute"
            top="-40px"
          ></Image>
          <Heading mt={7} color=" hsl(255, 11%, 22%)" mb={5} fontSize="22px">
            Brand Recognition
          </Heading>
          <Text lineHeight="1.7" fontSize="15px" color=" hsl(0, 0%, 75%)">
            Boost your brand recognition with each click. Generic links don’t
            mean a thing. Branded links help instil confidence in your content.
          </Text>
        </Box>
        maxW="90%"
        <Box w={350} borderRadius="base" position="relative" zIndex="1">
          <Box mt="-80px" pos="absolute" p={7} bg="white">
            <Image
              borderRadius="full"
              p={4}
              bg="hsl(257, 27%, 26%)"
              src={detailsImage}
              pos="absolute"
              top="-40px"
            ></Image>
            <Heading mt={7} color=" hsl(255, 11%, 22%)" mb={5} fontSize="22px">
              Detailed Records
            </Heading>
            <Text lineHeight="1.7" fontSize="15px" color=" hsl(0, 0%, 75%)">
              Gain insights into who is clicking your links. Knowing when and
              where people engage with your content helps inform better
              decisions.
            </Text>
          </Box>
        </Box>
        maxW="90%"
        <Box w={350} borderRadius="base" zIndex="1">
          <Box mt="-40px" pos="absolute" p={7} bg="white">
            <Image
              borderRadius="full"
              p={4}
              bg="hsl(257, 27%, 26%)"
              src={customizeImage}
              pos="absolute"
              top="-40px"
            ></Image>
            <Heading mt={7} color=" hsl(255, 11%, 22%)" mb={5} fontSize="22px">
              Fully Customizable
            </Heading>
            <Text lineHeight="1.7" fontSize="15px" color=" hsl(0, 0%, 75%)">
              Improve brand awareness and content discoverability through
              customizable links, supercharging audience engagement.
            </Text>
          </Box>
        </Box>
      </HStack>
    </Box>
  );
};

export default Stats;
