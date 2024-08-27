'use client'
import { createWeb3Modal, defaultConfig } from '@web3modal/ethers5/react'

// 1. Get projectId
const projectId = '48d44678afcba02c797f5d30369c89a7'

// // 2. Set chains
const mainnet = {
  chainId: 1,
  name: 'Ethereum',
  currency: 'ETH',
  explorerUrl: 'https://etherscan.io',
  rpcUrl: `${process.env.NEXT_PUBLIC_RPC_URL_ETH}`
}

const Binance = {
  chainId: 56,
  name: 'Binance',
  currency: 'BNB',
  explorerUrl: 'https://bscscan.com',
  rpcUrl: `${process.env.NEXT_PUBLIC_RPC_URL_BNB}`
}

// const BNBSmartChainTestnet = {
//   chainId: 97,
//   name: 'Binance',
//   currency: 'BNB',
//   explorerUrl: 'https://testnet.bscscan.com',
//   rpcUrl: `${process.env.NEXT_PUBLIC_RPC_URL_TBNB}`
// }


// const sepoiliaTestnet = {
//   chainId: 11155111,
//   name: 'Sepolia',
//   currency: 'ETH',
//   explorerUrl: 'https://sepolia.etherscan.io',
//   rpcUrl: `${process.env.NEXT_PUBLIC_RPC_URL_ETH}`
// }

// // 

// 3. Create modal
const metadata = {
  name: 'LNBG Presale',
  description: 'This is LNBG Presale',
  url: 'https://www.lnbglondon.com/', // origin must match your domain & subdomain
  icons: ['https://www.lnbglondon.com/']
}

// 4. Create Ethers config
const ethersConfig = defaultConfig({
  /*Required*/
  metadata,
  /*Optional*/
  enableEIP6963: true, // true by default
  enableInjected: true, // true by default
  enableCoinbase: true, // true by default
  // rpcUrl: '...', // used for the Coinbase SDK
  defaultChainId: 97, // used for the Coinbase SDK
})


createWeb3Modal({
  ethersConfig,
  chains: [Binance , mainnet],
  projectId,
  enableAnalytics: true, // Optional - defaults to your Cloud configuration,
  enableOnramp: true // Optional - false as default
})


export function Web3Modal({ children }) {
  return children
}