import React from "react";
import "./Transaction.css";

const Transaction = ({ transactions }) => {
  console.log(transactions);
  return (
    <>
      <h1 id="transactions-title">Transactions</h1>
      <ul className="transaction-container">
        {transactions ? transactions.map((transaction) => {
          return (
            <>
              <li className="transaction">
                <h3 style={{color : transaction.negative === true ? "red" : "#007FFF"}}>{transaction.transaction}</h3>
                <p style={{color : transaction.negative === true ? "red" : "#007FFF"}}>{transaction.price}</p>
              </li>
            </>
          );
        }) : <h1>This card doesent have any transactions</h1>}
      </ul>
    </>
  );
};

export default Transaction;
