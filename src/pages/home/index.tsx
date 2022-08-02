import axios from "axios";
import Table from "components/Table";
import { api_url } from "constant/endpoint";
import React, { useEffect, useState } from "react";
import { formatNumber } from "utils/formatNumber";

// Import Styled Components
import { HomeContainer } from "./home.styles";

const tableColumn = [
  { key: "id", label: "#" },
  { key: "name", label: "Coin" },
  { key: "symbol", label: "" },
  { key: "price", label: "Price" },
];

const Home: React.FC = () => {
  const [tableData, setTableData] = useState<any>([]);
  const [loading, setLoading] = useState(false);

  const getCoinData = async () => {
    setLoading(true);
    const data = await axios.get(api_url);
    const tempData: any = [];
    await Object.values(data.data)
      .sort((a: any, b: any) => {
        return b.last_price - a.last_price;
      })
      .forEach((item: any, key) => {
        tempData.push({
          id: key + 1,
          name: item.name,
          symbol: item.symbol,
          price: formatNumber(item.last_price),
        });
      });

    setTableData(tempData);
    setLoading(false);
  };

  useEffect(() => {
    getCoinData();
  }, []);

  return (
    <HomeContainer>
      {loading ? (
        "Loading ..."
      ) : (
        <Table column={tableColumn} tableData={tableData} />
      )}
    </HomeContainer>
  );
};

export default Home;
