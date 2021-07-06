import { Box, Input, Spinner, HStack, Heading } from "@chakra-ui/react";
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
      >
        <Box textAlign="center">
          <form onSubmit={handleSubmit}>
            <Input
              placeholder="Shorten a link here..."
              onChange={onchange}
              w={700}
              mr={5}
              h={50}
              borderRadius="5px"
              bg="white"
            />

            <ButtonClick
              onClick={() => {
                setLoading(true);
              }}
            >
              {loading ? (
                <Spinner size="sm" height="22px" speed="0.3s" thickness="3px" />
              ) : (
                <span>Shorten It</span>
              )}
            </ButtonClick>
          </form>
        </Box>
      </Box>
      <Box bg="hsl(0, 0%, 75%)" h={300} mt={-70} pos="relative" zIndex="-1">
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
                  <ButtonCopy
                    onClick={() => {
                      navigator.clipboard.writeText(url.result.short_link);
                      handleCopyUrl();
                    }}
                  >
                    {copyUrl}
                  </ButtonCopy>
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

const ButtonCopy = styled.button`
  color: white;
  border-radius: 3px;
  background-color: hsl(180, 66%, 49%);
  padding: 5px 20px;
  font-size: 15px;
  outline: none;
`;

export default Inputs;
