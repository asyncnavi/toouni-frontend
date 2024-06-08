"use client";

import React from "react";
import Image from "next/image";
import { useAuth } from "@/provider/auth";

const Page = () => {
  const { state } = useAuth();

  const user = state.user;
  return (
    <div className="flex flex-col gap-1 mx-auto justify-center max-w-[600px] my-4">
      <div className="flex gap-1 mx-auto justify-center w-full">
        <Image
          alt=""
          className="rounded-full "
          src="https://randomuser.me/api/portraits/men/3.jpg"
          width="50"
          height="50"
        />
        <h5 className="text-xl text-gray-400">{JSON.stringify(user)}</h5>
      </div>
    </div>
  );
};

export default Page;
