import Link from "next/link";

export default function Hero() {
  return (
    <section className="flex min-h-screen items-center justify-center px-6 pt-20">

      <div className="mx-auto max-w-5xl text-center">

        <div className="mb-6 inline-flex rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm text-gray-400">
          ONCHAIN ASSET LAUNCHPAD
        </div>

        <h1 className="text-6xl font-black leading-none tracking-tight md:text-8xl">

          Launch the
          <br />

          <span className="text-yellow-400">
            next big thing.
          </span>

        </h1>

        <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-gray-400">

          Launch onchain coins paired with stocks,
          memes, currencies & more.

          Create and discover the next big thing
          on STUNK.

        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">

          <Link
            href="/launch"
            className="rounded-xl bg-yellow-400 px-7 py-4 font-bold text-black hover:bg-yellow-300"
          >
            Launch a Coin
          </Link>

          <Link
            href="/discover"
            className="rounded-xl border border-white/10 px-7 py-4 font-bold hover:bg-white/5"
          >
            Discover Markets
          </Link>

        </div>

      </div>

    </section>
  );
}
