export const metadata = {
  title: "Home - Our Carsclub",
  description: "Page description",
};

import PageIllustration from "@/components/page-illustration";
import Hero from "@/components/hero-home";
import Workflows from "@/components/workflows";
import Features from "@/components/features";

import Cta from "@/components/cta";
import Table from "@/components/ui/tables";
export default function Home() {
  return (
    <>
      <PageIllustration />
      <Hero />
      <Workflows />
      <Features />
      
     <Table/>
     <Cta />
    </>
  );
}
