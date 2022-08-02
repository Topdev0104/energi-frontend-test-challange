import styled from "styled-components";

export const ButtonWrapper = styled.div`
  width: fit-content;
  padding: 10px 15px;
  border-radius: 10px;
  color: white;
  font-size: 16px;
  background-color: ${({ theme }) => theme.menuActive};
  cursor: pointer;
  user-select: none;
`;
