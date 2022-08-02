import styled from "styled-components";

export const TableWrapper = styled.div`
  border: 1px solid ${({ theme }) => theme.tableBorder};
  border-radius: 10px;
  table {
    border-collapse: collapse;
    width: 100%;
    th {
      padding: 7px 10px;
      text-align: left;
    }
    td {
      padding: 20px 10px;
    }
    .coin-img {
      display: flex;
      align-items: center;
      img {
        width: 20px;
        height: 20px;
        margin-right: 5px;
      }
    }
    tbody > tr:not(:last-child),
    thead > tr {
      border-bottom: 1px solid ${({ theme }) => theme.tableBorder};
    }
  }
`;
