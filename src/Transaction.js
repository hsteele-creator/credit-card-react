import React from "react";
import "./Transaction.css";

const Transaction = ({ transactions }) => {
  console.log(transactions);
  return (
    <>
      <h1 id="transactions-title">Transactions</h1>
      <ul className="transaction-container">
        {transactions.map((transaction) => {
          return (
            <>
              <li className="t">
                <h3>{transaction.transaction}</h3>
                <p>{transaction.price}</p>
              </li>
            </>
          );
        })}
      </ul>
    </>
  );
};

export default Transaction;
