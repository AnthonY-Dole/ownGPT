import React, { useState, useContext } from "react";
import { CustomInput } from "../Components/CustomInput";
import { CustomButtonMenu } from "../Components/CustomButtonMenu";
import { getChatGPTResponse } from "..//common/api/index";
import {
  Button,
  Text,
  Heading,
  Container,
  Stack,
  Flex,
  InputRightElement,
  InputGroup,
  Input,
} from "@chakra-ui/react";
import { KeyContext } from "../Context/KeyContext";

type Props = {};

const Home = (props: Props) => {
  const { apikey, setApiKey } = React.useContext(KeyContext);
  const [input, setInput] = useState<string>("");
  const [responseGPT, setResponseGPT] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [show, setShow] = React.useState(false);

  const handleClick = () => setShow(!show);

  const postPrompt = async () => {
    setLoading(true);

    try {
      setLoading(true);
      const response = await getChatGPTResponse(input, apikey?.key);
      setResponseGPT(response.choices[0].text);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container maxW={"5xl"}>
      <Stack
        textAlign={"center"}
        align={"center"}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, xs: 10, sm: 20, md: 28, lg: 32 }}
      >
        <Heading
          fontWeight={600}
          fontSize={{ base: "4xl", sm: "5xl", md: "8xl" }}
          lineHeight={"110%"}
        >
          Your own{" "}
          <Text as={"span"} color={"blue.400"}>
            ChatGPT
          </Text>
        </Heading>
        {responseGPT ? (
          <Text>{responseGPT}</Text>
        ) : (
          <Text color={"gray.500"} maxW={"3xl"}>
            ChatGPT is an incredibly useful tool, however, if the site is often
            unavailable, it can cause interruptions and negatively affect the
            user experience. By using OwnGPT directly, you can be assured of
            consistent reliability and availability.
          </Text>
        )}

        <CustomButtonMenu>
          <InputGroup size="md">
            <Input
              pr="4.5rem"
              type={show ? "text" : "password"}
              placeholder="Enter your api key"
              onChange={(e) => setApiKey({ key: e.target.value })}
            />
            <InputRightElement width="4.5rem">
              <Button h="1.75rem" size="sm" onClick={handleClick}>
                {show ? "Hide" : "Show"}
              </Button>
            </InputRightElement>
          </InputGroup>
          <Button
            justifyContent="center"
            colorScheme="green"
            fontSize="sm"
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "1rem 2rem",
              alignSelf: "center",
            }}
            onClick={() => {}}
          >
            Save
          </Button>
        </CustomButtonMenu>
      </Stack>
      <Stack>
        <Flex
          direction={{ base: "column" }}
          align={"center"}
          justify={"center"}
        >
          <CustomInput
            name="Enter your prompt"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />

          <Button
            colorScheme="blue"
            onClick={postPrompt}
            rounded={"full"}
            isLoading={loading}
            loadingText="Submitting"
            size={"lg"}
            sx={{
              marginTop: "1rem",
              padding: "1rem 4rem",
            }}
          >
            Send
          </Button>
        </Flex>
      </Stack>
    </Container>
  );
};

export default Home;
