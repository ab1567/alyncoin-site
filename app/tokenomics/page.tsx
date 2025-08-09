"use client";

import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';

/**
 * Tokenomics page
 *
 * Provides a breakdown of the ALYN token supply, initial distribution, emission schedule,
 * and fee allocation. A simple line chart visualizes the exponential decay of block rewards
 * over time with a tail emission.
 */
export default function TokenomicsPage() {
  // Precomputed sample data for the reward decay curve. In production this would be
  // generated dynamically or loaded from the blockchain state.
  const emissionData = [
    { block: 0, reward: 25 },
    { block: 1_000, reward: 10.1601 },
    { block: 2_000, reward: 4.1291 },
    { block: 5_000, reward: 0.2772 },
    { block: 10_000, reward: 0.0031 },
    { block: 20_000, reward: 0.0000 },
  ];
  return (
    <div className="space-y-12 py-10">
      <h1 className="text-3xl sm:text-4xl font-bold text-center mb-4">Tokenomics</h1>
      <p className="max-w-4xl mx-auto text-center text-gray-600 dark:text-gray-300">
        AlynCoin’s monetary policy balances scarcity, fairness and sustainability. The total
        supply is capped at <strong>100 million ALYN</strong>. At genesis, 10 million ALYN were
        pre‑mined and distributed to strategic stakeholders as detailed below. Block rewards
        decline exponentially as circulating supply approaches the cap, with a permanent tail
        emission to incentivize miners in perpetuity. Additionally, a portion of every transaction
        fee is burned and another portion funds ongoing development via the DAO treasury.
      </p>

      {/* Distribution Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-200 dark:border-gray-700 divide-y divide-gray-200 dark:divide-gray-700 text-sm">
          <thead className="bg-gray-50 dark:bg-gray-800">
            <tr>
              <th className="px-4 py-2 text-left font-semibold">Allocation</th>
              <th className="px-4 py-2 text-right font-semibold">Amount (ALYN)</th>
            </tr>
          </thead>
          <tbody className="bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-700">
            <tr>
              <td className="px-4 py-2">Airdrops</td>
              <td className="px-4 py-2 text-right">1,000,000</td>
            </tr>
            <tr>
              <td className="px-4 py-2">Liquidity</td>
              <td className="px-4 py-2 text-right">1,000,000</td>
            </tr>
            <tr>
              <td className="px-4 py-2">Investors</td>
              <td className="px-4 py-2 text-right">3,000,000</td>
            </tr>
            <tr>
              <td className="px-4 py-2">Development</td>
              <td className="px-4 py-2 text-right">2,000,000</td>
            </tr>
            <tr>
              <td className="px-4 py-2">Exchange Listings</td>
              <td className="px-4 py-2 text-right">1,000,000</td>
            </tr>
            <tr>
              <td className="px-4 py-2">Team / Founder</td>
              <td className="px-4 py-2 text-right">2,000,000</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Emission Chart */}
<<<<<<< HEAD
      <div className="max-w-4xl mx-auto bg-gray-900/60 rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-4 text-center text-gray-100">Block Reward Decay</h2>
        <p className="text-center text-sm text-gray-400 mb-6">
          Rewards start at 25 ALYN and decay by approximately 0.09% per block. A perpetual tail
          emission of 0.25 ALYN per block ensures ongoing miner incentives once rewards stabilize near zero.
=======
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4 text-center">Block Reward Decay</h2>
        <p className="text-center text-sm text-gray-600 dark:text-gray-400 mb-6">
          Rewards start at 25 ALYN and decay by approximately 0.09% per block. A perpetual
          tail emission of 0.25 ALYN per block ensures ongoing miner incentives once rewards
          stabilize near zero.
>>>>>>> 4ed76f0cb04f092c9ede81e27880315351f797a7
        </p>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={emissionData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
<<<<<<< HEAD
              {/* Dark grid and axes for better contrast on a black backdrop */}
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

      {/* Fee Allocation Section */}
      <div className="space-y-4 max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold">Fee Allocation & Burn Mechanism</h2>
        <p className="text-gray-600 dark:text-gray-300">
          Every transaction on AlynCoin pays a small fee. Part of this fee is permanently
          removed (“burned”), dynamically adjusting to network activity and reducing the
          circulating supply. The remainder funds the DAO treasury, which finances ongoing
          development, security audits and ecosystem grants. This mechanism balances supply
          reduction with reinvestment, capping total supply at 100 million while ensuring
          continuous improvement.
        </p>
      </div>
    </div>
  );
}