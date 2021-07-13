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
              d="flex"
              flexDirection={{
                base: "column",
                sm: "column",
                md: "initial",
                lg: "initial",
              }}
              textAlign={{
                base: "center",
                sm: "center",
                md: "left",
                lg: "left",
              }}
              py={{ base: 3, sm: 3, md: 7, lg: 7 }}
              px={{ base: 2, sm: 2, md: 7, lg: 7 }}
              w="1024px"
              m="0 auto"
              maxW="90%"
              mt={{ base: 130, sm: 130, md: 120, lg: 70 }}
              borderRadius="md"
              h={{ base: "100%", sm: "100%", md: 10, lg: 10 }}
            >
              <Heading
                fontSize={{ base: 13, sm: 13, md: 15, lg: 15 }}
                borderBottom={{
                  base: "1px solid  hsl(0, 0%, 75%)",
                  sm: "1px solid  hsl(0, 0%, 75%)",
                  md: "initial",
                  lg: "initial",
                }}
                mb={{ base: 3, sm: 3, md: 0, lg: 0 }}
                pb={{ base: 2, sm: 2, md: 0, lg: 0 }}
                color="hsl(257, 27%, 26%)"
              >
                {url.result.original_link}
              </Heading>
              <HStack
                alignContent="center"
                d="flex"
                flexDir={{
                  base: "column",
                  sm: "column",
                  md: "initial",
                  lg: "initial",
                }}
              >
                <Heading
                  fontSize={{ base: 13, sm: 13, md: 15, lg: 15 }}
                  mr={{ base: 0, sm: 0, md: 3, lg: 3 }}
                  color="hsl(180, 66%, 49%)"
                  mb={{ base: 3, sm: 3, md: 0, lg: 0 }}
                >
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
                  w={{ base: "100%", sm: "100%", md: 85, lg: 85 }}
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
