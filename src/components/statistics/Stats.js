import { Box, Heading, HStack, Text, Image } from "@chakra-ui/react";
import brandImage from "../../images/icon-brand-recognition.svg";
import detailsImage from "../../images/icon-detailed-records.svg";
import customizeImage from "../../images/icon-fully-customizable.svg";

const Stats = () => {
  return (
    <Box
      width="1024px"
      maxW="90%"
      m="0 auto"
      pos="absolute"
      left="-50%"
      right="-50%"
      mt={{ base: 125, sm: 125, md: 150, lg: 85 }}
    >
      <Box textAlign="center" maxW="90%" m="auto" w="520px">
        <Heading
          color=" hsl(255, 11%, 22%)"
          fontSize={{ base: 25, sm: 25, md: 35, lg: "38px" }}
        >
          Advanced Statistics
        </Heading>
        <Text
          fontSize={{ base: 16, sm: 16, md: "18px", lg: "18px" }}
          mt={4}
          color=" hsl(257, 7%, 63%)"
          lineHeight={{ base: 1.7, sm: 1.7, md: "initial", lg: "inittial" }}
        >
          Track how your links are performing across the web with our advanced
          statistics dashboard.
        </Text>
      </Box>
      <HStack
        justifyContent="space-between"
        flexDir={{ base: "column", sm: "column", md: "column", lg: "initial" }}
        mt={85}
        pos="relative"
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
        <Box
          bg="white"
          w={330}
          p={5}
          borderRadius="base"
          zIndex="1"
          mb={{ base: 150, sm: 150, md: 150, lg: 0 }}
          textAlign={{ base: "center", sm: "center", md: "center", lg: "left" }}
        >
          <Image
            borderRadius="full"
            p={4}
            bg="hsl(257, 27%, 26%)"
            src={brandImage}
            pos="absolute"
            top="-40px"
            left={{ base: 125, sm: 125, md: 300, lg: "initial" }}
          ></Image>
          <Heading mt={7} color=" hsl(255, 11%, 22%)" mb={5} fontSize="22px">
            Brand Recognition
          </Heading>
          <Text lineHeight="1.7" fontSize="15px" color=" hsl(0, 0%, 75%)">
            Boost your brand recognition with each click. Generic links don’t
            mean a thing. Branded links help instil confidence in your content.
          </Text>
        </Box>
        <Box
          w={330}
          borderRadius="base"
          pos="relative"
          zIndex="1"
          textAlign={{ base: "center", sm: "center", md: "center", lg: "left" }}
        >
          <Box
            mt="-80px"
            pos={{
              base: "relative",
              sm: "relative",
              md: "relative",
              lg: "absolute",
            }}
            p={5}
            bg="white"
            mb={120}
          >
            <Image
              borderRadius="full"
              p={4}
              bg="hsl(257, 27%, 26%)"
              src={detailsImage}
              pos="absolute"
              top="-40px"
              left={{ base: 125, sm: 125, md: 125, lg: "initial" }}
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
        <Box
          w={{ base: 330, sm: 330, md: 330, lg: 310 }}
          borderRadius="base"
          zIndex="1"
          textAlign={{ base: "center", sm: "center", md: "center", lg: "left" }}
          mb={{ base: 330, sm: 330, md: 310, lg: 310 }}
        >
          <Box
            mt="-40px"
            pos={{
              base: "relative",
              sm: "relative",
              md: "relative",
              lg: "absolute",
            }}
            p={5}
            bg="white"
          >
            <Image
              borderRadius="full"
              p={4}
              bg="hsl(257, 27%, 26%)"
              src={customizeImage}
              pos="absolute"
              top="-40px"
              left={{ base: 125, sm: 125, md: 125, lg: "initial" }}
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
