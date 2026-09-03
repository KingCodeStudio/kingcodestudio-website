import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ServicesPreview from "@/components/ServicesPreview";
import WorkPreview from "@/components/WorkPreview";
import TrustPreview from "@/components/TrustPreview";
import ProductsPreview from "@/components/ProductsPreview";
import AboutPreview from "@/components/AboutPreview";

export default function Home() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <ServicesPreview />
        <WorkPreview />
        <TrustPreview />
        <ProductsPreview />
        <AboutPreview />
      </main>
    </>
  );
}