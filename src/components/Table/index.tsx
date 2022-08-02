import React from "react";
import { TableWrapper } from "./table.styles";

interface TableProps {
  column: { key: string; label: string; width?: number }[];
  tableData: [];
}

const Table: React.FC<TableProps> = ({ column, tableData }) => {
  return (
    <TableWrapper>
      <table>
        <thead>
          <tr>
            {column.map((item, key) => (
              <th key={key} style={{ width: item.width ? item.width : "auto" }}>
                {item.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {tableData.map((item: any, key) => (
            <tr key={key}>
              <td>{item.id}</td>
              <td>
                <div className="coin-img">
                  <img src={`/images/icons/${item.symbol}.svg`} alt="" />
                  {item.name}
                </div>
              </td>
              <td>{item.symbol}</td>
              <td>{item.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </TableWrapper>
  );
};

export default Table;
