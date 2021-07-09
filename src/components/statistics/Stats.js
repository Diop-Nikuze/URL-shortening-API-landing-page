import { Box, Heading, Text } from "@chakra-ui/react";

const Stats = () => {
  return (
    <Box bg="#dcdcdc">
      <Box margin="auto" textAlign="center" w="520px" maxW="90%">
        <Heading> Advanced Statistics</Heading>
        <Text fontSize="18px" mt={4} color="hsl(257, 27%, 26%)">
          Track how your links are performing across the web with our advanced
          statistics dashboard.
        </Text>
      </Box>
    </Box>
  );
};

export default Stats;
