import React from "react";
import { FormControl, FormLabel, Textarea } from "@chakra-ui/react";
type InputProps = {
  name?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
};

export const CustomInput = ({ name, value, onChange }: InputProps) => {
  return (
    <FormControl id="name">
      <FormLabel fontSize="lg" paddingTop={"1rem"}>
        {name}:
      </FormLabel>
      <Textarea
        name={name}
        value={value}
        rows={6}
        onChange={onChange}
        borderColor="gray.300"
        _hover={{
          borderRadius: "gray.300",
        }}
        placeholder="message"
      />
    </FormControl>
  );
};
