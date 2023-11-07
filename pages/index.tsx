import { ConnectButton } from '@rainbow-me/rainbowkit';
import type { NextPage } from 'next';
import Head from 'next/head';
import {
  Box,
  Container,
  Button,
  Flex,
  Icon,
  useColorMode,
  Spacer,
  FormControl,
  Input,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel
} from '@chakra-ui/react';
import { BsFillMoonStarsFill, BsFillSunFill } from 'react-icons/bs';
import { MintPage } from "../components/mint";
import { MyNftPage } from "../components/MyNft";


const Home: NextPage = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Container>
      <Head>
        <title>Mintwords App</title>
        <link href="/favicon.ico" rel="icon" />
      </Head>

      <Flex minWidth='max-content' alignItems='center' gap='2'>
        <Box  fontWeight='bold' fontSize='50px'>Mint Words</Box>
        <Spacer w={200}/>
        <ConnectButton/>
        <Button variant="outline" px={0} onClick={toggleColorMode}><Icon as={colorMode === 'light' ? BsFillMoonStarsFill : BsFillSunFill}/></Button>
      </Flex>
      <Tabs>
      <TabList>
        <Tab>Mint</Tab>
        <Tab>Your NFT</Tab>
      </TabList>
      <TabPanels>
        <TabPanel><MintPage/></TabPanel>
        <TabPanel><MyNftPage/></TabPanel>
      </TabPanels>
    </Tabs>

    </Container>
  );
};

export default Home;
