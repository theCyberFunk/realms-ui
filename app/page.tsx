"use client";

import BottomButtons from "./components/bottom-buttons";
import Head from "./components/head";
import Navbar from "./components/navbar";
import ProposalRules from "./components/proposal-rules";
import ProposalType from "./components/proposal-types";

export default function Home() {
  return (
    <main className="min-h-screen text-white">
      <Navbar />
      <section className="bg-gray2 flex flex-col items-center">
        <Head/>
        <ProposalRules/>
        <ProposalType/>
        <BottomButtons/>
      </section>
    </main>
  );
}
