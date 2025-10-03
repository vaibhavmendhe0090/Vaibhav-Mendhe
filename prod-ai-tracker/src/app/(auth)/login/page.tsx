"use client";
import { useRouter } from "next/navigation";
import Logo from "@/app/components/Logo";
import TextField from "@/app/components/ui/TextField";
import PasswordField from "@/app/components/ui/PasswordField";
import Button from "@/app/components/ui/Button";

export default function LoginPage() {
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
          <p className="mt-3 text-black/60">Im waiting for you, please enter your detail</p>
        </div>

        <form
          className="mt-12 space-y-6"
          onSubmit={(e) => {
            e.preventDefault();
            router.push("/home");
          }}
        >
          <TextField placeholder="Username, Email or Phone Number" />
          <PasswordField placeholder="Password" />
          <div className="flex items-center justify-between text-sm text-black/70">
            <label className="flex items-center gap-2 select-none">
              <input type="checkbox" className="size-4" />
              Remember Me
            </label>
            <a href="/forgot" className="underline/30 hover:underline">
              Forgot Password ?
            </a>
          </div>
          <Button type="submit">Log In</Button>
        </form>

        <div className="text-center mt-14 text-black/70">
          Don&apos;t have an account ? {" "}
          <a href="/signup" className="font-semibold">Sign Up</a>
        </div>
      </div>
    </div>
  );
}

