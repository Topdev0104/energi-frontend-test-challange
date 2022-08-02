import styled from "styled-components";

export const WalletWrapper = styled.div`
  max-width: 750px;
  width: 100%;
  margin: auto;
`;

export const ConnectWalletSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  h1 {
    text-transform: uppercase;
    letter-spacing: 10px;
    margin: 30px 0 50px;
  }
`;

export const MetaMaskImg = styled.div`
  width: 150px;
`;

export const WalletSection = styled.div`
  width: 100%;
  border-radius: 7px;
  min-height: 350px;
  background-color: ${({ theme }) => theme.cardBg};
  padding: 15px;
`;

export const WalletHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 0 10px;
  border-bottom: 1px solid #aaa;
  p {
    margin: 0;
    display: flex;
    font-size: 18px;
    img {
      width: 25px;
      margin-right: 7px;
    }
  }
  span {
    font-size: 14px;
    color: ${({ theme }) => theme.menuActive};
    display: flex;
    align-items: center;
    position: relative;
    ::before {
      position: absolute;
      left: -15px;
      top: 4px;
      content: "";
      width: 10px;
      height: 10px;
      border-radius: 10px;
      background-color: ${({ theme }) => theme.menuActive};
    }
  }
`;

export const WalletBody = styled.div``;

export const WalletAddressWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 15px;
`;

export const WalletInfoWrapper = styled.div`
  text-align: center;
  p {
    color: #888;
  }
  h2 {
    min-width: 180px;
    width: fit-content;
    margin: auto;
    display: flex;
    font-weight: 500;
    font-size: 30px;

    span {
      margin-right: 10px;
      display: block;
      width: 40px;
      text-align: right;
    }
  }
`;

export const WalletAddress = styled.div`
  img {
    width: 22px;
    margin-right: 7px;
  }
  display: flex;
  align-items: center;
`;

export const WalletAction = styled.div`
  svg {
    cursor: pointer;
  }
  & > :not(:last-child) {
    margin-right: 20px;
  }
`;
