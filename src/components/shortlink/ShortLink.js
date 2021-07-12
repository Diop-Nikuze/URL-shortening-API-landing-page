import { Heading, HStack, Button, Box } from "@chakra-ui/react";
const ShortLink = ({
  datas,
  handleCopyUrl,
  copyUrl,
  primaryColor,
  setPrimaryColor,
  secondaryColor,
  setSecondaryColor,
}) => {
  return (
    <Box>
      {datas.map((url, index) => {
        return (
          <HStack key={index}>
            <HStack
              justifyContent="space-between"
              bgColor="white"
              py={7}
              px={7}
              w="1024px"
              m="0 auto"
              maxW="90%"
              mt={70}
              borderRadius="md"
              h={10}
            >
              <Heading fontSize="15px" color="hsl(257, 27%, 26%)">
                {url.result.original_link}
              </Heading>
              <HStack alignContent="center">
                <Heading fontSize="15px" mr={3} color="hsl(180, 66%, 49%)">
                  {url.result.full_short_link}
                </Heading>
                <Button
                  onClick={() => {
                    navigator.clipboard.writeText(url.result.short_link);
                    handleCopyUrl();
                    setPrimaryColor("hsl(257, 27%, 26%)");
                    setSecondaryColor("white");
                  }}
                  bg={primaryColor}
                  color={secondaryColor}
                  size="sm"
                  borderRadius="5px "
                  outline="none"
                  border="none"
                  fontSize="13px"
                  _focus="none"
                  _hover={{ color: "none", opacity: ".5" }}
                  w={85}
                >
                  {copyUrl}
                </Button>
              </HStack>
            </HStack>
          </HStack>
        );
      })}
    </Box>
  );
};

export default ShortLink;
