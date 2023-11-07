import '../styles/globals.css';
import {panxinyang} from '../config/chians';
import '@rainbow-me/rainbowkit/styles.css';
import { connectorsForWallets, RainbowKitProvider } from '@rainbow-me/rainbowkit';
import type { AppProps } from 'next/app';
import { configureChains, createConfig, WagmiConfig } from 'wagmi';
import { publicProvider } from 'wagmi/providers/public';
import {injectedWallet} from '@rainbow-me/rainbowkit/wallets';
import { ChakraProvider } from '@chakra-ui/react';
import {defaultTheme}from '../config/theme';



const { chains, publicClient, webSocketPublicClient } = configureChains(
  [
    panxinyang,
  ],
  [publicProvider()]
);

const connectors = connectorsForWallets([
  {
    groupName: 'Recommended',
    wallets: [
      injectedWallet({ chains }),
    ],
  },
]);

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
  webSocketPublicClient,
});

function MyApp({ Component, pageProps }: AppProps) {
  
  return (
    <ChakraProvider theme={defaultTheme}>

    <WagmiConfig config={wagmiConfig}>
      <RainbowKitProvider chains={chains} modalSize="compact" >
        <Component {...pageProps} />
      </RainbowKitProvider>
    </WagmiConfig>
    </ChakraProvider>
  );
}

export default MyApp;
