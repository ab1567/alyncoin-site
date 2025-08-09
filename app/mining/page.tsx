"use client";

import { Cpu, GaugeCircle, Flame, DollarSign } from 'lucide-react';
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';

/**
 * Mining page
 *
 * Describes AlynCoin’s hybrid mining mechanism, difficulty adjustment, block reward
 * schedule and fee allocation. It also highlights the motivations for the chosen
 * consensus design and its impact on decentralization and security.
 */
export default function MiningPage() {
  const emissionData = [
    { block: 0, reward: 25 },
    { block: 1_000, reward: 10.1601 },
    { block: 2_000, reward: 4.1291 },
    { block: 5_000, reward: 0.2772 },
    { block: 10_000, reward: 0.0031 },
    { block: 20_000, reward: 0.0000 },
  ];
  return (
    <div className="space-y-12">
      {/* Hero Section for Mining */}
      <section
        className="relative text-white py-32 px-6"
        style={{
          backgroundImage: "url('/assets/image9.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="absolute inset-0 bg-black/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-transparent to-black/70" />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">Mining & Emission</h1>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
            AlynCoin uses a hybrid proof‑of‑work consensus combining <strong>BLAKE3</strong> and <strong>Keccak</strong>
            hashing. This approach blends energy‑efficient hashing with robust security. Difficulty
            adjusts dynamically via a linearly weighted moving average (LWMA) algorithm, maintaining
            consistent block times even as network hash power fluctuates.
          </p>
        </div>
      </section>
      {/* Mining features and chart */}
      <div className="py-12 space-y-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <MiningCard
            icon={<Cpu className="h-8 w-8 text-primary" />}
            title="Hybrid PoW"
            description="Combines BLAKE3 and Keccak hashing for both efficiency and resilience."
          />
          <MiningCard
            icon={<GaugeCircle className="h-8 w-8 text-primary" />}
            title="Dynamic Difficulty"
            description="Linearly weighted moving average algorithm keeps block times stable and fair."
          />
          <MiningCard
            icon={<Flame className="h-8 w-8 text-primary" />}
            title="Emission Schedule"
            description="Rewards start at 25 ALYN and decay ~0.09% per block with a 0.25 ALYN tail emission."
          />
          <MiningCard
            icon={<DollarSign className="h-8 w-8 text-primary" />}
            title="Burn & Developer Fund"
            description="Transaction fees are partially burned and partially allocated to the DAO treasury."
          />
        </div>
<<<<<<< HEAD
        <div className="max-w-4xl mx-auto bg-gray-900/60 rounded-lg p-6">
          <h2 className="text-2xl font-semibold text-center mb-4 text-gray-100">Block Reward Decay</h2>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={emissionData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#444" />
                <XAxis
                  dataKey="block"
                  tickFormatter={(v) => v.toLocaleString()}
                  tick={{ fill: '#ccc', fontSize: 12 }}
                  axisLine={{ stroke: '#666' }}
                  tickLine={{ stroke: '#666' }}
                />
                <YAxis
                  label={{ value: 'Reward (ALYN)', angle: -90, position: 'insideLeft', fill: '#ccc' }}
                  tick={{ fill: '#ccc', fontSize: 12 }}
                  axisLine={{ stroke: '#666' }}
                  tickLine={{ stroke: '#666' }}
                />
                <Tooltip
                  contentStyle={{ backgroundColor: '#222', color: '#fff', borderRadius: '0.375rem', padding: '0.5rem' }}
                  itemStyle={{ color: '#fff' }}
                  labelStyle={{ color: '#fff' }}
                  formatter={(value: number) => `${(value as number).toFixed(4)} ALYN`}
                />
                <Line
                  type="monotone"
                  dataKey="reward"
                  stroke="#00B37E"
                  strokeWidth={2}
                  dot={{ r: 2, stroke: '#00B37E', fill: '#00B37E' }}
                  activeDot={{ r: 4 }}
                />
=======
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-semibold text-center mb-4">Block Reward Decay</h2>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={emissionData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" className="stroke-gray-200 dark:stroke-gray-700" />
                <XAxis dataKey="block" tickFormatter={(v) => v.toLocaleString()} />
                <YAxis label={{ value: 'Reward (ALYN)', angle: -90, position: 'insideLeft' }} />
                <Tooltip
                  contentStyle={{ backgroundColor: '#fff', color: '#000', borderRadius: '0.375rem', padding: '0.5rem' }}
                  formatter={(value: number) => `${value.toFixed(4)} ALYN`}
                />
                <Line type="monotone" dataKey="reward" stroke="#008080" strokeWidth={2} dot={{ r: 1 }} />
>>>>>>> 4ed76f0cb04f092c9ede81e27880315351f797a7
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
        <div className="max-w-4xl mx-auto space-y-4">
          <h2 className="text-2xl font-semibold">Why Hybrid PoW?</h2>
          <p className="text-gray-300">
            Combining two cryptographic hashes mitigates the risk of single‑algorithm breakthroughs and
            distributes mining hardware diversity. BLAKE3 provides a fast, energy‑efficient baseline,
            while Keccak offers proven resistance against a range of cryptanalytic attacks. Together they
            deliver a more balanced mining landscape than typical single‑hash networks.
          </p>
        </div>
      </div>
    </div>
  );
}

function MiningCard({ icon, title, description }: { icon: React.ReactElement; title: string; description: string; }) {
  return (
    <div className="p-4 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-sm flex space-x-4">
      <div className="shrink-0">{icon}</div>
      <div>
        <h3 className="text-lg font-semibold mb-1">{title}</h3>
        <p className="text-sm text-gray-600 dark:text-gray-400">{description}</p>
      </div>
    </div>
  );
}