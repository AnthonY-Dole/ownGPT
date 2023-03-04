import { ChatGPTResponse } from "./type";
const { VITE_API_URL } = import.meta.env;
import axios from "axios";
const BASE_URL = "https://api.openai.com/v1/completions";

const getChatGPTResponse = async (
  prompt: string,
  apikey?: string
): Promise<ChatGPTResponse> => {
  const response = await axios.post(
    BASE_URL,
    {
      prompt: prompt,
      max_tokens: 100,
      temperature: 0.7,
      top_p: 1,
      model: "text-davinci-003",
      frequency_penalty: 0,
      presence_penalty: 0,
      stop: ["."],
    },
    {
      headers: {
        "Content-Type": "application/json",

        Authorization: `Bearer ${VITE_API_URL ? VITE_API_URL : apikey}`,
      },
    }
  );
  return response.data;
};

export { getChatGPTResponse };
