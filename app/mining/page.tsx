'use client';

export default function MiningPage() {
  return (
    <section
      className="relative text-white py-32 px-6 min-h-screen"
      style={{
        backgroundImage: "url('/assets/image12.png')",
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
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-cyan-300">⛏️ Mining</h1>
          <p className="text-lg text-gray-300 mb-6 max-w-3xl mx-auto">
            Secure the network and earn rewards using AlynCoin's hybrid proof‑of‑work engine.
          </p>
          <ul className="text-left text-gray-200 list-disc list-inside max-w-2xl mx-auto space-y-2 text-lg">
            <li>BLAKE3 + Keccak hashing for quantum-resilient security</li>
            <li>Optimized for CPUs and GPUs with dynamic difficulty</li>
            <li>Low-latency node synchronization and self-healing peers</li>
            <li>Open to solo miners and emerging mining pools</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
