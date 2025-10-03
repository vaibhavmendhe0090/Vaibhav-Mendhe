"use client";
import { useRouter } from "next/navigation";
import Logo from "@/app/components/Logo";
import TextField from "@/app/components/ui/TextField";
import PasswordField from "@/app/components/ui/PasswordField";
import Button from "@/app/components/ui/Button";

export default function SignupPage() {
  const router = useRouter();
  return (
    <div className="min-h-svh auth-bg text-[#1d1b22]">
      <div className="max-w-[360px] mx-auto px-6 pt-10 pb-20">
        <div className="flex items-center justify-between">
          <Logo />
        </div>

        <div className="mt-12">
          <div className="text-[56px] leading-none font-extrabold">Hi !</div>
          <div className="text-[56px] leading-[0.9] font-extrabold">Welcome</div>
          <p className="mt-3 text-black/60">Let&apos;s create an account</p>
        </div>

        <form
          className="mt-10 space-y-5"
          onSubmit={(e) => {
            e.preventDefault();
            router.push("/home");
          }}
        >
          <TextField placeholder="Email or Phone Number" />
          <TextField placeholder="Full Name" />
          <TextField placeholder="Username" />
          <PasswordField placeholder="Password" />
          <div className="text-xs text-black/70 -mt-3">Must contain a number and least of 6 characters</div>
          <PasswordField placeholder="Confirm Password" />
          <div className="text-xs text-black/70 -mt-3">Must contain a number and least of 6 characters</div>
          <Button type="submit">Sign Up</Button>
        </form>

        <div className="text-center mt-14 text-black/70">
          Have an account ? {" "}
          <a href="/login" className="font-semibold">Log In</a>
        </div>
      </div>
    </div>
  );
}

