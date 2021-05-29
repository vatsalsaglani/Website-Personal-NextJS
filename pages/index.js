import React from "react";
import Head from "next/head";
import {
  ChakraProvider,
  Container,
  Box,
  Text,
  SimpleGrid,
  IconButton,
} from "@chakra-ui/react";
import { CopyIcon } from "@chakra-ui/icons";
import Link from "next/link";

import {
  AiOutlineGithub,
  AiFillLinkedin,
  AiFillMediumSquare,
  AiFillTwitterSquare,
} from "react-icons/ai";

import { SiGooglescholar } from "react-icons/si";


const GoogleScholarIcon = () => (
  <h1>
    <SiGooglescholar size={30} color="white" />
  </h1>
);

const GithubIcon = () => (
  <h1>
    <AiOutlineGithub size={30} color="white" />
  </h1>
);

const LinkedInIcon = () => (
  <h1>
    <AiFillLinkedin size={30} color="white" />
  </h1>
);

const MediumIcon = () => (
  <h1>
    <AiFillMediumSquare size={30} color="white" />
  </h1>
);

const TwitterIcon = () => (
  <h1>
    <AiFillTwitterSquare size={30} color="white" />
  </h1>
);

const Home = () => {
  return (
    <>
      <Container minWidth="100%" minHeight="100vh" backgroundColor="#2E2E57">
        <Head>
          <title>Vatsal Saglani</title>
        </Head>
        <Box
          minWidth="104%"
          minHeight="10vh"
          ml="-20px"
          backgroundColor="gray.900"
          mr="-20px"
        >
          <Container
            minWidth="90%"
            display="flex"
            justifyContent="space-between"
            alignItems="space-around"
          >
            <Container>
              <Box>
                <Text
                  fontWeight="bold"
                  color="whiteAlpha.900"
                  textAlign="left"
                  fontSize="2xl"
                  mt="30px"
                  mb="30px"
                >
                  Vatsal Saglani
                </Text>
              </Box>
            </Container>
            <Container
              display="flex"
              justifyContent="flex-end"
              flexDirection="row"
              alignItems="center"
            >
              <Link href="https://appliedeverything.ml">
                <a target="_blank">
                  <Text
                    fontWeight="bold"
                    color="whiteAlpha.900"
                    fontSize="lg"
                    mr="20px"
                  >
                    Blogs
                  </Text>
                </a>
              </Link>
              <Link href="https://drive.google.com/file/d/1YE9H1fRa8KEOkt1hFL2Fg6kxyNv8Gixr/view?usp=sharing">
                <a target="_blank">
                  <Text
                    fontWeight="bold"
                    color="whiteAlpha.900"
                    fontSize="lg"
                    ml="20px"
                    mr="10px"
                  >
                    Resume
                  </Text>
                </a>
              </Link>

              {/* <Text
                fontWeight="bold"
                color="whiteAlpha.900"
                fontSize="lg"
                ml="20px"
                mr="10px"
              >
                Resume
              </Text> */}
            </Container>
          </Container>
        </Box>
        <Container
          minHeight="90%"
          maxHeight="100%"
          display="flex"
          flexDirection="column"
          alignItems="stretch"
          justifyContent="center"
          mt="25vh"
        >
          <SimpleGrid
            columns={2}
            spacingX={4}
            spacingY={10}
            minChildWidth="200px"
            display="grid"
            alignItems="center"
          >
            <Container>
              <Box>
                <Text
                  fontWeight="bold"
                  textAlign="left"
                  color="whiteAlpha.900"
                  fontSize="2xl"
                  letterSpacing="wider"
                >
                  Deep Learning Engineer
                </Text>
              </Box>
              <Box>
                <Text color="whiteAlpha.700" fontSize="md" mt="5px">
                  Python | PyTorch | Javascript | React{" "}
                </Text>
              </Box>
            </Container>
            <Container
              display="flex"
              justifyContent="space-between"
              alignItems="stretch"
            >
              <Link href="https://github.com/vatsalsaglani">
                <a target="_blank">
                  <GithubIcon mr="12px" />
                </a>
              </Link>
              <Link href="https://www.linkedin.com/in/vatsalsaglani/">
                <a target="_blank">
                  <LinkedInIcon ml="3px" mr="9px" />
                </a>
              </Link>
              <Link href="https://thevatsalsaglani.medium.com">
                <a target="_blank">
                  <MediumIcon mr="9px" ml="3px" />
                </a>
              </Link>
              <Link href="https://twitter.com/saglanivatsal">
                <a target="_blank">
                  <TwitterIcon mr="9px" ml="3px" />
                </a>
              </Link>
              <Link href="https://scholar.google.com/citations?user=3RB_jh0AAAAJ&hl=en">
                <a target="_blank">
                  <GoogleScholarIcon mr="9px" ml="3px" />
                </a>
              </Link>
            </Container>
          </SimpleGrid>
        </Container>
      </Container>
      <style jsx>
        {`
          #__next {
            overflow-x: hidden;
            overflow-y: hidden;
            font-family: "DM Mono", monospace;
          }
        `}
      </style>
    </>
  );
};

export default Home;
