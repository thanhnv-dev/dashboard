"use client";
import { useSession } from "next-auth/react";
import { signOut } from "next-auth/react";
import { sendGet } from "@/network/requests";
import React, { useState, useEffect } from "react";

export default function Dashboard() {
  const { data: session, status } = useSession();

  const [data, setData] = useState<any>([]);

  console.log("data", data.data);

  useEffect(() => {
    const fetchData = async () => {
      const response: any = await sendGet(
        "api/admin/user/data",
        session?.user.token
      );
      setData(response);
    };
    fetchData();
  }, []);

  return (
    <main>
      <div>
        <a>adasds</a>
        <button
          onClick={() => signOut()}
          className="bg-red-500 text-white font-bold px-6 py-2 mt-3"
        >
          Log Out
        </button>
      </div>
    </main>
  );
}
