import { Box, Input, Button } from "@chakra-ui/react";
import bgImgInput from "../images/bg-shorten-desktop.svg";
import styled from "@emotion/styled";

const Inputs = ({ handleSubmit, onchange, loading, setLoading, search }) => {
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
        pos="absolute"
        top="-50px"
        left="127px"
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
