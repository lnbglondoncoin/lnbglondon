"use client";
import React, { useState, createContext, useEffect } from "react";
import { ethers } from "ethers";

/////////////////////////////////////////// BINANCE CHAIN PRESALE ////////////////////////////////////

import lnbgPresaleContractAddress from "../../contractsData/LngbPreSaleContract-address.json";
import lnbgPresaleContract from "../../contractsData/LngbPreSaleContract.json";
import USDTContractAddress from "../../contractsData/USDTToken-address.json";
import USDTContract from "../../contractsData/USDCToken.json";
import USDCContractAddress from "../../contractsData/USDCToken-address.json";
import USDCContract from "../../contractsData/USDCToken.json";
import lnbgCoinAddress from "../../contractsData/LnbgLondonCoin-address.json";
import lnbgCoin from "../../contractsData/LnbgLondonCoin.json";

/////////////////////////////////////////// ETHEREUM CHAIN PRESALE ////////////////////////////////////

import USDTContractAbis from "../../contractsData/USDCToken.json";
import USDTTokenEthereumAddress from "../../contractsData/USDTTokenEthereum-address.json";
import USDCTokenEthereumAddress from "../../contractsData/USDCTokenEthereum-address.json";
import WrapedBridgeLnbgLondonCoinEthereumAddress from "../../contractsData/WrapedBridgeLnbgLondonCoinEthereum-address.json";
import WrapedBridgeLnbgLondonCoinEthereumAbis from "../../contractsData/WrapedBridgeLnbgLondonCoinEthereum.json";
import WrapedLnbgLondonCoinEthereumAddress from "../../contractsData/WrapedLnbgLondonCoinEthereum-address.json";
import WrapedLnbgLondonCoinEthereumAbis from "../../contractsData/WrapedLnbgLondonCoinEthereum.json";

///////////////////////////////////// ----------**************----------------- //////////////////////////

import {
  useSwitchNetwork,
  useWeb3ModalAccount,
  useWeb3ModalProvider,
} from "@web3modal/ethers5/react";
import { ToastContainer, toast } from "react-toastify";
import { formatUnits } from "ethers/lib/utils";
import Loader from "@/components/Loader";
import apis from "../Services";
import { sendGAEvent, sendGTMEvent } from "@next/third-parties/google";

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

const getProviderBridgePresale = () => {
  const providersss = process.env.NEXT_PUBLIC_RPC_URL_ETH;
  const provider = new ethers.providers.JsonRpcProvider(providersss); //"http://localhost:8545/"
  const presaleContract = new ethers.Contract(
    WrapedBridgeLnbgLondonCoinEthereumAddress.address,
    WrapedBridgeLnbgLondonCoinEthereumAbis.abi,
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
    referral_code: "",
    referral_reward: 0,
    steps_points: 0,
    tokens_earned: 0,
    wallet_address: "",
  });

  // FOR PRESALE CARD LOADER WHILE PURCHASING STUFF
  const [purchaseLoader, setPurchaseLoader] = useState(false);

  // TRANSACTION SUCCESS DIALOGUE BOX
  const [transactionSuccess, setTransactionSuccess] = useState(false);
  const [transactionHash, setTransactionHash] = useState("");
  const [transactionHashID, setTransactionHashID] = useState("");

  const [contractData, setContractData] = useState({
    ethBalance: 0,
    usdcBalance: 0,
    usdtBalance: 0,
    lnbgBalance: 0,
    raisedAmount: 0,
    tokenPrice: "51000000000000000",
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

      const raisedAmount = await getProviderPresaleContract().raisedAmount();
      const raisedAmountEthereum = await getProviderBridgePresale().raisedAmount();

      ////////////////////// Smart Contract Balance Check ////////////////////////////

      const providers = process.env.NEXT_PUBLIC_RPC_URL_BNB;
      const provider = new ethers.providers.JsonRpcProvider(providers);
      const lnbgContracts = new ethers.Contract(
        lnbgCoinAddress.address,
        lnbgCoin.abi,
        provider,
      );
      const TokensInContract = await lnbgContracts.balanceOf(
        lnbgPresaleContractAddress.address,
      );

      console.log(
        raisedAmount?.toString(),
        "raisedAmountraisedAmountraisedAmountraisedAmount",
      );
      console.log(
        TokensInContract?.toString(),
        "TokensInContractTokensInContractTokensInContract",
      );

      let totalTokens = Number(+TokensInContract / 10**18 + 83754477.942)?.toFixed(2);

      console.log(totalTokens, "totalTokenstotalTokens");

      setContractData((prevState) => ({
        ...prevState,
        raisedAmount: 0,
        tokensInContract: 0,
      }));

      setContractData((prevState) => ({
        ...prevState,
        raisedAmount:
          2784624 +
          (+formatUnits(raisedAmount, 18)?.toString() +
            +formatUnits(raisedAmountEthereum, 6)?.toString()), //TODO:Test
        tokensInContract: totalTokens,
      }));

      if (chainId === 56) {
        const sellPrice = await getProviderPresaleContract().salePrice();
        setContractData((prevState) => ({
          ...prevState,
          tokenPrice: sellPrice?.toString(),
        }));
      }

      const isPresale = await getProviderPresaleContract().isSale();

      setContractData((prevState) => ({
        ...prevState,
        // raisedAmount: formatUnits(raisedAmount, 18)?.toString(),
        isPreSaleActive: isPresale,
      }));

      setloader(false);
      if (isConnected && chainId === 56) {
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

        setContractData((prevState) => ({
          ...prevState,
          ethBalance: formatUnits(balance, 18)?.toString(),
          usdcBalance: formatUnits(USDCBalance, 18)?.toString(),
          usdtBalance: formatUnits(USDTBalance, 18)?.toString(),
          lnbgBalance: formatUnits(lnbgBalance, 18)?.toString(),
        }));
      }
      setloader(false);
    } catch (error) {
      setloader(false);
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
      console.log(tokensss, "tokenssstokensss will buy");

      if (+tokensss?.toString() < 33) {
        return toast.error("Please buy minimum One (1) Dollar");
      } else if (+tokensss?.toString() > 100000) {
        return toast.error("Please buy maximum Three Thousands (3000) Dollars");
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

      console.log(
        payAmountInUSDT?.toString(),
        "payAmountInUSDT?.toString()payAmountInUSDT?.toString()",
      );

      let amountInWei = ethers.utils.parseEther(payAmountInUSDT?.toString());

      console.log(
        amountInWei?.toString(),
        "payAmountInUSDT?.toString()payAmountInUSDT?.toString()",
      );

      let amountAginstTokens =
        await getProviderPresaleContract().sellTokenInUDSTPrice(
          tokens?.toString(),
        );

      console.log(tokens?.toString(), "tokens");
      console.log(amountInWei?.toString(), "amountInWei");
      console.log(amountAginstTokens?.toString(), "amountAginstTokens");

      if (isUSDT) {
        let tokenApprove = await USDTContracts.approve(
          lnbgPresaleContractAddress.address,
          amountAginstTokens,
        );

        await tokenApprove.wait();

        const buying = await presaleContract.buyWithUSDT(tokens, isUSDT);
        buying.wait();
        const bnbLink = `https://bscscan.com/tx/${buying?.hash}`;
        setTransactionHashID(buying?.hash);
        setTransactionHash(bnbLink);
        setTransactionSuccess(true);
      } else {
        let tokenApprove = await USDCContracts.approve(
          lnbgPresaleContractAddress.address,
          amountAginstTokens,
        );

        await tokenApprove.wait();

        const buying = await presaleContract.buyWithUSDT(tokens, isUSDT);
        buying.wait();

        const bnbLink = `https://bscscan.com/tx/${buying?.hash}`;
        setTransactionHashID(buying?.hash);
        setTransactionHash(bnbLink);
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

      if (+tokensss < 33) {
        return toast.error("Please buy minimum One (1) Dollar");
      } else if (+tokensss > 100000) {
        return toast.error("Please buy maximum Three Thousands (3000) Dollars");
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
      const bnbLink = `https://bscscan.com/tx/${buying?.hash}`;
      setTransactionHashID(buying?.hash);
      setTransactionHash(bnbLink);
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
    let chainid = process.env.NEXT_PUBLIC_CHAIN_ID_ETHEREUM;
    if (isConnected && chainId?.toString() !== chainid?.toString()) {
      console.log(chainid, chainId, "chainidchainid");
      useSwitchNetwork(Number(chainid));
      return;
    }
  };

  ////////////////////////////////////////////////////////////////////////////////////
  //////////////////////////////-------  ETHEREUM -------////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////////

  const GetBridgeValues = async () => {
    try {
      setloader(true);

      const providersss = process.env.NEXT_PUBLIC_RPC_URL_ETH;
      const provider = new ethers.providers.JsonRpcProvider(providersss);
      const presaleContract = new ethers.Contract(
        WrapedBridgeLnbgLondonCoinEthereumAddress.address,
        WrapedBridgeLnbgLondonCoinEthereumAbis.abi,
        provider,
      );

      // const raisedAmount = await presaleContract.raisedAmount();

      if (chainId === 1) {
        const sellPrice = await presaleContract.salePrice();
        setContractData((prevState) => ({
          ...prevState,
          tokenPrice: sellPrice?.toString(),
        }));
      }

      //  console.log(raisedAmount?.toString(),"raisedAmountraisedAmount");

      // setContractData(prevState => ({
      //   ...prevState,
      //   raisedAmount: (+prevState.raisedAmount  +  +formatUnits(raisedAmount, 6)?.toString()) //TODO:Test
      // }));

      if (isConnected && chainId === 1) {
        //TODO: change ChainId

        const ethersProvider = new ethers.providers.Web3Provider(
          walletProvider,
        );
        const balance = await ethersProvider.getBalance(address);

        const USDTContracts = new ethers.Contract(
          USDTTokenEthereumAddress.address,
          USDTContractAbis.abi,
          ethersProvider,
        );
        const USDCContracts = new ethers.Contract(
          USDCTokenEthereumAddress.address,
          USDTContractAbis.abi,
          ethersProvider,
        );
        const LNBGContracts = new ethers.Contract(
          WrapedLnbgLondonCoinEthereumAddress.address,
          WrapedLnbgLondonCoinEthereumAbis.abi,
          ethersProvider,
        );

        console.log(balance?.toString(), "balancebalancebalancebalancebalance");

        const USDTBalance = await USDTContracts.balanceOf(address);
        const USDCBalance = await USDCContracts.balanceOf(address);
        const LNBGBalance = await LNBGContracts.balanceOf(address);

        setContractData((prevState) => ({
          ...prevState,
          ethBalance: formatUnits(balance, 18)?.toString(),
          usdcBalance: formatUnits(USDTBalance, 6)?.toString(),
          usdtBalance: formatUnits(USDCBalance, 6)?.toString(),
          lnbgBalance: formatUnits(LNBGBalance, 18)?.toString(),
        }));
      }
      setloader(false);
    } catch (error) {
      setloader(false);
      console.log("Ethereum");
      console.log(error);
    }
  };

  const BuyWithUSDTandUSDCOnEthereum = async (
    payAmountInUSDT,
    tokens,
    isUSDT,
  ) => {
    try {
      networkChange();

      let tokensss = ethers.utils.formatEther(tokens?.toString());
      console.log(+tokensss?.toString(), "tokenssstokenssstokensss");

      if (+tokensss?.toString() < 33) {
        return toast.error("Please buy minimum One (1) Dollar");
      } else if (+tokensss?.toString() > 100000) {
        return toast.error("Please buy maximum Three Thousands (3000) Dollars");
      }

      setPurchaseLoader(true);

      const ethersProvider = new ethers.providers.Web3Provider(walletProvider);
      const signer = ethersProvider.getSigner();
      const presaleContract = new ethers.Contract(
        WrapedBridgeLnbgLondonCoinEthereumAddress.address,
        WrapedBridgeLnbgLondonCoinEthereumAbis.abi,
        signer,
      );
      const USDTContracts = new ethers.Contract(
        USDTTokenEthereumAddress.address,
        USDTContractAbis.abi,
        signer,
      );
      const USDCContracts = new ethers.Contract(
        USDCTokenEthereumAddress.address,
        USDTContractAbis.abi,
        signer,
      );

      let amountInWei = +payAmountInUSDT?.toString() * 10 ** 6;
      if (isUSDT) {
        let allowance = await USDTContracts.allowance(
          address,
          WrapedBridgeLnbgLondonCoinEthereumAddress?.address,
        );

        if (+allowance?.toString() < +amountInWei?.toString()) {
          let tokenApprove = await USDTContracts.approve(
            WrapedBridgeLnbgLondonCoinEthereumAddress?.address,
            amountInWei,
          );
          await tokenApprove.wait();
        }

        const buying = await presaleContract.buyWithUSDT(
          address,
          tokens,
          isUSDT,
        );
        buying.wait();
        const ethLink = `https://etherscan.io/tx/${buying?.hash}`;
        setTransactionHashID(buying?.hash);
        setTransactionHash(ethLink);
        setTransactionSuccess(true);
      } else {
        console.log("check2");
        let allowance = await USDCContracts.allowance(
          address,
          WrapedBridgeLnbgLondonCoinEthereumAddress?.address,
        );
        console.log(+allowance?.toString(), "allowanceallowanceallowance");
        if (+allowance?.toString() < +amountInWei?.toString()) {
          console.log("check3");
          let tokenApprove = await USDCContracts.approve(
            WrapedBridgeLnbgLondonCoinEthereumAddress?.address,
            amountInWei,
          );
          await tokenApprove.wait();
        }
        console.log("check", isUSDT);
        const buying = await presaleContract.buyWithUSDT(
          address,
          tokens,
          isUSDT,
        );
        buying.wait();
        const ethLink = `https://etherscan.io/tx/${buying?.hash}`;
        setTransactionHashID(buying?.hash);
        setTransactionHash(ethLink);
        setTransactionSuccess(true);
      }

      await GetBridgeValues();
      setPurchaseLoader(false);
    } catch (error) {
      setPurchaseLoader(false);
      setTransactionHash("");
      setTransactionSuccess(false);
      toast.error(`${JSON.stringify(error.reason)}`);
      console.log(error);
    }
  };

  const BuyWithETHOnEthereum = async (tokens, amountInEthPayable) => {
    try {
      networkChange();
      let tokensss = ethers.utils.formatEther(tokens?.toString());

      if (tokensss?.toString() < 33) {
        return toast.error("Please buy minimum One (1) Doller");
      } else if (tokensss?.toString() > 100000) {
        return toast.error("Please buy maximum Three Thousands (3000) Dollers");
      }

      console.log(tokens?.toString(), "tokens?.toString()tokens?.toString()");
      console.log(
        amountInEthPayable?.toString(),
        "tokens?.toString()tokens?.toString()",
      );

      setPurchaseLoader(true);

      const ethersProvider = new ethers.providers.Web3Provider(walletProvider);
      const signer = ethersProvider.getSigner();
      const bridgePresaleContract = new ethers.Contract(
        WrapedBridgeLnbgLondonCoinEthereumAddress.address,
        WrapedBridgeLnbgLondonCoinEthereumAbis.abi,
        signer,
      );
      let amountInWei = ethers.utils.parseEther(amountInEthPayable?.toString());
      const buying = await bridgePresaleContract.buyWithETH(
        address,
        tokens?.toString(),
        { value: amountInWei?.toString() },
      );
      buying.wait();
      const ethLink = `https://etherscan.io/tx/${buying?.hash}`;
      setTransactionHashID(buying?.hash);
      setTransactionHash(ethLink);
      setTransactionSuccess(true);
      await GetBridgeValues();
      setPurchaseLoader(false);
    } catch (error) {
      setPurchaseLoader(false);
      console.log(error);
      setTransactionHash("");
      setTransactionSuccess(false);
      toast.error(`${JSON.stringify(error.reason)}`);
    }
  };

  ////////////////////////////////////////////////////////////////////////////////////
  //////////////////////////////-------  ETHEREUM -------////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////////

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
          transactionHashID,
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

          ////////////////////////////////////////////////
          getProviderBridgePresale,
          GetBridgeValues,
          BuyWithUSDTandUSDCOnEthereum,
          BuyWithETHOnEthereum,
        }}
      >
        {children}
      </Store.Provider>
    </>
  );
};
