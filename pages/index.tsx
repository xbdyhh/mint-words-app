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
  Center,
  Input,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel
} from '@chakra-ui/react';
import { BsFillMoonStarsFill, BsFillSunFill } from 'react-icons/bs';
import { MintPage } from "../components/mint";
import { getAccount } from '@wagmi/core'
import dynamic from 'next/dynamic';
import { useState,useEffect } from 'react';
import { useNetwork, useSwitchNetwork } from 'wagmi'

const MyNftPage = dynamic(() => import('../components/MyNft'), {
    ssr: false
});



const Home: NextPage = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const account = getAccount();
  const { chain } = useNetwork()

  function handleFaucet() {
    fetch(`https://faucet-dym.panxinyang.top/faucet?address=${account.address}`)?.then(() => alert("token has been sent!"))
  }
  return (
    <Box>
      <Head>
        <title>Mintwords App</title>
        <link href="/favicon.ico" rel="icon" />
      </Head>
      <Center><Box  fontWeight='bold' fontSize='50px'>Mint Words</Box></Center>

      <Flex minWidth='max-content' gap='2'>
       <Spacer />
        <Button onClick={handleFaucet}>faucet</Button>
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

    </Box>
  );
};

export default Home;
