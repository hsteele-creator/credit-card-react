import React from "react";

const Transaction = ({ transactions }) => {
  console.log(transactions);
  return (
    <div>
      {transactions.map((transaction) => {
        return (
            <>
            <h1>{transaction.transaction}</h1>
            <h2>{transaction.price}</h2>
            </>
        );
      })}
    </div>
  );
};

export default Transaction;
