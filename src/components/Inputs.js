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
    <Box bg="hsl(0, 0%, 75%) " w="1100px" m="auto" maxW="90%" h={300}>
      <Box
        bgColor="hsl(257, 27%, 26%)"
        bgImage={bgImgInput}
        backgroundSize="cover"
        bgPosition="contain"
        p={8}
        borderRadius="md"
      >
        <Box>
          <form onSubmit={handleSubmit}>
            <Input
              placeholder="Shorten a link here..."
              onChange={onchange}
              w={850}
              mr={10}
              bg="white"
            />

            <ButtonClick
              onClick={() => {
                setLoading(true);
              }}
            >
              {loading ? (
                <Spinner size="sm" height="20px" thickness="4px" />
              ) : (
                <span>Shorten It</span>
              )}
            </ButtonClick>
          </form>
        </Box>
      </Box>
      <Box>
        {datas.map((url, index) => {
          return (
            <HStack
              key={index}
              py={3}
              px={5}
              bgColor="white"
              mt={5}
              justifyContent="space-between"
              borderRadius="5px"
            >
              <Heading fontSize="15px" color="hsl(257, 27%, 26%)">
                {url.result.original_link}
              </Heading>
              <HStack>
                <Heading fontSize="15px" mr={5} color="hsl(180, 66%, 49%)">
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
