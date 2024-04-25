"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React from "react";

type Props = {};

const Appbar = (props: Props) => {
  const router = useRouter();
  const session = useSession();
  console.log(session);
  return (
    <div
      style={{
        padding: "10px 10px",
        display: "flex",
        justifyContent: "end",
        gap: "4px",
      }}
    >
      <div>{JSON.stringify(session)}</div>
      <button
        style={{
          backgroundColor: "#1750f0",
          padding: "4px 12px",
          borderRadius: "4px",
          textTransform: "uppercase",
        }}
        onClick={() => signIn()}
      >
        Sign in
      </button>

      <button
        style={{
          backgroundColor: "#1750f0",
          padding: "4px 12px",
          borderRadius: "2px",
          textTransform: "uppercase",
        }}
        onClick={() => signOut()}
      >
        Log out
      </button>
    </div>
  );
};

export default Appbar;
