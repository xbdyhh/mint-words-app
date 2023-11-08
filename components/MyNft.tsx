import {
    Box,
    Grid,
    GridItem,
    Skeleton
} from '@chakra-ui/react';
import { useState,useEffect } from 'react';
import Abi from "../config/abi";
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
    const[word, setword]  = useState(NFTwords as string);
    useEffect(() => {
        setword(NFTwords as string);
      }, [NFTwords])

    return(
        <svg  width="350" height="350" xmlns="http://www.w3.org/2000/svg"><rect x="0" y="0" height="350" width="350" fill="black"/>  <text x="0" y="15" fill="white">{word}</text></svg>
    )
}

const MyNftPage = ()=>{
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
        <Box >
            <Grid  templateColumns='repeat(4, 1fr)' gap={6} >
                {NFTList?(
                    NFTList.map((NFTID)=>{
                        return(
                                <GridItem key = {NFTID}><NftSvg id={NFTID} key = {NFTID}/></GridItem>
                        )
                })
            ):(<Skeleton w="full" h={{ base: 6, sm: 100 }} />)}
            </Grid>
        </Box>
        )
}
export default MyNftPage;