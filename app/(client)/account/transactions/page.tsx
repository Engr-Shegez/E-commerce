import FeatureCard from "@/components/pages/shared/FeatureCard";
import PageHero from "@/components/pages/shared/PageHero";
import PriceFormatter from "@/components/common/PriceFormatter";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { CreditCard, ReceiptText, Wallet } from "lucide-react";
import React from "react";

const transactions = [
  {
    id: "TXN-8301",
    method: "Visa ending 4921",
    status: "Paid",
    date: "Apr 04, 2026",
    amount: 1820,
  },
  {
    id: "TXN-8258",
    method: "Wallet credit",
    status: "Refunded",
    date: "Mar 28, 2026",
    amount: 240,
  },
  {
    id: "TXN-8196",
    method: "Mastercard ending 1128",
    status: "Paid",
    date: "Mar 15, 2026",
    amount: 1295,
  },
];

const TransactionPage = () => {
  return (
    <div className="space-y-5 py-5">
      <PageHero
        eyebrow="Transactions"
        title="Review payment history with less guesswork"
        description="Track how each order was paid, spot refunds quickly, and keep your account purchase timeline easy to audit."
      />

      <div className="grid gap-4 md:grid-cols-3">
        <FeatureCard
          title="Successful payments"
          description="Orders that cleared without interruption and moved into fulfillment."
          value="12"
          icon={<CreditCard size={20} />}
        />
        <FeatureCard
          title="Refund activity"
          description="A clear view of credits and reversed payments tied to support or returns."
          value="1"
          icon={<Wallet size={20} />}
        />
        <FeatureCard
          title="Receipts ready"
          description="Transaction records stay available for order follow-up and expense tracking."
          value="Always"
          icon={<ReceiptText size={20} />}
        />
      </div>

      <div className="overflow-hidden rounded-3xl border bg-tech_bg_white shadow-sm">
        <div className="border-b px-6 py-4">
          <h2 className="text-xl font-semibold text-tech_bg_dark">
            Payment history
          </h2>
          <p className="mt-1 text-sm text-tech_bg_light_color">
            A clean breakdown of completed payments and refund activity.
          </p>
        </div>
        <div className="px-4 py-3 md:px-6">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Reference</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Method</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Amount</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {transactions.map((transaction) => (
                <TableRow key={transaction.id}>
                  <TableCell className="font-semibold text-tech_bg_dark">
                    {transaction.id}
                  </TableCell>
                  <TableCell>{transaction.date}</TableCell>
                  <TableCell>{transaction.method}</TableCell>
                  <TableCell>
                    <Badge
                      className={
                        transaction.status === "Refunded"
                          ? "bg-tech_bg_orange text-tech_bg_white hover:bg-tech_bg_orange"
                          : "bg-tech_bg_green text-tech_bg_white hover:bg-tech_bg_green"
                      }
                    >
                      {transaction.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    <PriceFormatter amount={transaction.amount} />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default TransactionPage;
