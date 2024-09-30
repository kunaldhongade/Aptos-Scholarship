import { BannerSection } from "@/pages/Mint/components/BannerSection";
import { FAQSection } from "@/pages/Mint/components/FAQSection";
import { HowToMintSection } from "@/pages/Mint/components/HowToMintSection";
import { OurStorySection } from "@/pages/Mint/components/OurStorySection";
import { OurTeamSection } from "@/pages/Mint/components/OurTeamSection";
import { Socials } from "@/pages/Mint/components/Socials";
import { useWallet } from "@aptos-labs/wallet-adapter-react";
import { useQueryClient } from "@tanstack/react-query";
import { useEffect } from "react";

import { useGetCollectionData } from "@/hooks/useGetCollectionData";

import { Header } from "@/components/Header";
import Hero from "./components/Hero";

import { Layout, Spin } from "antd";
import "../../App.css"; // Create a separate CSS file for styling if needed.

const { Footer } = Layout;

export function Mint() {
  const { isLoading } = useGetCollectionData();

  const queryClient = useQueryClient();
  const { account } = useWallet();
  useEffect(() => {
    queryClient.invalidateQueries();
  }, [account, queryClient]);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <Spin size="large" tip="Loading..." />
      </div>
    );
  }

  return (
    <>
      <Header />
      <div style={{ overflow: "hidden" }} className="overflow-hidden">
        <main className="flex flex-col gap-10 md:gap-16 mt-6">
          <Hero />
          <OurStorySection />
          <HowToMintSection />
          <BannerSection />
          <OurTeamSection />
          <FAQSection />
        </main>

        <footer className="footer-container px-4 pb-6 w-full max-w-screen-xl mx-auto mt-6 md:mt-16 flex items-center justify-between">
          <p>Developed by Kunal Dhongade</p>
          <Socials />
        </footer>
        <Footer className="footer">Scholarship Platform ©2024 | All Rights Reserved</Footer>
      </div>
    </>
  );
}
