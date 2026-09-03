import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ServicesPreview from "@/components/ServicesPreview";
import WorkPreview from "@/components/WorkPreview";
import ProductsPreview from "@/components/ProductsPreview";
import AboutPreview from "@/components/AboutPreview";
import ClientTrust from "@/components/ClientTrust";

export default function Home() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <ServicesPreview />
        <WorkPreview />
        <ClientTrust />
        <ProductsPreview />
        <AboutPreview />
      </main>
    </>
  );
}