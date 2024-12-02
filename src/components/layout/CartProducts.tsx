"use client";

import {
  decreaseQuantity,
  increaseQuantity,
  removeFromCart,
} from "@/lib/store/slices/cartSlice";
import { RootState } from "@/lib/store/store";
import { ProductType } from "@/lib/types";
import Image from "next/image";
import React, { useMemo } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY as string
);

const CartProducts = () => {
  const cartItems = useSelector((state: RootState) => state.cart.cartItems);
  const dispatch = useDispatch();

  // Helper function for currency formatting
  const formatCurrency = (amount: number) => `${amount.toLocaleString()} جنية`;

  // Calculate item total price
  const handleItemTotal = (item: ProductType) => {
    return Number(item.price) * item.quantity!;
  };

  // Calculate total cart price
  const total = useMemo(() => {
    return cartItems.reduce(
      (acc: number, item: ProductType) =>
        acc + Number(item.price) * item.quantity!,
      0
    );
  }, [cartItems]);

  // Handlers for cart actions
  const handleIncrease = (id: number) => {
    dispatch(increaseQuantity({ id }));
    toast.success("تم زيادة الكمية!");
  };

  const handleDecrease = (id: number) => {
    dispatch(decreaseQuantity({ id }));
    toast.success("تم تقليل الكمية!");
  };

  const handleDelete = (id: number) => {
    dispatch(removeFromCart({ id }));
    toast.error("تم حذف المنتج من السلة.");
  };

  const createCheckout = async () => {
    try {
      const response = await fetch("/api/checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          items: cartItems,
        }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        const stripe = await stripePromise;
        await stripe?.redirectToCheckout({ sessionId: data.id });
        toast.success("تم إنشاء جلسة الدفع بنجاح!");
      } else {
        toast.error("فشل إنشاء جلسة الدفع.");
      }
    } catch (error) {
      console.error("Error in createCheckout:", error);
      toast.error("حدث خطأ أثناء عملية الدفع.");
    }
  };

  return (
    <div className="container my-20">
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-5 items-start">
        {/* Cart Items Section */}
        <div className="lg:col-span-4">
          <div>
            <div className="flex items-center justify-between mb-5">
              <h2 className="text-3xl font-bold">سلة التسوق</h2>
              <span className="text-3xl font-bold">
                {cartItems.length} منتجات
              </span>
            </div>
            <span className="h-[1px] w-full bg-[#DF5829] block"></span>

            <div className="text-lg text-gray-400 font-semibold flex items-center justify-between my-3">
              <h2>تفاصيل المنتج </h2>
              <h2>العدد</h2>
              <h2>السعر</h2>
              <h2>المجموع</h2>
            </div>

            {/* Check if cart is empty */}
            {cartItems.length === 0 ? (
              <p className="text-center text-gray-500 mt-10">
                سلة التسوق فارغة
              </p>
            ) : (
              cartItems.map((item: ProductType) => (
                <div key={item.id}>
                  <div className="flex items-center justify-between my-3">
                    <div className="flex items-center gap-3">
                      <Image
                        src={item.image}
                        alt="cart image"
                        width={100}
                        height={100}
                      />
                      <div className="space-y-0.5">
                        <h2 className="font-semibold">{item.name}</h2>
                        <p className="text-gray-500">{item.brandName}</p>
                        <button
                          onClick={() => handleDelete(item.id)}
                          className="text-red-500 font-semibold mt-2"
                        >
                          حذف
                        </button>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <span
                        onClick={() => handleIncrease(item.id)}
                        aria-label="Increase Quantity"
                        className="w-6 h-6 flex items-center justify-center rounded-md cursor-pointer text-white bg-[#DF5829]"
                      >
                        +
                      </span>
                      <span className="w-8 h-8 border border-border flex items-center justify-center rounded-md">
                        {item.quantity}
                      </span>
                      <span
                        onClick={() => handleDecrease(item.id)}
                        aria-label="Decrease Quantity"
                        className="w-6 h-6 flex items-center justify-center rounded-md cursor-pointer text-white bg-[#DF5829]"
                      >
                        -
                      </span>
                    </div>

                    <h2 className="text-lg font-semibold">
                      {formatCurrency(Number(item.price))}
                    </h2>

                    <h2 className="text-lg font-semibold">
                      {formatCurrency(handleItemTotal(item))}
                    </h2>
                  </div>
                  <span className="h-[1px] w-full bg-[#DF5829] block"></span>
                </div>
              ))
            )}
          </div>
        </div>

        {/* Order Summary Section */}
        <div className="lg:col-span-1">
          <div className="border border-border p-5 rounded-md md:sticky md:top-10">
            <h2 className="text-2xl font-semibold mb-5">ملخص الطلب</h2>
            <span className="h-[1px] w-full bg-[#DF5829] block"></span>
            <div className="flex flex-col gap-5 mt-5">
              <div className="flex items-center justify-between">
                <h3>المنتجات</h3>
                <span>{cartItems.length}</span>
              </div>
              <div className="flex items-center justify-between">
                <h3>الاجمالي</h3>
                <span>{formatCurrency(total)}</span>
              </div>
              <div className="flex items-center justify-between">
                <h3>التوصيل</h3>
                <span>مجانا</span>
              </div>
            </div>
            <button
              onClick={createCheckout}
              className="w-full mt-5 bg-[#DF5829] py-2 rounded-md text-white"
            >
              تاكيد الطلب
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartProducts;
