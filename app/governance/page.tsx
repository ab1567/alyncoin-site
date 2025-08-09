'use client';

export default function GovernancePage() {
  return (
    <section
      className="relative text-white py-32 px-6 min-h-screen"
      style={{
        backgroundImage: "url('/assets/image17.png')",
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
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-cyan-300">🏛️ Governance</h1>
          <p className="text-lg text-gray-300 mb-6 max-w-3xl mx-auto">
            AlynCoin places control in the hands of its community through transparent, on-chain governance.
          </p>
          <ul className="text-left text-gray-200 list-disc list-inside max-w-2xl mx-auto space-y-2 text-lg">
            <li>Token holders create and vote on proposals</li>
            <li>Decentralized treasury management</li>
            <li>Upgradable protocol parameters via DAO</li>
            <li>Public discussion and auditing of all decisions</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
