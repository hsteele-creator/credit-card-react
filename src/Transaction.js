import React from "react";
import "./Transaction.css";

const Transaction = ({ transactions }) => {
  // console.log(transactions);
  return (
    <>
      <h1 id="transactions-title">Transactions</h1>
      <ul className="transaction-container">
        {transactions ? (
          transactions.map((transaction, i) => {
            return (
              <div key={i}>
                <li className="transaction">
                  <h3
                    style={{
                      color: transaction.negative === true ? "red" : "#007FFF",
                    }}
                    id="transaction"
                  >
                    {transaction.transaction}
                  </h3>
                  <p
                    style={{
                      color: transaction.negative === true ? "red" : "#007FFF",
                    }}
                    id="price"
                  >
                    {transaction.price}
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
