"use client";
import Exprience from "@/components/Exprience";
import Handle from "@/components/Handle";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Wallet from "@/components/Wallet";
import  Contact  from "@/components/Contact";
import { useState } from "react";

export default function Home() {
  const [state, setState] = useState({
    web3: null,
    contract: null,
  });
  const saveState = (state) => {
    console.log(state)
    setState(state)
  }
  return (
    <div className="flex flex-col text-white bg-black h-screen">
     
     <Wallet saveState={saveState} />
     <Hero state={state} />
     <Handle />
     <Projects state={state} />
     <Skills />
     <Exprience state={state} />
     {/* <Contact /> */}

    
    </div>
  );
}
