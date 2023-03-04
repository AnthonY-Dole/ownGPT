import { ChatGPTResponse } from "./type";
const { API_URL } = import.meta.env;
import axios from "axios";
const BASE_URL = "https://api.openai.com/v1/completions";

const getChatGPTResponse = async (prompt: string): Promise<ChatGPTResponse> => {
  const response = await axios.post(
    BASE_URL,
    {
      prompt: prompt,
      max_tokens: 100,
      temperature: 0.7,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
      stop: ["."],
    },
    {
      headers: {
        "Content-Type": "application/json",

        Authorization: `Bearer ${API_URL}`,
      },
    }
  );
  return response.data;
};
