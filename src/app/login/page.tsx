
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  Globe2,
  Mail,
  LockKeyhole,
  ShieldCheck,
  KeyRound,
} from "lucide-react";

export default function LoginPage() {
  return (
    <main className="flex min-h-screen bg-[#080b12] text-white">

      {/* BRANDING PANEL */}
      <section className="relative hidden w-1/2 flex-col justify-between overflow-hidden border-r border-white/10 p-12 lg:flex">

        <div className="absolute -left-40 top-40 h-96 w-96 rounded-full bg-[#c8a45d]/10 blur-[120px]" />

        <Link href="/" className="relative flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl gold-gradient text-black">
            <Globe2 size={24} />
          </div>

          <div>
            <div className="text-xl font-bold tracking-wider">
              UPWAY<span className="gold-text">-NEXORA</span>
            </div>
            <p className="text-[9px] tracking-[0.3em] text-gray-500">
              DIGITAL ASSET BROKERAGE
            </p>
          </div>
        </Link>

        <div className="relative max-w-lg">
          <p className="text-xs tracking-[0.3em] text-[#e4c47e]">
            WELCOME BACK
          </p>

          <h1 className="mt-7 text-5xl font-semibold leading-tight">
            Your portfolio.
            <span className="gold-text block">
              Your perspective.
            </span>
          </h1>

          <p className="mt-7 max-w-md text-base leading-8 text-gray-400">
            Return to your digital asset environment
            and manage your account through UPWAY-NEXORA.
          </p>

          <div className="mt-12 space-y-5">
            <div className="flex items-center gap-4">
              <ShieldCheck className="text-[#e4c47e]" size={22} />
              <span className="text-sm text-gray-300">
                Protected account access
              </span>
            </div>

            <div className="flex items-center gap-4">
              <LockKeyhole className="text-[#e4c47e]" size={22} />
              <span className="text-sm text-gray-300">
                Secure authentication
              </span>
            </div>
          </div>
        </div>

        <p className="relative text-xs text-gray-600">
          © {new Date().getFullYear()} UPWAY-NEXORA.
          All rights reserved.
        </p>
      </section>

      {/* LOGIN FORM */}
      <section className="flex w-full items-center justify-center px-5 py-12 lg:w-1/2">

        <div className="w-full max-w-md">

          <Link
            href="/"
            className="mb-10 inline-flex items-center gap-2 text-sm text-gray-500 hover:text-white"
          >
            <ArrowLeft size={16} />
            Back to homepage
          </Link>

          <div className="mb-9">

            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl gold-gradient text-black lg:hidden">
              <Globe2 size={25} />
            </div>

            <p className="text-xs tracking-[0.25em] text-[#c8a45d]">
              CLIENT ACCESS
            </p>

            <h2 className="mt-4 text-3xl font-semibold">
              Welcome back
            </h2>

            <p className="mt-3 text-sm leading-6 text-gray-500">
              Sign in to access your UPWAY-NEXORA account.
            </p>
          </div>

          <form className="space-y-6">

            <div>
              <label className="mb-2 block text-sm text-gray-300">
                Email address
              </label>

              <div className="flex items-center rounded-lg border border-white/10 bg-[#101621] px-4 focus-within:border-[#c8a45d]">

                <Mail size={18} className="text-gray-500" />

                <input
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                  autoComplete="email"
                  required
                  className="w-full bg-transparent px-3 py-4 text-sm outline-none placeholder:text-gray-600"
                />

              </div>
            </div>

            <div>
              <div className="mb-2 flex items-center justify-between">

                <label className="text-sm text-gray-300">
                  Password
                </label>

                <Link
                  href="/forgot-password"
                  className="text-xs text-[#e4c47e] hover:underline"
                >
                  Forgot password?
                </Link>

              </div>

              <div className="flex items-center rounded-lg border border-white/10 bg-[#101621] px-4 focus-within:border-[#c8a45d]">

                <KeyRound size={18} className="text-gray-500" />

                <input
                  type="password"
                  name="password"
                  placeholder="Enter your password"
                  autoComplete="current-password"
                  required
                  className="w-full bg-transparent px-3 py-4 text-sm outline-none placeholder:text-gray-600"
                />

              </div>
            </div>

            <label className="flex items-center gap-3 text-sm text-gray-500">

              <input
                type="checkbox"
                name="remember"
                className="accent-[#c8a45d]"
              />

              Remember this device

            </label>

            <button
              type="button"
              disabled
              className="flex w-full cursor-not-allowed items-center justify-center gap-3 rounded-lg gold-gradient py-4 font-semibold text-black opacity-60"
            >
              Authentication integration pending
              <ArrowRight size={18} />
            </button>

          </form>

          <div className="mt-8 border-t border-white/[0.08] pt-7 text-center">

            <p className="text-sm text-gray-500">
              New to UPWAY-NEXORA?{" "}
              <Link
                href="/register"
                className="font-semibold text-[#e4c47e] hover:underline"
              >
                Create an account
              </Link>
            </p>

          </div>

          <div className="mt-8 flex items-center justify-center gap-2 text-xs text-gray-600">
            <ShieldCheck size={15} />
            Secure client authentication
          </div>

        </div>
      </section>
    </main>
  );
}
