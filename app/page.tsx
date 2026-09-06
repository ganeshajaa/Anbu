import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Products from "@/components/Products";
import Quality from "@/components/Quality";
import Process from "@/components/Process";
import Markets from "@/components/Markets";
import Enquiry from "@/components/Enquiry";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main id="top">
        <Hero />
        <Products />
        <Quality />
        <Process />
        <Markets />
        <Enquiry />
      </main>
      <Footer />
    </>
  );
}
