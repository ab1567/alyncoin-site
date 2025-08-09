"use client";

/**
 * Tokenomics page for the AlynCoin website.
 *
 * This page describes the monetary policy of AlynCoin and shows how the
 * initial premine is distributed among stakeholders. The design follows
 * the same dark, modern aesthetic used throughout the site and reuses
 * the overlayed background pattern common to other pages. A simple
 * table conveys the premine allocations, and a short summary explains
 * how rewards decay over time with a tail emission.
 */

export default function TokenomicsPage() {
  // Reusable section wrapper that applies a background image with an
  // overlay. It accepts a relative path to the image located in the
  // public directory. The overlay tint improves text contrast.
  const FramedSection = ({
    children,
    bg,
    position = 'center',
    height = 'py-32',
  }: {
    children: React.ReactNode;
    bg: string;
    position?: string;
    height?: string;
  }) => (
    <section
      className={`${height} relative flex items-center justify-center`}
      style={{
        backgroundImage: `url(/${bg})`,
        backgroundSize: 'cover',
        backgroundPosition: position,
      }}
    >
      <div className="bg-black bg-opacity-60 p-8 rounded-lg text-white w-full max-w-5xl">
        {children}
      </div>
    </section>
  );

  // Define the premine distribution. These numbers mirror the original
  // allocation from the legacy site and sum to the 10&nbsp;million ALYN
  // distributed at genesis. Feel free to adjust the values or add more
  // entries as needed.
  const premine = [
    { allocation: 'Airdrops', amount: 1_000_000 },
    { allocation: 'Liquidity', amount: 1_000_000 },
    { allocation: 'Investors', amount: 3_000_000 },
    { allocation: 'Development', amount: 2_000_000 },
    { allocation: 'Exchange Listings', amount: 1_000_000 },
    { allocation: 'Team / Founder', amount: 2_000_000 },
  ];

  return (
    <>
      {/* Hero section with background */}
      <FramedSection bg="assets/image16.png">
        <h1 className="text-4xl font-bold mb-4">Tokenomics</h1>
        <p className="mb-4 leading-relaxed">
          AlynCoin’s monetary policy balances scarcity, fairness and sustainability. The total supply
          is capped at 100&nbsp;million&nbsp;ALYN. At genesis, 10&nbsp;million&nbsp;ALYN were
          pre‑mined and distributed to strategic stakeholders as detailed below. Block rewards
          decline exponentially as circulating supply approaches the cap, with a permanent tail
          emission to incentivise miners in perpetuity.
        </p>
      </FramedSection>

      {/* Distribution table */}
      <section className="py-16 bg-gray-950">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-semibold text-center text-white mb-4">
            Premine Distribution
          </h2>
          <div className="overflow-x-auto">
            <table className="min-w-full text-left text-white">
              <thead>
                <tr>
                  <th className="py-2 px-4 border-b border-gray-700">Allocation</th>
                  <th className="py-2 px-4 border-b border-gray-700">Amount (ALYN)</th>
                </tr>
              </thead>
              <tbody>
                {premine.map((row) => (
                  <tr key={row.allocation} className="odd:bg-gray-800 even:bg-gray-900">
                    <td className="py-2 px-4">{row.allocation}</td>
                    <td className="py-2 px-4">{row.amount.toLocaleString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-8 text-gray-300">
            Additionally, a portion of every transaction fee is burned and another portion funds
            ongoing development via the DAO treasury. Rewards start high and decline over time
            towards a small tail emission to sustain miners in perpetuity.
          </p>
        </div>
      </section>
    </>
  );
}
