"use client";
import { useRouter } from "next/navigation";
import Logo from "@/app/components/Logo";
import TextField from "@/app/components/ui/TextField";
import Button from "@/app/components/ui/Button";

export default function ForgotPage() {
  const router = useRouter();
  return (
    <div className="min-h-svh auth-bg text-[#1d1b22]">
      <div className="max-w-[360px] mx-auto px-6 pt-10 pb-20">
        <div className="flex items-center justify-between">
          <Logo />
        </div>

        <div className="mt-12">
          <div className="text-[56px] leading-none font-extrabold">Oh, no !</div>
          <div className="text-[56px] leading-[0.9] font-extrabold">I forgot</div>
          <p className="mt-3 text-black/60">
            Enter your email, phone, or username and we&apos;ll send you a link to change a new password
          </p>
        </div>

        <form
          className="mt-12 space-y-6"
          onSubmit={(e) => {
            e.preventDefault();
            router.push("/login");
          }}
        >
          <TextField placeholder="Username, Email or Phone Number" />
          <Button type="submit">Forgot Password</Button>
        </form>

        <div className="text-center mt-14 text-black/70">
          Don&apos;t have an account ? {" "}
          <a href="/signup" className="font-semibold">Sign Up</a>
        </div>
      </div>
    </div>
  );
}

