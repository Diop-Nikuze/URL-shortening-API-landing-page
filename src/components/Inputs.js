import { Box, Input, HStack, Heading, Button } from "@chakra-ui/react";
import bgImgInput from "../images/bg-shorten-desktop.svg";
import styled from "@emotion/styled";

const Inputs = ({
  handleSubmit,
  onchange,
  loading,
  setLoading,
  datas,
  handleCopyUrl,
  copyUrl,
  primaryColor,
  setPrimaryColor,
  secondaryColor,
  setSecondaryColor,
  search,
}) => {
  return (
    <Box>
      <Box
        bgColor="hsl(257, 27%, 26%)"
        bgImage={bgImgInput}
        backgroundSize="cover"
        bgPosition="contain"
        p={8}
        borderRadius="md"
        w="1100px"
        m="auto"
        maxW="90%"
        pos="relative"
      >
        <Box textAlign="center">
          <form onSubmit={handleSubmit}>
            <Input
              placeholder="Shorten a link here..."
              onChange={onchange}
              w={700}
              maxW="70%"
              mr={5}
              value={search}
              borderRadius="5px"
              bg="white"
              size="md"
            />

            <ButtonClick
              onClick={() => {
                setLoading(true);
              }}
            >
              {loading ? (
                <Button
                  as="a"
                  isLoading
                  loadingText="Loading"
                  colorScheme="white"
                  spinnerPlacement="end"
                  size="xs"
                ></Button>
              ) : (
                <span>Shorten It</span>
              )}
            </ButtonClick>
          </form>
        </Box>
      </Box>
      <Box bg="#DCDCDC" h={200} mt={-59}>
        {datas.map((url, index) => {
          return (
            <HStack key={index}>
              <HStack
                justifyContent="space-between"
                bgColor="white"
                py={7}
                px={7}
                w="1100px"
                m="auto"
                maxW="90%"
                mt={100}
                borderRadius="md"
                position="relative"
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
                      setPrimaryColor("hsl(257, 27%, 26%)");
                      setSecondaryColor("white");
                      handleCopyUrl();
                    }}
                    bg={primaryColor}
                    color={secondaryColor}
                    size="sm"
                    borderRadius="5px "
                    outline="none"
                    border="none"
                    fontSize="13px"
                    _focus="none"
                    _hover={{ color: "none" }}
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
    </Box>
  );
};

const ButtonClick = styled.button`
  color: white;
  border-radius: 5px;
  background-color: hsl(180, 66%, 49%);
  padding: 8px 20px;
  outline: none;
`;

export default Inputs;
