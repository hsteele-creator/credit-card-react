import React from "react";
import "./Transaction.css";

const Transaction = ({ transactions }) => {
  // console.log(transactions);
  return (
    <>
      <h2 id="transactions-title">Recent Transactions</h2>
      <ul className="transaction-container">
        {transactions ? (
          transactions.map((transaction, i) => {
            return (
              <div key={i}>
                <li className="transaction">
                  <h3
                    id="transaction"
                  >
                    {transaction.transaction}
                  </h3>
                  <p
                    id="price"
                  >
                    ${transaction.price}
                  </p>
                </li>
              </div>
            );
          })
        ) : (
          <h1 id="no-transactions">This card does not have any transactions</h1>
        )}
      </ul>
    </>
  );
};

export default Transaction;
