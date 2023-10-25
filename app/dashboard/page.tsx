"use client";
import { useSession } from "next-auth/react";
import { signOut } from "next-auth/react";

export default function Dashboard() {
  const { data: session, status } = useSession();

  console.log("session", session);

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
