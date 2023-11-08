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
    etherscan: { name: 'SnowTrace', url: 'https://snowtrace.io' },
    default: { name: 'SnowTrace', url: 'https://snowtrace.io' },
  },
} as const satisfies Chain
