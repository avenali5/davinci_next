"use client";
import { Header, Layout } from "@/components";
import Menu from "@/components/Menu/Menu";
import SectionTracker from "@/components/SectionTracker/SectionTracker";
import About from "@/sections/About/About";
import BeyondGlass from "@/sections/BeyondGlass/BeyondGlass";
import Directions from "@/sections/Directions/Directions";
import Features from "@/sections/Features/Features";
import Hero from "@/sections/Hero/Hero";
import Numbers from "@/sections/Numbers/Numbers";
import Programm from "@/sections/Programm/Programm";
import SeeMore from "@/sections/SeeMore/SeeMore";
import Tickets from "@/sections/Tickets/Tickets";
import WhatToSee from "@/sections/WhatToSee/WhatToSee";
import WhoIs from "@/sections/WhoIs/WhoIs";

export default function Home() {
  return (
    <Layout>
      <SectionTracker />
      <Header />
      <Menu />
      <Hero />
      <About />
      <Numbers />
      <WhoIs />
      <WhatToSee />
      <Features />
      <Programm />
      {/* <Tickets /> */}
      <BeyondGlass />
      <Directions />
    </Layout>
  );
}
