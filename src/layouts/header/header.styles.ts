import { Link } from "react-router-dom";
import styled from "styled-components";

export const HeaderWrapper = styled.div`
  height: 70px;
  width: 100%;
  box-shadow: 0 0 1px 1px ${({ theme }) => theme.headerShadow};
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

export const ThemeToggle = styled.div`
  position: absolute;
  right: 20px;
  cursor: pointer;
`;

export const MenuLink = styled(Link)<{ active?: number }>`
  position: relative;
  display: flex;
  align-items: center;
  text-decoration: none;
  height: 100%;
  font-size: 18px;
  padding: 0 15px;
  color: ${({ theme, active }) => (active ? theme.text : theme.linkText)};
  transition: all 0.3s;
  ::after {
    content: "";
    height: 4px;
    width: 100%;
    position: absolute;
    background-color: ${({ theme, active }) =>
      active ? theme.menuActive : "transparent"};
    bottom: -1px;
    transition: all 0.3s;
    left: 0;
  }
`;

export const MenuIcon = styled.div`
  display: flex;
  margin-right: 10px;
`;

export const MenuLabel = styled.div``;
