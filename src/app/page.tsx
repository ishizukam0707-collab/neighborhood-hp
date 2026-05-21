import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Achievements from "@/components/sections/Achievements";
import Practice from "@/components/sections/Practice";
import Members from "@/components/sections/Members";
import Activity from "@/components/sections/Activity";
import Recruit from "@/components/sections/Recruit";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Achievements />
        <Practice />
        <Members />
        <Activity />
        <Recruit />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
