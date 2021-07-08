import { Box, Input, Spinner, HStack, Heading, Button } from "@chakra-ui/react";
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
        position="relative"
      >
        <Box textAlign="center">
          <form onSubmit={handleSubmit}>
            <Input
              placeholder="Shorten a link here..."
              onChange={onchange}
              w={700}
              mr={5}
              // h={50}
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
      <Box bg="#DCDCDC 	" h={300} mt={-70}>
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
                h={10}
                mt={100}
                borderRadius="md"
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

// const ButtonCopy = styled.button`
//   color: white;
//   border-radius: 3px;
//   background-color: hsl(180, 66%, 49%);
//   padding: 5px 20px;
//   font-size: 15px;
//   outline: none;
// `;

export default Inputs;
