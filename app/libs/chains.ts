// chain id
export const ChainIDs = {
  ETHEREUM_MAINNET: 1,
  SMART_CHAIN: 56,
  OKEX_CHAIN: 66,
  POLYGON: 137,
  FANTOM_OPERA: 250,
};

// chain info
export const Chains = {
  [ChainIDs.ETHEREUM_MAINNET]: {
    NETWORK_NAME: 'Ethereum Mainnet',
    RPC_URL: ['https://mainnet.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161'],
    CHAIN_ID: ChainIDs.ETHEREUM_MAINNET,
    SYMBOL: 'ETH',
    EXPLORER: 'https://etherscan.io',
  },
  [ChainIDs.SMART_CHAIN]: {
    NETWORK_NAME: 'Smart Chain',
    RPC_URL: ['https://bsc-dataseed.binance.org'],
    CHAIN_ID: ChainIDs.SMART_CHAIN,
    SYMBOL: 'BNB',
    EXPLORER: 'https://bscscan.com',
  },
  [ChainIDs.OKEX_CHAIN]: {
    NETWORK_NAME: 'OKExChain Mainnet',
    RPC_URL: ['https://exchainrpc.okex.org'],
    CHAIN_ID: ChainIDs.OKEX_CHAIN,
    SYMBOL: 'OKT',
    EXPLORER: 'https://www.oklink.com/okexchain',
  },
  [ChainIDs.POLYGON]: {
    NETWORK_NAME: 'Polygon',
    RPC_URL: [
      'https://polygon-rpc.com',
      'https://rpc-mainnet.matic.network',
      'https://rpc-mainnet.maticvigil.com',
      'https://rpc-mainnet.matic.quiknode.pro',
    ],
    CHAIN_ID: ChainIDs.POLYGON,
    SYMBOL: 'MATIC',
    EXPLORER: 'https://polygonscan.com',
  },
  [ChainIDs.FANTOM_OPERA]: {
    NETWORK_NAME: 'Fantom Opera',
    RPC_URL: ['https://rpc.ankr.com/fantom'],
    CHAIN_ID: ChainIDs.FANTOM_OPERA,
    SYMBOL: 'FTM',
    EXPLORER: 'https://ftmscan.com',
  },
};
