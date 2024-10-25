"use client";

import { useToast } from "@/hooks/use-toast";
import { SignOutButton } from "@clerk/nextjs";
import Link from "next/link";

const SignOut = () => {
  const { toast } = useToast();
  const handleLogout = () => {
    toast({ description: "Logout Successful" });
  };
  return (
    <SignOutButton>
      <Link
        href="/"
        className="w-full text-left capitalize"
        onClick={handleLogout}
      >
        logout
      </Link>
    </SignOutButton>
  );
};
export default SignOut;
