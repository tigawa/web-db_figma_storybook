import React from "react"
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "../chakra-theme";

const ChakraProviderDecorator = (Story) => (
  <ChakraProvider theme={theme}>
    <Story />
  </ChakraProvider>
);

export const decorators = [ChakraProviderDecorator];