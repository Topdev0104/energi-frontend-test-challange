// Import Modules
import React, { useState } from "react";
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

const Wallet: React.FC = () => {
  const { provider, currentAcc }: any = useEthContext();
  const [copied, setCopied] = useState(false);
  const tokenBalance = 1000;
  const usdBalance = 2500;

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

  return (
    <WalletWrapper>
      {currentAcc ? (
        <WalletSection>
          <WalletHeader>
            <p>
              <img src="/images/metamask.svg" alt="metamask" />
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
                    window.open(`https://etherscan.io/address/${currentAcc}`)
                  }
                />
              </WalletAction>
            </WalletAddressWrapper>
            <WalletInfoWrapper>
              <p>Total Balance</p>
              <h2>
                <span>
                  <img src="/images/metamask.svg" alt="metamask" />
                </span>
                {formatNumber(tokenBalance, 0)}
              </h2>
              <h2>
                <span>$</span> {formatNumber(usdBalance, 0)}
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
