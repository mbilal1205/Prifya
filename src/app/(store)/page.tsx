import { Hero } from "@/components/home/Hero";
import { Benefits } from "@/components/home/Benefits";
import { HowToUse } from "@/components/home/HowToUse";
import { Ingredients } from "@/components/home/Ingredients";
import { FAQ } from "@/components/home/FAQ";
import { Reviews } from "@/components/home/Reviews";
import { FinalCTA } from "@/components/home/FinalCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Benefits /> 
      <HowToUse />
      <Ingredients />  
      <FAQ />
      <Reviews />
      <FinalCTA />
    </>
  );
}