import * as React from "react";
import { useParams } from "react-router-dom";
import { getTransaction } from "../data/data";
export default function Detail() {
  let { accountId } = useParams();
  let transaction = getTransaction(accountId);
  return (
    <div>
      <h1>Transaction {accountId}</h1>
      <hr />
      {transaction && (
        <div className="detail-block">
          <div>
            <strong>Account No.:</strong> {transaction.account}
          </div>
          <div>
            <strong>Account Name:</strong> {transaction.accountName}
          </div>
          <div>
            <strong>Currency Code:</strong> {transaction.currencyCode}
          </div>
          <div>
            <strong>Amount:</strong> {transaction.amount}
          </div>
          <div>
            <strong>Transation Type:</strong> {transaction.transactionType}
          </div>
        </div>
      )}
    </div>
  );
}
