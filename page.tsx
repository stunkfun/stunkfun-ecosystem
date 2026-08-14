import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AssetGrid from "@/components/AssetGrid";
import MarketStats from "@/components/MarketStats";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <MarketStats />
        <AssetGrid />
      </main>

      <Footer />
    </>
  );
}
