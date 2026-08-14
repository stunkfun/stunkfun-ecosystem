import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-black/80 backdrop-blur-xl">

      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        <Link
          href="/"
          className="text-2xl font-black tracking-tight"
        >
          STUNK<span className="text-yellow-400">.</span>
        </Link>

        <div className="hidden items-center gap-8 text-sm text-gray-400 md:flex">

          <Link href="/discover" className="hover:text-white">
            Discover
          </Link>

          <Link href="/launch" className="hover:text-white">
            Launch
          </Link>

          <Link href="/dashboard" className="hover:text-white">
            Dashboard
          </Link>

        </div>

        <button className="rounded-xl bg-white px-5 py-2.5 text-sm font-bold text-black">
          Connect Wallet
        </button>

      </div>

    </nav>
  );
}
