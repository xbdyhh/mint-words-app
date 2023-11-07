import {
    Box,
    Button,
    Spacer,
    Stack,
    Skeleton
} from '@chakra-ui/react';
import { useState } from 'react';
import Abi from "../../config/abi";
import { useAccount, useContractRead, useContractWrite, usePrepareContractWrite } from 'wagmi';
import { getAccount } from '@wagmi/core'


const contractConfig = {
    address: '0x4BB9D46067e0EFEB046Ca4Bc3cfeA93d1DBd6A42',
    abi: Abi,
} as const;

const NftSvg = ({
    id
  }: {
    id:bigint
  }) => {
    const { data:NFTwords } = useContractRead({
        ...contractConfig,
        functionName: 'getNftWords',
        args: [id],
        watch: true,
    });
    const word:string = NFTwords as string;
    return(
        <svg width="350" height="350" xmlns="http://www.w3.org/2000/svg"><rect x="0" y="0" height="350" width="350" fill="black"/>  <text x="0" y="15" fill="white">{word}</text></svg>
    )
}

export const MyNftPage = ()=>{
    const account = getAccount()

    const { data:OwnedNFTs } = useContractRead({
        ...contractConfig,
        functionName: 'getOwnedNft',
        args: [account.address],
        watch: true,
    });
    const NFTList:bigint[] = OwnedNFTs as bigint[];
    const handleDebug= ()=>{
        console.log(NFTList);
    }
    return(
        <Box w={'max-content'} borderWidth={100} borderColor={'transparent'}>
            <Stack  spacing={5}>
                {NFTList?(
                    NFTList.map((NFTID)=>{
                        return(
                                <NftSvg id={NFTID} key = {NFTID}/>
                        )
                })
            ):(<Skeleton w="full" h={{ base: 6, sm: 100 }} />)}
            </Stack>
        </Box>
        )
}