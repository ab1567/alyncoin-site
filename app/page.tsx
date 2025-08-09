"use client";

import Link from 'next/link';
import { ShieldCheck, Cpu, Layers, RefreshCcw, Users, FileBarChart, Globe, Rocket } from 'lucide-react';

/**
 * Home page for the AlynCoin site.
 *
 * Presents an overview of the project: high-level mission, core features,
 * current progress, and ways to get involved. The design leverages Tailwind
 * for responsive layout and lucide-react icons for visual cues.
 */
export default function HomePage() {
  return (
    <div className="space-y-24">
      {/*
        Hero Section

        Use a full‑bleed background image (image3) to mirror the look and feel of the
        original AlynCoin landing page. A pair of overlay layers darken the image so
        the headline and description remain legible. Calls to action invite users to
        explore the tokenomics and download the whitepaper. We intentionally omit
        the pitch deck from the hero per the latest requirements – the pitch deck is
        available only on the downloads page.
      */}
      <section
        className="relative flex flex-col items-center justify-center text-center min-h-[70vh] px-6"
        style={{
          backgroundImage: "url('/assets/image3.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        {/* Dark overlays to ensure text contrast */}
        <div className="absolute inset-0 bg-black/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-transparent to-black/70" />
        <div className="relative z-10 max-w-3xl py-24">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-4 text-white">
            Quantum‑Ready Blockchain for the Next Era
          </h1>
          <p className="text-lg sm:text-xl mb-8 text-gray-300">
            AlynCoin is a pioneering Layer‑1 chain combining post‑quantum signatures,
            zk‑STARK proofs and a hybrid PoW consensus to deliver unmatched security,
            scalability and privacy. Built from the ground up for tomorrow’s world,
            it’s not another Ethereum fork—it’s a community‑driven vision for the
            future of decentralized finance and identity.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/tokenomics"
              className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-white font-medium shadow hover:bg-primary-dark transition-colors"
            >
              Learn About Tokenomics
            </Link>
            <a
              href="https://alyncoin.com/whitepaper.pdf"
              className="inline-flex items-center justify-center rounded-md border border-primary px-6 py-3 text-primary font-medium shadow hover:bg-primary/10 dark:hover:bg-primary/20 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              Read Whitepaper
            </a>
          </div>
        </div>
      </section>

      {/* Why Section */}
      <section id="why" className="space-y-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center">Why AlynCoin?</h2>
        <p className="max-w-4xl mx-auto text-center text-gray-600 dark:text-gray-300">
          Born from years of research and engineering, AlynCoin is a fully custom blockchain built
          for speed, privacy and resilience. Its modular cryptographic stack and zero‑knowledge
          architecture ensure that your digital future remains secure—long after quantum computers
          arrive.
        </p>
      </section>

      {/* Features Section */}
      <section id="features" className="space-y-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-center">Key Features</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          <FeatureCard
            icon={<ShieldCheck className="h-8 w-8 text-primary" />}
            title="Quantum‑Secure Signatures"
            description="Falcon and Dilithium signature schemes protect your assets against quantum attacks."
          />
          <FeatureCard
            icon={<FileBarChart className="h-8 w-8 text-primary" />}
            title="zk‑STARK & Recursive Proofs"
            description="Zero‑knowledge proofs power privacy and scalability without trusted setups."
          />
          <FeatureCard
            icon={<Layers className="h-8 w-8 text-primary" />}
            title="Layer‑1 & Layer‑2 Rollups"
            description="High throughput via rollup chains while retaining core Layer‑1 security guarantees."
          />
          <FeatureCard
            icon={<RefreshCcw className="h-8 w-8 text-primary" />}
            title="Self‑Healing Nodes"
            description="Nodes automatically recover from sync issues for resilient, always‑on uptime."
          />
          <FeatureCard
            icon={<Users className="h-8 w-8 text-primary" />}
            title="Zero‑Knowledge DAO"
            description="On‑chain governance with zero‑knowledge proofs ensures privacy and fairness in voting."
          />
          <FeatureCard
            icon={<Globe className="h-8 w-8 text-primary" />}
            title="NFT & Interoperability"
            description="Native NFT support is live and atomic swaps are planned to enable cross‑chain trading."
          />
        </div>
      </section>

      {/* Progress Section */}
      <section id="progress" className="space-y-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center">Current Progress</h2>
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
          <ProgressItem
            title="Blockchain Core"
            status="✅ Complete"
            description="Hybrid PoW engine built with BLAKE3 and Keccak, plus post‑quantum signature integration."
          />
          <ProgressItem
            title="Wallet & zk Infrastructure"
            status="✅ Complete"
            description="GUI and CLI wallets support L1/L2 transactions and mining; zk‑STARK proofs & recursive rollups operational."
          />
          <ProgressItem
            title="NFT Support"
            status="✅ Complete"
            description="NFT minting and management tools are live."
          />
          <ProgressItem
            title="Atomic Swaps"
            status="🚧 In Progress"
            description="Trustless cross‑chain trading is under active development."
          />
          <ProgressItem
            title="Public Testnet & Mobile Wallet"
            status="🚧 In Progress"
            description="Testnet launch and mobile client are underway; expected later this year."
          />
          <ProgressItem
            title="Miner Launch"
            status="🚀 September 2025"
            description="Official miner release coming September 2025—join our community to get early access."
          />
        </div>
      </section>

      {/* Call to Action Section */}
      <section id="contact" className="space-y-6 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold">Get Involved</h2>
        <p className="max-w-3xl mx-auto text-gray-600 dark:text-gray-300">
          AlynCoin is a private, community‑driven initiative. We selectively onboard developers,
          researchers, investors, and early supporters who share our mission. If you’d like to
          contribute to the quantum‑secure future of blockchain, we’d love to hear from you.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="mailto:contact@alyncoin.com"
            className="inline-block bg-primary text-white font-medium px-6 py-3 rounded-md shadow hover:bg-primary-dark transition-colors"
          >
            Email Us
          </a>
          <a
            href="https://github.com/ab1567/alyncoin-site"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block border border-primary text-primary font-medium px-6 py-3 rounded-md shadow hover:bg-primary/10 dark:hover:bg-primary/20 transition-colors"
          >
            View on GitHub
          </a>
        </div>
      </section>
    </div>
  );
}

/**
 * FeatureCard component renders a small card with an icon, title and description.
 */
function FeatureCard({ icon, title, description }: { icon: React.ReactElement; title: string; description: string; }) {
  return (
    <div className="flex items-start space-x-4 p-4 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-sm">
      <div className="shrink-0">{icon}</div>
      <div>
        <h3 className="text-lg font-semibold mb-1">{title}</h3>
        <p className="text-sm text-gray-600 dark:text-gray-400">{description}</p>
      </div>
    </div>
  );
}

/**
 * ProgressItem component displays the status of a development milestone.
 */
function ProgressItem({ title, status, description }: { title: string; status: string; description: string; }) {
  return (
    <div className="p-4 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-sm space-y-2">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold">{title}</h3>
        <span className="text-sm font-medium text-primary">{status}</span>
      </div>
      <p className="text-sm text-gray-600 dark:text-gray-400">{description}</p>
    </div>
  );
}