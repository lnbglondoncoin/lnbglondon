"use client";
import React, { useState, createContext, useEffect } from "react";
import { ethers } from "ethers";

import lnbgPresaleContractAddress from "../../contractsData/LngbPreSaleContract-address.json";
import lnbgPresaleContract from "../../contractsData/LngbPreSaleContract.json";

import USDTContractAddress from "../../contractsData/USDTToken-address.json";
import USDTContract from "../../contractsData/USDCToken.json";

import USDCContractAddress from "../../contractsData/USDCToken-address.json";
import USDCContract from "../../contractsData/USDCToken.json";

import lnbgCoinAddress from "../../contractsData/LnbgLondonCoin-address.json";
import lnbgCoin from "../../contractsData/LnbgLondonCoin.json";

import {
  useSwitchNetwork,
  useWeb3ModalAccount,
  useWeb3ModalProvider,
} from "@web3modal/ethers5/react";
import { ToastContainer, toast } from "react-toastify";
import { formatUnits } from "ethers/lib/utils";
import Loader from "@/components/Loader";
import apis from "../Services";

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

  const [userDatabaseData, setUserDatabaseData] = useState({
    points: 0,
    referral_code: "",
    steps_points: 0,
    tokens_earned: 0,
    wallet_address: "",
  });

  // FOR PRESALE CARD LOADER WHILE PURCHASING STUFF
  const [purchaseLoader, setPurchaseLoader] = useState(false);

  // TRANSACTION SUCCESS DIALOGUE BOX
  const [transactionSuccess, setTransactionSuccess] = useState(false);
  const [transactionHash, setTransactionHash] = useState("");

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
    tokensInContract: 0,
  });

  ////////////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////////

  const GetValues = async () => {
    try {
      setloader(true);

      const sellPrice = await getProviderPresaleContract().salePrice();
      const raisedAmount = await getProviderPresaleContract().raisedAmount();
      const isPresale = await getProviderPresaleContract().isSale();

      setContractData((prevState) => ({
        ...prevState,
        raisedAmount: formatUnits(raisedAmount, 18)?.toString(),
        tokenPrice: sellPrice?.toString(),
        isPreSaleActive: isPresale,
      }));
      setloader(false);
      if (isConnected) {
        const ethersProvider = new ethers.providers.Web3Provider(
          walletProvider,
        );
        const signer = ethersProvider.getSigner();
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

        const lnbgContracts = new ethers.Contract(
          lnbgCoinAddress.address,
          lnbgCoin.abi,
          signer,
        );

        const balance = await ethersProvider.getBalance(address);

        const USDTBalance = await USDTContracts.balanceOf(address);

        const USDCBalance = await USDCContracts.balanceOf(address);

        const lnbgBalance = await lnbgContracts.balanceOf(address);

        const TokensInContract = await lnbgContracts.balanceOf(
          lnbgPresaleContractAddress.address,
        );

        setContractData((prevState) => ({
          ...prevState,
          ethBalance: formatUnits(balance, 18)?.toString(),
          usdcBalance: formatUnits(USDCBalance, 18)?.toString(),
          usdtBalance: formatUnits(USDTBalance, 18)?.toString(),
          lnbgBalance: formatUnits(lnbgBalance, 18)?.toString(),
          tokensInContract: formatUnits(TokensInContract, 18)?.toString(),
        }));
      }
      setloader(false);
    } catch (error) {
      setloader(false);
      console.log("Fourth");
      console.log(error);
      setloader(false);
      // toast.error(`${JSON.stringify(error.reason)}`);
    }
  };

  const addTokenToMetamask = async () => {
    // console.log("testttttttttttttttttttt");
    // const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

    // if (typeof window.ethereum !== "undefined") {
    //   console.log("testttttttttttttttttttt2");
    try {
      if (!isConnected) {
        return toast.error("Please Connect Your Wallet."), setloader(false);
      }

      const provider = new ethers.providers.Web3Provider(walletProvider);
      const wasAdded = await provider.provider.request({
        method: "wallet_watchAsset",
        params: {
          type: "ERC20",
          options: {
            address: "0xdB6675D9740f6401DcD0BB3092fa4dc88c2a0F66", // Token address
            symbol: "$LLC", // Token symbol
            decimals: 18, // Token decimals
            image:
              "https://lnbglondon.vercel.app/_next/image?url=%2Flogo.png&w=48&q=75", // Token image URL
          },
        },
      });

      // const wasAdded = await window.ethereum.request({
      //   method: "wallet_watchAsset",
      //   params: {
      //     type: "ERC20",
      //     options: {
      //       address: "0xdB6675D9740f6401DcD0BB3092fa4dc88c2a0F66", // Token address
      //       symbol: "$LLC", // Token symbol
      //       decimals: 18, // Token decimals
      //       image: "https://lnbglondon.vercel.app/_next/image?url=%2Flogo.png&w=48&q=75", // Token image URL
      //     },
      //   },
      // });

      if (wasAdded) {
        toast.success("Token successfully added to Metamask!");
      } else {
        toast.error("Failed to add the token.");
      }
    } catch (error) {
      toast.error("Failed to add token to Metamask. Please try again later.");
      console.error("Failed to add token to Metamask: ", error);
    }
    // } else {
    //   if (isMobile) {
    //     console.log("testttttttttttttttttttt9");
    //     // Metamask app is not installed, redirect to installation page
    //     window.open("https://metamask.app.link/dapp/https://www.lnbglondon.com/");
    //   } else {
    //     console.log("testttttttttttttttttttt10");
    //     // if no window.ethereum and no window.web3, then MetaMask or Trust Wallet is not installed
    //     alert("MetaMask or Trust Wallet is not installed. Please consider installing one of them.");
    //   }
    // }
  };

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

  const copyToClipboardReferral = () => {
    const tokenAddress = `https://www.lnbglondon.com/en?ref=${address}`; // Your token address
    navigator.clipboard
      .writeText(tokenAddress)
      .then(() => {
        toast.success("Referral address copied to clipboard!");
      })
      .catch((error) => {
        console.error("Failed to copy: ", error);
      });
  };

  const copyToClipboardAddress = () => {
    const tokenAddress = address; // Your token address
    navigator.clipboard
      .writeText(tokenAddress)
      .then(() => {
        toast.success("User address copied to clipboard!");
      })
      .catch((error) => {
        console.error("Failed to copy: ", error);
      });
  };

  const BuyWithUSDTandUSDC = async (payAmountInUSDT, tokens, isUSDT) => {
    if (!isConnected) {
      return (
        toast.error("Please Connect Your Wallet."), setPurchaseLoader(false)
      );
    }
    try {
      let tokensss = ethers.utils.formatEther(tokens?.toString());

      if (+tokensss?.toString() < 10) {
        return toast.error("Please buy minimum One (1) Dollar");
      } else if (+tokensss?.toString() > 30000) {
        return toast.error("Please buy maximum One Thousand (3000) Dollar");
      }

      setPurchaseLoader(true);
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
        setTransactionHash(buying?.hash);
        setTransactionSuccess(true);
      } else {
        let tokenApprove = await USDCContracts.approve(
          lnbgPresaleContractAddress.address,
          amountInWei,
        );
        await tokenApprove.wait();

        const buying = await presaleContract.buyWithUSDT(tokens, isUSDT);
        buying.wait();
        setTransactionHash(buying?.hash);
        setTransactionSuccess(true);
      }

      await GetValues();
      setPurchaseLoader(false);
    } catch (error) {
      setPurchaseLoader(false);
      setTransactionSuccess(false);
      setTransactionHash("");
      toast.error(`${JSON.stringify(error.reason)}`);
      console.log(error);
    }
  };

  const BuyWithETH = async (tokens, amountInEthPayable) => {
    if (!isConnected) {
      return (
        toast.error("Please Connect Your Wallet."), setPurchaseLoader(false)
      );
    }
    try {
      let tokensss = ethers.utils.formatEther(tokens?.toString());

      if (+tokensss < 10) {
        return toast.error("Please buy minimum One (1) Dollar");
      } else if (+tokensss > 30000) {
        return toast.error("Please buy maximum One Thousand (1000) Dollar");
      }

      setPurchaseLoader(true);

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
      console.log(buying, "buyingbuyingbuyingbuying");
      setTransactionHash(buying?.hash);
      setTransactionSuccess(true);
      await GetValues();
      setPurchaseLoader(false);
    } catch (error) {
      setPurchaseLoader(false);
      setTransactionSuccess(false);
      setTransactionHash("");
      console.log(error);
      if (error?.reason) {
        // If error.reason is defined, show it in the toast
        toast.error(`${JSON.stringify(error.reason)}`);
      } else {
        // If error.reason is undefined, show a custom message
        const shortErrorMessage =
          error?.data?.message?.split(":")[0] + ": insufficient funds";
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

  useEffect(() => {
    const main = async () => {
      try {
        if (isConnected) {
          console.log("Testttttttttttttttttttttt");
          await apis.connectedUser(address);
        }
      } catch (error) {
        console.log(error);
      }
    };
    main();
  }, [address]);

  return (
    <>
      <Store.Provider
        value={{
          loader,
          setloader,
          purchaseLoader,
          setPurchaseLoader,
          transactionSuccess,
          setTransactionSuccess,
          copyToClipboardAddress,
          contractData,
          transactionHash,
          addTokenToMetamask,
          copyToClipboard,
          copyToClipboardReferral,
          GetValues,
          networkChange,
          getProviderPresaleContract,
          BuyWithUSDTandUSDC,
          BuyWithETH,
          presaleStart,
          presaleStop,
          userDatabaseData,
          setUserDatabaseData,
        }}
      >
        {children}
      </Store.Provider>
    </>
  );
};
