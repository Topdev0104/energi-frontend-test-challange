// Import Modules
import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { MdContentCopy, MdCheck } from "react-icons/md";
import { RiShareBoxLine } from "react-icons/ri";
import { CopyToClipboard } from "react-copy-to-clipboard";

// Import Custom Components
import Button from "components/Button";
import { useEthContext } from "context/EthereumContext";

// Import Styled Components
import {
  ConnectWalletSection,
  MetaMaskImg,
  WalletAddressWrapper,
  WalletAddress,
  WalletBody,
  WalletHeader,
  WalletInfoWrapper,
  WalletSection,
  WalletWrapper,
  WalletAction,
} from "./wallet.styles";
import { formatNumber } from "utils/formatNumber";
import axios from "axios";
import { api_url } from "constant/endpoint";

const Wallet: React.FC = () => {
  const { provider, web3, currentAcc }: any = useEthContext();
  const [copied, setCopied] = useState(false);
  const [balance, setBalance] = useState(0);
  const [nrgPrice, setNrgPrice] = useState(0);

  useEffect(() => {
    const getCoinData = async () => {
      const { data } = await axios.get(api_url);
      const filterdata: any = await Object.values(data).filter((item: any) => {
        return item.symbol === "WNRG";
      });
      if (filterdata) {
        setNrgPrice(filterdata[0].last_price);
      }
    };
    getCoinData();
  }, []);
  const handleConnectWallet = async () => {
    if (provider) {
      await provider.request({ method: `eth_requestAccounts` });
    } else {
      toast.error("Please install Metamask wallet in this browser", {
        theme: "dark",
      });
    }
  };

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };
  useEffect(() => {
    if (web3 && currentAcc) {
      const interval = setInterval(
        async () =>
          setBalance(
            Number(
              (await web3.eth.getBalance(
                "0x178acd37f113897f4b1731f58f3afd797fdf7260"
              )) /
                10 ** 18
            )
          ),
        1000
      );

      return () => clearInterval(interval); // This represents the unmount function, in which you need to clear your interval to prevent memory leaks.
    }
  });

  return (
    <WalletWrapper>
      {currentAcc ? (
        <WalletSection>
          <WalletHeader>
            <p>
              <img src="/images/energi.png" alt="metamask" />
              Energi Network
            </p>
            <span>Connected</span>
          </WalletHeader>
          <WalletBody>
            <WalletAddressWrapper>
              <WalletAddress>
                <img src="/images/metamask.svg" alt="metamask" />
                {currentAcc.slice(0, 5)}...
                {currentAcc.slice(currentAcc.length - 8, currentAcc.length)}
              </WalletAddress>
              <WalletAction>
                <CopyToClipboard text={currentAcc} onCopy={handleCopy}>
                  {copied ? <MdCheck size={20} /> : <MdContentCopy size={20} />}
                </CopyToClipboard>
                <RiShareBoxLine
                  size={20}
                  onClick={() =>
                    window.open(
                      `https://explorer.energi.network/address/${currentAcc}/transactions`
                    )
                  }
                />
              </WalletAction>
            </WalletAddressWrapper>
            <WalletInfoWrapper>
              <p>Total Balance</p>
              <h2>
                <span>
                  <img src="/images/energi.png" alt="energi" width="40px" />
                </span>
                {formatNumber(balance, 2)}
              </h2>
              <h2>
                <span>$</span> {formatNumber(nrgPrice * balance, 2)}
              </h2>
            </WalletInfoWrapper>
          </WalletBody>
        </WalletSection>
      ) : (
        <ConnectWalletSection>
          <MetaMaskImg>
            <img src="/images/metamask.svg" alt="metamask.svg" />
          </MetaMaskImg>
          <h1>Metamask</h1>
          <Button onClick={handleConnectWallet}>Connect Wallet</Button>
        </ConnectWalletSection>
      )}
    </WalletWrapper>
  );
};

export default Wallet;
