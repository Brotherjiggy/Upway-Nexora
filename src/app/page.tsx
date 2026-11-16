
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  ShieldCheck,
  Wallet,
  ChartNoAxesCombined,
  Globe2,
  Menu,
  LockKeyhole,
  Bitcoin,
  CircleDollarSign,
  Layers3,
  ChevronRight,
} from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "Security First",
    description:
      "Account protection, identity verification and controlled access built into the platform.",
  },
  {
    icon: ChartNoAxesCombined,
    title: "Market Intelligence",
    description:
      "Explore digital asset markets with dedicated portfolio and market monitoring tools.",
  },
  {
    icon: Wallet,
    title: "Portfolio Management",
    description:
      "Keep your investment activity and portfolio information organized in one place.",
  },
];

const markets = [
  { symbol: "BTC", name: "Bitcoin", icon: Bitcoin },
  { symbol: "ETH", name: "Ethereum", icon: Layers3 },
  { symbol: "USDT", name: "Tether", icon: CircleDollarSign },
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#080b12] text-white">

      {/* NAVIGATION */}
      <header className="sticky top-0 z-50 border-b border-white/[0.07] bg-[#080b12]/95 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 lg:px-8">

          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl gold-gradient text-black">
              <Globe2 size={23} />
            </div>

            <div>
              <div className="text-lg font-bold tracking-[0.12em]">
                UPWAY<span className="gold-text">-NEXORA</span>
              </div>
              <div className="text-[9px] tracking-[0.3em] text-gray-500">
                DIGITAL ASSET BROKERAGE
              </div>
            </div>
          </Link>

          <nav className="hidden items-center gap-8 text-sm text-gray-400 md:flex">
            <Link href="#markets" className="hover:text-white">
              Markets
            </Link>
            <Link href="#features" className="hover:text-white">
              Platform
            </Link>
            <Link href="#about" className="hover:text-white">
              About
            </Link>
          </nav>

          <div className="hidden items-center gap-4 sm:flex">
            <Link
              href="/login"
              className="text-sm text-gray-300 hover:text-white"
            >
              Sign in
            </Link>

            <Link
              href="/register"
              className="gold-gradient rounded-lg px-5 py-3 text-sm font-bold text-black transition hover:brightness-110"
            >
              Open Account
            </Link>
          </div>

          <button
            aria-label="Navigation menu"
            className="rounded-lg border border-white/10 p-2 sm:hidden"
          >
            <Menu size={22} />
          </button>
        </div>
      </header>

      {/* HERO */}
      <section className="relative px-5 pb-24 pt-24 lg:px-8 lg:pb-32 lg:pt-32">

        <div className="absolute right-[-150px] top-10 h-96 w-96 rounded-full bg-[#c8a45d]/10 blur-[130px]" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">

          <div>
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-[#c8a45d]/25 bg-[#c8a45d]/10 px-4 py-2 text-xs tracking-wider text-[#e4c47e]">
              <span className="h-2 w-2 rounded-full bg-[#c8a45d]" />
              DIGITAL ASSET INVESTMENT PLATFORM
            </div>

            <h1 className="max-w-2xl text-5xl font-semibold leading-[1.12] tracking-tight md:text-6xl lg:text-7xl">
              Navigate the
              <span className="gold-text block">
                Future of Wealth.
              </span>
            </h1>

            <p className="mt-8 max-w-xl text-base leading-8 text-gray-400 md:text-lg">
              Discover a modern approach to digital asset investing.
              Access market insights, manage your portfolio and
              explore cryptocurrency markets through UPWAY-NEXORA.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/register"
                className="gold-gradient inline-flex items-center gap-3 rounded-lg px-7 py-4 font-semibold text-black transition hover:brightness-110"
              >
                Get Started
                <ArrowRight size={19} />
              </Link>

              <Link
                href="#markets"
                className="inline-flex items-center gap-3 rounded-lg border border-white/15 px-7 py-4 font-medium text-white transition hover:border-[#c8a45d]"
              >
                Explore Markets
                <ArrowUpRight size={18} />
              </Link>
            </div>

            <div className="mt-12 flex flex-wrap gap-7 text-xs text-gray-500">
              <span className="flex items-center gap-2">
                <ShieldCheck size={16} className="text-[#c8a45d]" />
                Identity verification
              </span>
              <span className="flex items-center gap-2">
                <LockKeyhole size={16} className="text-[#c8a45d]" />
                Secure access
              </span>
            </div>
          </div>

          {/* HERO VISUAL */}
          <div className="relative">
            <div className="glass-panel rounded-2xl p-6 shadow-2xl shadow-black/50 md:p-8">

              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-500">
                    Market overview
                  </p>
                  <h2 className="mt-1 text-xl font-semibold">
                    Digital Assets
                  </h2>
                </div>

                <div className="rounded-lg border border-[#c8a45d]/20 bg-[#c8a45d]/10 p-3">
                  <ChartNoAxesCombined
                    className="text-[#e4c47e]"
                    size={23}
                  />
                </div>
              </div>

              <div className="my-8 rounded-xl border border-white/[0.07] bg-[#080b12] p-5">
                <div className="text-sm text-gray-500">
                  Market data connection
                </div>
                <div className="mt-3 text-2xl font-semibold">
                  Awaiting live feed
                </div>
                <p className="mt-2 text-xs text-gray-500">
                  Real-time market data will appear here after
                  provider integration.
                </p>
              </div>

              <div className="space-y-3">
                {markets.map((asset) => {
                  const Icon = asset.icon;

                  return (
                    <div
                      key={asset.symbol}
                      className="flex items-center justify-between rounded-xl border border-white/[0.06] bg-white/[0.02] p-4"
                    >
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#c8a45d]/10 text-[#e4c47e]">
                          <Icon size={21} />
                        </div>

                        <div>
                          <div className="font-semibold">
                            {asset.name}
                          </div>
                          <div className="text-xs text-gray-500">
                            {asset.symbol}
                          </div>
                        </div>
                      </div>

                      <div className="text-xs text-gray-500">
                        Feed pending
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="mt-6 flex items-center justify-between border-t border-white/[0.07] pt-5">
                <span className="text-xs text-gray-500">
                  Market data status
                </span>
                <span className="text-xs text-[#e4c47e]">
                  Integration pending
                </span>
              </div>
            </div>

            <div className="absolute -bottom-6 -right-4 -z-10 h-40 w-40 rounded-full bg-[#c8a45d]/10 blur-3xl" />
          </div>
        </div>
      </section>

      {/* MARKET SECTION */}
      <section
        id="markets"
        className="border-y border-white/[0.07] bg-[#0c111b] px-5 py-20 lg:px-8"
      >
        <div className="mx-auto max-w-7xl">

          <div className="flex flex-wrap items-end justify-between gap-5">
            <div>
              <p className="text-xs tracking-[0.25em] text-[#c8a45d]">
                EXPLORE DIGITAL ASSETS
              </p>
              <h2 className="mt-4 text-3xl font-semibold md:text-4xl">
                Markets at a glance
              </h2>
              <p className="mt-3 text-sm text-gray-500">
                Discover assets available for market monitoring.
              </p>
            </div>

            <Link
              href="/markets"
              className="flex items-center gap-2 text-sm text-[#e4c47e]"
            >
              Explore markets
              <ChevronRight size={17} />
            </Link>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {markets.map((asset) => {
              const Icon = asset.icon;

              return (
                <div
                  key={asset.symbol}
                  className="glass-panel card-hover rounded-xl p-6"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#c8a45d]/10 text-[#e4c47e]">
                      <Icon size={25} />
                    </div>

                    <ArrowUpRight
                      size={19}
                      className="text-gray-500"
                    />
                  </div>

                  <h3 className="mt-6 text-lg font-semibold">
                    {asset.name}
                  </h3>

                  <p className="mt-1 text-sm text-gray-500">
                    {asset.symbol}
                  </p>

                  <div className="mt-6 border-t border-white/[0.07] pt-4 text-sm text-gray-500">
                    Live pricing integration pending
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section
        id="features"
        className="px-5 py-24 lg:px-8"
      >
        <div className="mx-auto max-w-7xl">

          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs tracking-[0.25em] text-[#c8a45d]">
              THE UPWAY-NEXORA EXPERIENCE
            </p>

            <h2 className="mt-5 text-3xl font-semibold md:text-4xl">
              Built around a smarter investment experience.
            </h2>

            <p className="mt-5 text-sm leading-7 text-gray-500">
              A unified digital asset environment designed
              around security, transparency and portfolio visibility.
            </p>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {features.map((feature) => {
              const Icon = feature.icon;

              return (
                <div
                  key={feature.title}
                  className="glass-panel card-hover rounded-2xl p-8"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#c8a45d]/10 text-[#e4c47e]">
                    <Icon size={27} />
                  </div>

                  <h3 className="mt-7 text-xl font-semibold">
                    {feature.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-gray-500">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ABOUT / CTA */}
      <section
        id="about"
        className="px-5 pb-24 lg:px-8"
      >
        <div className="mx-auto max-w-7xl">
          <div className="relative overflow-hidden rounded-3xl border border-[#c8a45d]/20 bg-gradient-to-br from-[#171f2d] to-[#0b0f17] p-8 md:p-16">

            <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-[#c8a45d]/10 blur-[90px]" />

            <div className="relative max-w-2xl">
              <p className="text-xs tracking-[0.25em] text-[#e4c47e]">
                YOUR NEXT CHAPTER
              </p>

              <h2 className="mt-5 text-3xl font-semibold leading-tight md:text-5xl">
                Take control of your digital asset journey.
              </h2>

              <p className="mt-6 text-sm leading-7 text-gray-400">
                Create your account, complete identity verification
                and access the UPWAY-NEXORA platform once approved.
              </p>

              <Link
                href="/register"
                className="gold-gradient mt-9 inline-flex items-center gap-3 rounded-lg px-7 py-4 font-semibold text-black"
              >
                Create Your Account
                <ArrowRight size={19} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/[0.07] bg-[#070a10] px-5 py-12 lg:px-8">
        <div className="mx-auto max-w-7xl">

          <div className="flex flex-col justify-between gap-8 md:flex-row">

            <div>
              <div className="text-xl font-bold tracking-[0.12em]">
                UPWAY<span className="gold-text">-NEXORA</span>
              </div>

              <p className="mt-3 max-w-sm text-sm leading-6 text-gray-500">
                A digital asset brokerage platform
                built for modern investment experiences.
              </p>
            </div>

            <div className="flex flex-wrap gap-8 text-sm text-gray-400">
              <Link href="#markets">Markets</Link>
              <Link href="#features">Platform</Link>
              <Link href="/login">Sign in</Link>
              <Link href="/register">Register</Link>
            </div>
          </div>

          <div className="mt-12 border-t border-white/[0.07] pt-7 text-xs leading-6 text-gray-600">
            <p>
              Digital asset investments involve risk, including
              the potential loss of capital. Nothing on this
              website constitutes investment advice or a guarantee
              of returns.
            </p>

            <p className="mt-5">
              © {new Date().getFullYear()} UPWAY-NEXORA.
              All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
