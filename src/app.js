import * as React from "react";
import { useState, useEffect } from "react";
import { getTransactions } from "./data";
import TableFilterBlock from "./components/tableFilterBlock";
import { NavLink } from "react-router-dom";
export default function App() {
  let transactions = getTransactions();

  const filterOptionsAN = [
    "Savings Account",
    "Checkings Account",
    "Auto Loan Account",
    "Credit Card Account",
    "Investment Account",
    "Personal Loan Account",
    "Money Market Account",
    "Home Loan Account",
  ];
  const filterOptionsTT = ["deposit", "withdrawal", "invoice", "payment"];

  const [filterState, setFilterState] = useState({
    accountName: [],
    transactionType: [],
  });

  let handleFilterChange = (checkedState, name) => {
    if (name === "Account Name") {
      setFilterState({
        accountName: checkedState,
        transactionType: filterState.transactionType,
      });
    } else if (name === "Transaction Type") {
      setFilterState({
        accountName: filterState.accountName,
        transactionType: checkedState,
      });
    }
  };

  return (
    <div>
      <h1>My Transactions</h1>
      <hr />
      <div style={{ display: "flex" }}>
        <div className="filters-block">
          <h3>Filters</h3>
          <TableFilterBlock
            name="Account Name"
            options={filterOptionsAN}
            handleFilterChange={handleFilterChange}
          />
          <TableFilterBlock
            name="Transaction Type"
            options={filterOptionsTT}
            handleFilterChange={handleFilterChange}
          />
        </div>
        <div className="table-block">
          <table>
            <tbody id="content">
              <tr>
                <th>Account No.</th>
                <th>Account Name</th>
                <th>Currency</th>
                <th>Amount</th>
                <th>Transaction Type</th>
              </tr>
              {transactions
                .filter((transaction) => {
                  let anFilterBool = true;
                  let ttFilterBool = true;
                  if (filterState.accountName.length > 0) {
                    anFilterBool = filterState.accountName.includes(
                      transaction.accountName
                    );
                  }
                  if (filterState.transactionType.length > 0) {
                    ttFilterBool = filterState.transactionType.includes(
                      transaction.transactionType
                    );
                  }
                  return anFilterBool && ttFilterBool;
                })
                .map((transaction) => {
                  return (
                    <tr key={transaction.account}>
                      <td>
                        <NavLink
                          style={({ isActive }) => ({
                            display: "block",
                            color: "black",
                          })}
                          to={`/detail/${transaction.account}`}
                          key={transaction.account}
                        >
                          {transaction.account}
                        </NavLink>
                      </td>
                      <td>{transaction.accountName}</td>
                      <td>{transaction.currencyCode}</td>
                      <td>{transaction.amount}</td>
                      <td style={{ textTransform: "capitalize" }}>
                        {transaction.transactionType}
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
