import PageHero from "@/components/pages/shared/PageHero";
import FeatureCard from "@/components/pages/shared/FeatureCard";
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
import { Package, ShieldCheck, Truck } from "lucide-react";
import React from "react";

const orders = [
  {
    id: "NB-20418",
    date: "Apr 03, 2026",
    status: "Processing",
    amount: 1820,
    items: 3,
  },
  {
    id: "NB-20391",
    date: "Mar 27, 2026",
    status: "Delivered",
    amount: 740,
    items: 1,
  },
  {
    id: "NB-20335",
    date: "Mar 14, 2026",
    status: "Shipped",
    amount: 1295,
    items: 2,
  },
];

const stats = [
  {
    title: "Open orders",
    value: "2",
    description: "Orders currently being packed, shipped, or prepared for delivery.",
    icon: <Package size={20} />,
  },
  {
    title: "Delivered this month",
    value: "4",
    description: "Recent purchases that have already landed safely with you.",
    icon: <Truck size={20} />,
  },
  {
    title: "Protected purchases",
    value: "100%",
    description: "Every order is tracked and supported by the current account support flow.",
    icon: <ShieldCheck size={20} />,
  },
];

const OrdersPage = () => {
  return (
    <div className="space-y-5 py-5">
      <PageHero
        eyebrow="Orders"
        title="Track every NexBuy purchase in one place"
        description="See recent order activity, keep an eye on shipping status, and quickly spot the orders that still need your attention."
      />

      <div className="grid gap-4 md:grid-cols-3">
        {stats.map((item) => (
          <FeatureCard
            key={item.title}
            title={item.title}
            description={item.description}
            value={item.value}
            icon={item.icon}
          />
        ))}
      </div>

      <div className="overflow-hidden rounded-3xl border bg-tech_bg_white shadow-sm">
        <div className="border-b px-6 py-4">
          <h2 className="text-xl font-semibold text-tech_bg_dark">Recent orders</h2>
          <p className="mt-1 text-sm text-tech_bg_light_color">
            A quick snapshot of your latest activity across checkout and delivery.
          </p>
        </div>
        <div className="px-4 py-3 md:px-6">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Order ID</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Items</TableHead>
                <TableHead className="text-right">Total</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {orders.map((order) => (
                <TableRow key={order.id}>
                  <TableCell className="font-semibold text-tech_bg_dark">
                    {order.id}
                  </TableCell>
                  <TableCell>{order.date}</TableCell>
                  <TableCell>
                    <Badge
                      className={
                        order.status === "Delivered"
                          ? "bg-tech_bg_green text-tech_bg_white hover:bg-tech_bg_green"
                          : order.status === "Shipped"
                            ? "bg-tech_bg_blue text-tech_bg_white hover:bg-tech_bg_blue"
                            : "bg-tech_bg_orange text-tech_bg_white hover:bg-tech_bg_orange"
                      }
                    >
                      {order.status}
                    </Badge>
                  </TableCell>
                  <TableCell>{order.items}</TableCell>
                  <TableCell className="text-right">
                    <PriceFormatter amount={order.amount} />
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

export default OrdersPage;
