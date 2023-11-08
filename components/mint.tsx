import {
    Box,
    Button,
    Spacer,
    FormControl,
    Input,
    Center,
    Flex,
    Text
  } from '@chakra-ui/react';
import { useState,useEffect } from 'react';
import Abi from "../config/abi";
import { useAccount, useContractRead, useContractWrite, usePrepareContractWrite } from 'wagmi';
import { getAccount } from '@wagmi/core'


const contractConfig = {
    address: '0x4BB9D46067e0EFEB046Ca4Bc3cfeA93d1DBd6A42',
    abi: Abi,
} as const;



export const MintPage = ()=>{
    const[word, setword]  = useState("");
    const[isSubmmit, setIsSubmit] = useState(false);
    const[isError, setisError] = useState(false);

    const handleInputChange = (e:React.ChangeEvent<HTMLInputElement>) => setword(e.target.value)
    const account = getAccount()
    useEffect(() => {
        setisError(word === '');
      }, [word])
    
    const { config: mintWriteConfig } = usePrepareContractWrite({
        ...contractConfig,
        functionName: 'mint',
        args: [account.address,word],
    });
    
    const {
        write: mint
    } = useContractWrite(mintWriteConfig);
  
    const handleMint = async () => {
        setIsSubmit(true)
        console.log("start mint")
        mint?.();
        setIsSubmit(false)
      }

    return(
        <Box  borderWidth={100} borderColor={'transparent'}>
            <Center><Text>Mint your own words NFT!!!</Text></Center>
            <Center><Text>just click the faucet, input words and click the mint!</Text></Center>
            <Spacer h={5}/>
            <Center><svg  width="350" height="350" xmlns="http://www.w3.org/2000/svg"><rect x="0" y="0" height="350" width="350" fill="black"/>  <text x="0" y="15" fill="white">{word}</text></svg></Center>
            <Spacer h={5}/>
            <FormControl isInvalid={isError}  >
            <Center><Input type='email' w={350} placeholder='put your words here!' value={word} onChange={handleInputChange} /></Center>
            </FormControl>
            <Spacer h={5}/>
            <Center><Button colorScheme='blue' isLoading = {isSubmmit} onClick={handleMint}>mint</Button></Center>
        </Box>
        )
}