import { Chain } from 'wagmi'

export const panxinyang = {
  id: 1734636,
  name: 'panxinyang',
  network: 'panxinyang',
  nativeCurrency: {
    decimals: 18,
    name: 'panxinyang',
    symbol: 'PXY',
  },
  rpcUrls: {
    public: { http: ['https://froopyland.dymension.xyz/4/panxinyang_1734636-1/evmrpc'] },
    default: { http: ['https://froopyland.dymension.xyz/4/panxinyang_1734636-1/evmrpc'] },
  },
  blockExplorers: {
    etherscan: { name: 'N/A', url: '' },
    default: { name: 'N/A', url: '' },
  },
  contracts: {
    mintwords: {
      address: '0xd0eF18c28C0CE7FeD71D72A0BD2ED5960cD51f9A',
      blockCreated: 2580,
    },
  },
} as const satisfies Chain
