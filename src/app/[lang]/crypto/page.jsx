import React from "react";
import CoinsGraph from "./_components/CoinsGraph";
import TokensTable from "./_components/TokensTable";

const CryptocurrenciesPage = () => {
  return (
    <div className="flex flex-col gap-10">
      <CoinsGraph />
    </div>
  );
};

export default CryptocurrenciesPage;
