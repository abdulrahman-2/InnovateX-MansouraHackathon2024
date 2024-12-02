"use client";

import verified from "@/assets/verified.gif";
import { resetCart } from "@/lib/store/slices/cartSlice";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useRouter, useSearchParams } from "next/navigation";

function Success() {
  const dispatch = useDispatch();
  const searchParams = useSearchParams();
  const router = useRouter();

  useEffect(() => {
    const sessionId = searchParams?.get("session_id");
    if (!sessionId) {
      router.push("/");
    } else {
      dispatch(resetCart());
    }
  }, [dispatch, router, searchParams]);

  return (
    <div className="flex flex-col items-center justify-center h-screen -mt-[110px] px-5">
      <Image
        src={verified}
        alt="Payment Successful Check"
        width={200}
        height={200}
      />
      <h2 className="text-3xl font-semibold">اكتمل الطلب بنجاح!</h2>
      <h2 className="text-lg font-semibold text-center mt-6 text-gray-500">
        سيتم التواصل معك قريبا
      </h2>
      <Link
        href="/"
        className="py-2 px-5 mt-6 text-white rounded-md bg-black"
        aria-label="Go to Home"
      >
        العودة للرئيسية
      </Link>
    </div>
  );
}

export default Success;
