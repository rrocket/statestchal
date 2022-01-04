import * as React from "react";
import { useParams } from "react-router-dom";
import { getTransaction } from "./data";
export default function Detail() {
  //   const transaction = {
  //     account: "85225264",
  //     accountName: "Savings Account",
  //     mask: "0124",
  //     amount: 588.59,
  //     transactionType: "deposit",
  //     currencyCode: "PAB USD",
  //     currencyName: "Liberian Dollar",
  //     currencySymbol: "лв",
  //     iban: "NO2607790970023",
  //     bic: "YWGIGPX1",
  //   };
  let { accountId } = useParams();
  let transaction = getTransaction(accountId);
  return (
    <div>
      <h1>Transaction {accountId}</h1>
      <hr />
      {transaction && (
        <div>
          <div>Account No.: {transaction.account}</div>
          <div>Account Name: {transaction.accountName}</div>
          <div>Currency Code: {transaction.currencyCode}</div>
          <div>Amount: {transaction.amount}</div>
          <div>Transation Type: {transaction.transactionType}</div>
        </div>
      )}
    </div>
  );
}
