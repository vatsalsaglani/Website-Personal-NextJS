import React, { useEffect } from "react";
import {
  ChakraProvider,
  ColorModeProvider,
  useColorMode,
} from "@chakra-ui/react";
import { Global, css } from "@emotion/react";

const GlobalStyle = ({ children }) => {
  return (
    <>
      <Global
        styles={css`
          #__next {
            overflow-x: hidden;
          }
          html,
          body {
            font-family: "DM Mono", monospace;
          }
        `}
      />
      {children}
    </>
  );
};

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      {/* <ColorModeProvider
          options={{
            initialColorMode: "light",
            // useSystemColorMode: true,
          }}
        > */}
      <GlobalStyle minWidth="100%">
        <Component {...pageProps} />
      </GlobalStyle>
      {/* </ColorModeProvider> */}
    </ChakraProvider>
  );
}

export default MyApp;
