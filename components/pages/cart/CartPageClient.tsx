"use client";
import Container from "@/components/common/Container";
import PriceFormatter from "@/components/common/PriceFormatter";
import QuantityButton from "@/components/common/QuantityButton";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { urlFor } from "@/sanity/lib/image";
import useCartStore from "@/Store";
import { useUser } from "@clerk/nextjs";
import { ArrowLeft, ShoppingBag, ShoppingBagIcon, Trash } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import EmptyCart from "./EmptyCart";
import { Separator } from "@/components/ui/separator";
import { Address } from "@/sanity.types";
import { client } from "@/sanity/lib/client";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

const CartPageClient = () => {
  const {
    deleteCartProduct,
    getTotalPrice,
    getItemCount,
    getSubTotalPrice,
    resetCart,
  } = useCartStore();
  const [loading, setLoading] = useState(false);
  const groupedItems = useCartStore((state) => state.getGroupedItems());
  const { user } = useUser();
  const [addresses, setAddresses] = useState<Address[] | null>(null);
  const [selectedAddress, setSelectedAddress] = useState<Address | null>(null);
  const [couponCode, setCouponCode] = useState("");
  const [voucherCode, setVoucherCode] = useState("");

  const fetchAddresses = async () => {
    setLoading(true);
    try {
      const query = `*[_type=="address"] | order(publishedAt desc)`;
      const data = await client.fetch(query);
      setAddresses(data);
      const defaultAddess = data.find((addr: Address) => addr.default);
      if (defaultAddess) {
        setSelectedAddress(defaultAddess);
      } else if (data?.length > 0) {
        setSelectedAddress(data[0]);
      }
    } catch (error) {
      console.log("Address fetching Error:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAddresses();
  }, []);
  // console.log(addresses);

  const handleDeleteProduct = (id: string) => {
    deleteCartProduct(id);
    toast.success("Product deleted successfully");
  };

  const handleResetCart = () => {
    const confirmed = window.confirm(
      "Are you sure you want to reset your Cart"
    );
    if (confirmed) {
      resetCart();
      toast.success("Your cart has been resetted successfully");
    }
  };

  const handleCheckout = async () => {
    toast.success("Button Pressed");
    // Initialize the checkout
  };

  return (
    <div className="py-10">
      <Container className="bg-tech_bg_white py-5 rounded-md">
        {groupedItems?.length > 0 ? (
          <>
            <div className="flex items-center gap-2">
              <ShoppingBagIcon className="h-5 w-5 md:h-6 md:w-6" />
              <h1 className="text-xl md:text-2xl font-semibold">
                Shopping Cart
              </h1>
            </div>
            {/* Desktop Table View */}
            <div className="hidden md:block overflow-x-auto bg-tech_bg_white rounded-kg border mb-6">
              <table className="w-full">
                <thead className="bg-gray-50 border-b">
                  <tr>
                    <th className="py-3 px-4 text-left">Image</th>
                    <th className="py-3 px-4 text-left">Product Name</th>
                    <th className="py-3 px-4 text-left">Model</th>
                    <th className="py-3 px-4 text-center">Quality</th>
                    <th className="py-3 px-4 text-right">Unit Price</th>
                    <th className="py-3 px-4 text-right">Total</th>
                    <th className="py-3 px-4 text-center">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {groupedItems?.map(({ product }) => {
                    const itemCount = getItemCount(product?._id);
                    return (
                      <tr key={product?._id} className="border-b">
                        <td className="p-4">
                          {product?.images && (
                            <Link href={`/product/${product?.slug?.current}`}>
                              <Image
                                src={urlFor(product?.images[0]).url()}
                                alt={product?.name || "Product image"}
                                width={80}
                                height={80}
                                className="border rounded-md object-cover"
                              />
                            </Link>
                          )}
                        </td>
                        <td className="p-4">
                          <Link
                            href={`/product/${product?.slug?.current}`}
                            className="font-medium hover:text-tech_bg_blue hoverEffect"
                          >
                            {product?.name}
                          </Link>
                        </td>
                        <td className="py-4 px-4 capitalize">
                          {product?.variant}
                        </td>
                        <td className="py-4 px-4">
                          <div className="flex justify-center">
                            <QuantityButton product={product} />
                          </div>
                        </td>
                        <td className="py-4 px-4 text-right">
                          <PriceFormatter amount={product?.price as number} />
                        </td>
                        <td className="py-4 px-4 text-right font-medium">
                          <PriceFormatter
                            amount={(product?.price as number) * itemCount}
                          />
                        </td>
                        <td className="py-4 px-4 text-center">
                          <button
                            onClick={() => handleDeleteProduct(product?._id)}
                            className="text-red-400 hover:text-red-700 hover:cursor-pointer hoverEffect"
                          >
                            <Trash className="h-5 w-5" />
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
            {/* Mobile Card View */}
            <div className="md:hidden space-y-4">
              {groupedItems?.map(({ product }) => {
                const itemCount = getItemCount(product?._id);
                return (
                  <Card key={product?._id} className="overflow-hidden">
                    <div className="flex p-3 border-b">
                      {product?.images && (
                        <Link
                          href={`/product/${product?.slug?.current}`}
                          className="mr-3"
                        >
                          <Image
                            src={urlFor(product?.images[0]).url()}
                            alt={product?.name || "Product image"}
                            width={80}
                            height={80}
                            className="border rounded-md object-cover"
                          />
                        </Link>
                      )}

                      <div className="flex-1">
                        <Link
                          href={`/product/${product?.slug?.current}`}
                          className="font-medium hover:text-primary transition-colors"
                        >
                          {product?.name}
                        </Link>
                        <p className="text-sm text-gray-500 capitalize">
                          Model:{product?.variant}
                        </p>
                      </div>
                      <button
                        onClick={() => handleDeleteProduct(product?._id)}
                        className="text-red-400 "
                      >
                        <Trash className="h-5 w-5" />
                      </button>
                    </div>
                    <div className="p-3 flex justify-between items-center">
                      <div>
                        <p className="text-sm text-gray-500">Unit Price:</p>
                        <PriceFormatter
                          amount={product?.price as number}
                          className="font-medium"
                        />
                      </div>
                      <QuantityButton product={product} />
                      <div className="text-right">
                        <p className="text-sm text-gray-500">Total:</p>
                        <PriceFormatter
                          amount={(product?.price as number) * itemCount}
                          className="font-bold"
                        />
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>
            <div className="grid md:grid-cols-3 gap-6 mt-6">
              {/* Coupon & Voucher Section */}
              <div className="md:col-span-2 space-y-4">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">Apply Coupon Code</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex gap-2">
                      <Input
                        placeholder="Enter Coupon Code"
                        value={couponCode}
                        onChange={(e) => setCouponCode(e.target.value)}
                      />
                      <Button
                      // onClick={applyCoupon}
                      >
                        Apply Coupon
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">Apply Voucher</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex gap-2">
                      <Input
                        placeholder="Enter Coupon Code"
                        value={voucherCode}
                        onChange={(e) => setVoucherCode(e.target.value)}
                      />
                      <Button
                      // onClick={applyVoucher}
                      >
                        Apply Voucher
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                <div className="flex flex-col sm:flex-row gap-3 mt-6">
                  <Link href="/" className="flex-1">
                    <Button
                      variant="outline"
                      className="w-full flex items-center gap-2"
                    >
                      <ArrowLeft className="h-4 w-4" />
                      Continue Shopping
                    </Button>
                  </Link>
                  <Button
                    onClick={handleResetCart}
                    variant="destructive"
                    className="flex-1"
                  >
                    Reset Cart
                  </Button>
                </div>
              </div>
              {/* Order summary */}
              <div>
                <Card className="bg-tech_bg_white">
                  <CardHeader>
                    <CardTitle>Order Summary</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div
                      className="flex justify-between items-center
                    "
                    >
                      <span>SubTotal</span>
                      <PriceFormatter amount={getSubTotalPrice()} />
                    </div>
                    <div className="flex justify-between">
                      <span>Discount</span>
                      <PriceFormatter
                        amount={getSubTotalPrice() - getTotalPrice()}
                      />
                    </div>
                    <Separator />
                    <div className="flex justify-between font-semibold">
                      <span>Total</span>
                      <PriceFormatter
                        amount={getTotalPrice()}
                        className="text-lg font-bold text-black"
                      />
                    </div>
                    {/* Address*/}
                    {addresses && (
                      <div className="mt-4">
                        <h3 className="font-medium mb-2">Delivery Addresses</h3>
                        <RadioGroup
                          defaultValue={addresses
                            .find((addr) => addr.default)
                            ?._id.toString()}
                          className="space-y-2"
                        >
                          {addresses?.map((address: Address) => (
                            <div key={address?._id}>
                              <RadioGroupItem
                                value={address._id.toString()}
                                id={`address-${address._id}`}
                              />
                              <Label
                                htmlFor={`addres-${address._id}`}
                                className="grid gap-0.5 flex-1/2 text-sm"
                              >
                                <span>{address?.name}</span>
                                <span>
                                  {address.address}, {address.city}.
                                  {address.state} {address.zip}
                                </span>
                              </Label>
                            </div>
                          ))}
                        </RadioGroup>
                      </div>
                    )}
                    <Button
                      disabled={loading}
                      className="w-full rounded-md font-semibold tracking-wide mt-4"
                      size="lg"
                      onClick={handleCheckout}
                    >
                      {loading ? "Processing" : "Confirm Order"}
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </>
        ) : (
          <EmptyCart />
        )}
      </Container>
    </div>
  );
};

export default CartPageClient;
