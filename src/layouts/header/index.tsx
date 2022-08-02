import React from "react";
import { useLocation } from "react-router-dom";

// Import React Icons
import { BsSunFill } from "react-icons/bs";
import { MdHome, MdAccountBalanceWallet } from "react-icons/md";

// Import Styled Components
import {
  HeaderWrapper,
  MenuIcon,
  MenuLabel,
  MenuLink,
  ThemeToggle,
} from "./header.styles";

interface HeaderProps {
  onThemeClick: any;
  theme: any;
}

const menuData = [
  {
    icon: <MdHome size={25} />,
    label: "Home",
    path: "/",
  },
  {
    icon: <MdAccountBalanceWallet size={25} />,
    label: "Wallet",
    path: "/wallet",
  },
];

const Header: React.FC<HeaderProps> = ({ onThemeClick }) => {
  const location = useLocation();

  return (
    <HeaderWrapper>
      {menuData.map((item, key) => (
        <MenuLink
          active={item.path === location.pathname ? 1 : 0}
          to={`${item.path}`}
          key={key}
        >
          <MenuIcon>{item.icon}</MenuIcon>
          <MenuLabel>{item.label}</MenuLabel>
        </MenuLink>
      ))}
      <ThemeToggle onClick={onThemeClick}>
        <BsSunFill size={24} />
      </ThemeToggle>
    </HeaderWrapper>
  );
};

export default Header;
