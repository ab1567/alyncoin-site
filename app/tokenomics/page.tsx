'use client';

export default function TokenomicsPage() {
  return (
    <section
      className="relative text-white py-32 px-6 min-h-screen"
      style={{
        backgroundImage: "url('/assets/image16.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Framing */}
      <div className="absolute inset-0 bg-black/80" />
      <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black" />

      <div className="relative z-10 w-full flex justify-center">
        <div className="w-full max-w-[1200px] text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-cyan-300">💰 Tokenomics</h1>
          <p className="text-lg text-gray-300 mb-6 max-w-3xl mx-auto">
            AlynCoin is designed with long-term sustainability and community ownership in mind.
          </p>
          <ul className="text-left text-gray-200 list-disc list-inside max-w-2xl mx-auto space-y-2 text-lg">
            <li>Fixed supply of 21 million Alyn</li>
            <li>Block reward starts at 2 Alyn and halves every four years</li>
            <li>80% of issuance to miners, 20% to the community treasury</li>
            <li>Treasury funds governed by on-chain proposals</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
