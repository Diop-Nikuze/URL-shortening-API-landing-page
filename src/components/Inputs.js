import { Box, Input, Button, Text } from "@chakra-ui/react";
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
        p={5}
        borderRadius="md"
        w="1024px"
        maxW="90%"
        m="0 auto"
        pos="absolute"
        left="-50%"
        right="-50%"
        top={-10}
      >
        <Box textAlign="center">
          <form onSubmit={handleSubmit}>
            <Input
              placeholder="Shorten a link here..."
              onChange={onchange}
              w={700}
              maxW="90%"
              value={search}
              borderRadius="5px"
              bg="white"
              size="md"
              type="url"
              mr={5}
              mb={{ base: 3, sm: 3, md: 3, lg: 0 }}
            />

            <ButtonClick
              onClick={() => {
                setLoading(true);
              }}
              type="submit"
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
                <Text
                  as="span"
                  p={{
                    base: "8px 50px",
                    sm: "8px 50px",
                    md: "8px 50px",
                    lg: "initial",
                  }}
                >
                  Shorten It
                </Text>
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

  &:hover {
    opacity: 0.8;
  }
`;

export default Inputs;
