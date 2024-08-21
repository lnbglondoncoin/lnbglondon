"use client";
import React, { useState,createContext } from "react";
import { ethers } from "ethers";

import lnbgPresaleContractAddress from "../../contractsData/LngbPreSaleContract-address.json";
import lnbgPresaleContract from "../../contractsData/LngbPreSaleContract.json";

import USDTContractAddress from "../../contractsData/USDTToken-address.json";
import USDTContract from "../../contractsData/USDCToken.json";

import USDCContractAddress from "../../contractsData/USDCToken-address.json";
import USDCContract from "../../contractsData/USDCToken.json";

import lnbgCoinAddress from "../../contractsData/LnbgLondonCoin-address.json";
import lnbgCoin from "../../contractsData/LnbgLondonCoin-address.json";

import {
  useSwitchNetwork,
  useWeb3Modal,
  useWeb3ModalAccount,
  useWeb3ModalProvider,
} from "@web3modal/ethers5/react";
import { ToastContainer, toast } from "react-toastify";
import { formatUnits } from "ethers/lib/utils";

// const getProviderMasterContract = () => {
//   const providers = process.env.REACT_MAIN_RPC;
//   const provider = new ethers.providers.JsonRpcProvider(providers); //"http://localhost:8545/"
//   const masterContract = new ethers.Contract(
//     lnbgMasterContractAddress.address,
//     lnbgMasterContract.abi,
//     provider,
//   );
//   return masterContract;
// };

const getProviderPresaleContract = () => {
  const providers = process.env.NEXT_PUBLIC_RPC_URL_BNB;
  const provider = new ethers.providers.JsonRpcProvider(providers); //"http://localhost:8545/"
  const presaleContract = new ethers.Contract(
    lnbgPresaleContractAddress.address,
    lnbgPresaleContract.abi,
    provider,
  );
  return presaleContract;
};

export const Store = createContext();

export const StoreProvider = ({ children }) => {
  const { address, chainId, isConnected } = useWeb3ModalAccount();
  const { walletProvider } = useWeb3ModalProvider();

  const [loader, setloader] = useState(false);
  console.log("LOADER", loader)

  const [contractData, setContractData] = useState({
    ethBalance: 0,
    usdcBalance: 0,
    usdtBalance: 0,
    lnbgBalance: 0,
    raisedAmount: 0,
    tokenPrice: 0,
    totalSupply: 7000000000,
    isPreSaleActive: false,
    stakedTokens: 0,
    startTime: 0,
    duration: 0,
    rewardEarned: 0,
    ClaimedReward: 0,
    tokensInContract:0,
  });

  const [masterContractData, setMasterContractData] = useState({
    totalStakers: 0,
    totalStakeAmount: 0,
    totalRewards: 0,
    distributed: 0,
  });

  ////////////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////////

  const GetValues = async () => {
    try {
      setloader(true);

      console.log(lnbgPresaleContractAddress.address,"lnbgPresaleContractAddress.address");

      const sellPrice = await getProviderPresaleContract().salePrice();
      const raisedAmount = await getProviderPresaleContract().raisedAmount();
      const isPresale = await getProviderPresaleContract().isSale();

      setContractData((prevState) => ({
        ...prevState,
        raisedAmount: formatUnits(raisedAmount, 18)?.toString(),
        tokenPrice: sellPrice?.toString(),
        isPreSaleActive: isPresale,
      }));
      console.log(isConnected,"isConnectedisConnected");
      if (isConnected) {
        console.log("first");
        const ethersProvider = new ethers.providers.Web3Provider(walletProvider);
        const signer = ethersProvider.getSigner();
        const USDTContracts = new ethers.Contract(
          USDTContractAddress.address,
          USDTContract.abi,
          signer,
        );
        console.log("second");
        const USDCContracts = new ethers.Contract(
          USDCContractAddress.address,
          USDCContract.abi,
          signer,
        );
        console.log("third");
        const lnbgContracts = new ethers.Contract(
          lnbgCoinAddress.address,
          lnbgCoin.abi,
          signer,
        );
        console.log("fifth");
        const balance = await ethersProvider.getBalance(address);
        console.log("sixth");
        const USDTBalance = await USDTContracts.balanceOf(address);
        console.log("seventh");
        const USDCBalance = await USDCContracts.balanceOf(address);
        console.log("eight");
        const lnbgBalance = await lnbgContracts.balanceOf(address);
        console.log("nine");
        // const TokensInContract = await lnbgContracts.balanceOf(lnbgPresaleContractAddress.address);
        // console.log(TokensInContract,"TokensInContractTokensInContract");
        setContractData((prevState) => ({
          ...prevState,
          ethBalance: formatUnits(balance, 18)?.toString(),
          usdcBalance: formatUnits(USDTBalance, 18)?.toString(),
          usdtBalance: formatUnits(USDCBalance, 18)?.toString(),
          lnbgBalance: formatUnits(lnbgBalance, 18)?.toString()
          // tokensInContract: formatUnits(TokensInContract, 18)?.toString(),
        }));
      }
      setloader(false);
    } catch (error) {
      setloader(false);
      console.log("Fourth");
      console.log(error);
      // toast.error(`${JSON.stringify(error.reason)}`);
    }
  };

  const addTokenToMetamask = async () => {
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );
  
    console.log("isMobile:", isMobile);
  
    if (typeof window.ethereum !== "undefined") {
      try {
        if (!isConnected) {
          setloader(false);
          return toast.error("Please Connect Your Wallet.");
        }
        
        const wasAdded = await window.ethereum.request({
          method: "wallet_watchAsset",
          params: {
            type: "ERC20",
            options: {
              address: "0xdB6675D9740f6401DcD0BB3092fa4dc88c2a0F66",
              symbol: "$LLC",
              decimals: 18,
              image: "https://lnbglondon.vercel.app/_next/image?url=%2Flogo.png&w=48&q=75",
            },
          },
        });
  
        console.log("wasAdded:", wasAdded);
  
        if (wasAdded) {
          toast.success("Token successfully added to Metamask!");
        } else {
          toast.error("Failed to add the token.");
        }
      } catch (error) {
        console.error("Failed to add token to Metamask: ", error);
        toast.error("Failed to add token to Metamask. Please try again later.");
      }
    } else {
      if (isMobile) {
        window.open("https://metamask.app.link/dapp/https://www.lnbglondon.com/");
      } else {
        alert(
          "MetaMask or Trust Wallet is not installed. Please consider installing one of them."
        );
      }
    }
  };

  
  // const addTokenToMetamask = async () => {
  //   const isMobile =
  //     /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
  //       navigator.userAgent,
  //     );

  //   if (typeof window.ethereum !== "undefined") {
  //     try {
  //       if (!isConnected) {
  //         return toast.error("Please Connect Your Wallet."), setloader(false);
  //       }
  //       const wasAdded = await window.ethereum.request({
  //         method: "wallet_watchAsset",
  //         params: {
  //           type: "ERC20",
  //           options: {
  //             address: "0xdB6675D9740f6401DcD0BB3092fa4dc88c2a0F66", // Token address
  //             symbol: "$LLC", // Token symbol
  //             decimals: 18, // Token decimals
  //             image: "https://lnbglondon.vercel.app/_next/image?url=%2Flogo.png&w=48&q=75", // Token image URL
  //           },
  //         },
  //       });

  //       if (wasAdded) {
  //         toast.success("Token successfully added to Metamask!");
  //       } else {
  //         toast.error("Failed to add the token.");
  //       }
  //     } catch (error) {
  //       toast.error("Failed to add token to Metamask. Please try again later.");
  //       console.error("Failed to add token to Metamask: ", error);
  //     }
  //   } else {
  //     if (isMobile) {
  //       // Metamask app is not installed, redirect to installation page
  //       window.open("https://metamask.app.link/dapp/lnbgcoin.org");
  //     } else {
  //       // if no window.ethereum and no window.web3, then MetaMask or Trust Wallet is not installed
  //       alert(
  //         "MetaMask or Trust Wallet is not installed. Please consider installing one of them.",
  //       );
  //     }
  //   }
  // };

  const copyToClipboard = () => {
    const tokenAddress = lnbgCoinAddress?.address; // Your token address
    navigator.clipboard
      .writeText(tokenAddress)
      .then(() => {
        toast.success("Token address copied to clipboard!");
      })
      .catch((error) => {
        console.error("Failed to copy: ", error);
      });
  };

  const BuyWithUSDTandUSDC = async (payAmountInUSDT, tokens, isUSDT) => {
    if (!isConnected) {
      return toast.error("Please Connect Your Wallet."), setloader(false);
    }
    try {
      let tokensss = ethers.utils.formatEther(tokens?.toString());
      console.log(+tokensss?.toString(), "tokenssstokenssstokensss");
      if (+tokensss?.toString() < 10) {
        return toast.error("Please buy minimum One (1) Dollar");
      } else if (+tokensss?.toString() > 30000) {
        return toast.error("Please buy maximum One Thousand (3000) Dollar");
      }
      console.log(tokens, "tokenstokenstokenstokenstokens");
      setloader(true);
      const provider = new ethers.providers.Web3Provider(walletProvider);
      const signer = provider.getSigner();
      const presaleContract = new ethers.Contract(
        lnbgPresaleContractAddress.address,
        lnbgPresaleContract.abi,
        signer,
      );
      const USDTContracts = new ethers.Contract(
        USDTContractAddress.address,
        USDTContract.abi,
        signer,
      );

      const USDCContracts = new ethers.Contract(
        USDCContractAddress.address,
        USDCContract.abi,
        signer,
      );

      let amountInWei = ethers.utils.parseEther(payAmountInUSDT?.toString());
      if (isUSDT) {
        let tokenApprove = await USDTContracts.approve(
          lnbgPresaleContractAddress.address,
          amountInWei,
        );
        await tokenApprove.wait();

        const buying = await presaleContract.buyWithUSDT(tokens, isUSDT);
        buying.wait();
      } else {
        let tokenApprove = await USDCContracts.approve(
          lnbgPresaleContractAddress.address,
          amountInWei,
        );
        await tokenApprove.wait();

        const buying = await presaleContract.buyWithUSDT(tokens, isUSDT);
        buying.wait();
      }

      await GetValues();
      setloader(false);
    } catch (error) {
      setloader(false);
      toast.error(`${JSON.stringify(error.reason)}`);
      console.log(error);
    }
  };

  const BuyWithETH = async (tokens, amountInEthPayable) => {
    if (!isConnected) {
      return toast.error("Please Connect Your Wallet."), setloader(false);
    }
    try {
      let tokensss = ethers.utils.formatEther(tokens?.toString());
      console.log(tokensss?.toString(), "tokenssstokenssstokensss");

      if (tokensss < 10) {
        return toast.error("Please buy minimum One (1) Dollar");
      } else if (tokensss > 30000) {
        return toast.error("Please buy maximum One Thousand (1000) Dollar");
      }

      console.log(tokens?.toString(), "tokens?.toString()tokens?.toString()");
      console.log(
        amountInEthPayable?.toString(),
        "tokens?.toString()tokens?.toString()",
      );
      setloader(true);

      const provider = new ethers.providers.Web3Provider(walletProvider);
      const signer = provider.getSigner();
      const presaleContract = new ethers.Contract(
        lnbgPresaleContractAddress.address,
        lnbgPresaleContract.abi,
        signer,
      );

      let amountInWei = ethers.utils.parseEther(amountInEthPayable?.toString());
      const buying = await presaleContract.buyWithBNB(tokens?.toString(), {
        value: amountInWei?.toString(),
      });
      buying.wait();
      await GetValues();
      setloader(false);
    } catch (error) {
      setloader(false);
      console.log(error);
      if (error?.reason) {
        // If error.reason is defined, show it in the toast
        toast.error(`${JSON.stringify(error.reason)}`);
    } else {
        // If error.reason is undefined, show a custom message
        const shortErrorMessage = error?.data?.message?.split(':')[0] + ": insufficient funds";
        toast.error(shortErrorMessage || "An unknown error occurred.");
    }
      // toast.error(`${JSON.stringify(error.reason)}`);
      // const shortErrorMessage = error?.data?.message.split(':')[0] + ": insufficient funds";
      // toast.error(`${JSON.stringify(shortErrorMessage)}`);
      // console.log(error?.data?.message,"error?.data?.messageerror?.data?.message");
    }
  };

  const presaleStart = async () => {
    try {
      setloader(true);

      const provider = new ethers.providers.Web3Provider(walletProvider);
      const signer = provider.getSigner();
      const presaleContract = new ethers.Contract(
        lnbgPresaleContractAddress.address,
        lnbgPresaleContract.abi,
        signer,
      );

      const start = await presaleContract.startTheSale();
      start.wait();

      await GetValues();
      setloader(false);
    } catch (error) {
      setloader(false);
      console.log(error);
      toast.error(`${JSON.stringify(error.reason)}`);
    }
  };

  const presaleStop = async () => {
    if (!isConnected) {
      return toast.error("Please Connect Your Wallet."), setloader(false);
    }
    try {
      setloader(true);
      const provider = new ethers.providers.Web3Provider(walletProvider);
      const signer = provider.getSigner();
      const presaleContract = new ethers.Contract(
        lnbgPresaleContractAddress.address,
        lnbgPresaleContract.abi,
        signer,
      );

      const stop = await presaleContract.stopTheSale();
      stop.wait();

      await GetValues();
      setloader(false);
    } catch (error) {
      setloader(false);
      console.log(error);
      toast.error(`${JSON.stringify(error.reason)}`);
    }
  };

  const networkChange = async () => {
    let chainid = process.env.NEXT_PUBLIC_CHAIN_ID;

    if (isConnected && chainId?.toString() !== chainid?.toString()) {
      console.log(chainid, chainId, "chainidchainid");
      useSwitchNetwork(Number(chainid));
      return;
    }
  };

  return (
    <>
      <Store.Provider
        value={{
          loader,
          setloader,
          contractData,
          addTokenToMetamask,
          copyToClipboard,
          GetValues,
          networkChange,
          getProviderPresaleContract,
          BuyWithUSDTandUSDC,
          BuyWithETH,
          presaleStart,
          presaleStop
        }}
      >
        {children}
      </Store.Provider>
    </>
  );
};
