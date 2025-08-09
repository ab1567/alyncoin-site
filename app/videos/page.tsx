'use client';

export default function VideosPage() {
  return (
    <section
      className="relative px-6 py-32 text-white min-h-screen"
      style={{
        backgroundImage: "url('/assets/image2.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Side fade only – no blur */}
      <div className="absolute inset-0 bg-black/80"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black"></div>

      <div className="relative z-10 w-full flex justify-center">
        <div className="w-full max-w-[1200px] text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-cyan-300">🎥 Videos Coming Soon</h1>
          <p className="text-lg text-gray-300 mb-6 max-w-3xl mx-auto">
            We will soon showcase CLI demos, zk-STARK rollups, mining workflows, and full ecosystem walkthroughs.
            These videos will highlight the power, speed, and privacy of the AlynCoin platform—both CLI and GUI.
          </p>

          <ul className="text-left text-gray-200 list-disc list-inside max-w-2xl mx-auto mb-10 text-lg space-y-2">
            <li>💻 CLI Transactions and Wallet Walkthrough</li>
            <li>🔐 zk-STARK Proof Generation and Verification</li>
            <li>⚙️ Mining with Hybrid PoW (BLAKE3 + Keccak)</li>
            <li>🧠 Recursive Rollups in Action</li>
            <li>🌐 Atomic Swaps and zkNFT Transfers</li>
          </ul>

          <p className="text-lg text-gray-400 mb-4">📡 Follow us for updates:</p>
          <div className="flex justify-center gap-4 flex-wrap">
            <a
              href="https://twitter.com/alyncoin"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-xl shadow-md transition"
            >
              🐦 Follow on Twitter
            </a>
            <a
              href="https://instagram.com/alyncoin_official"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-pink-600 hover:bg-pink-700 text-white px-6 py-2 rounded-xl shadow-md transition"
            >
              📸 Follow on Instagram
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
