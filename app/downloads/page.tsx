'use client';

export default function DownloadsPage() {
  return (
    <section
      className="relative text-white py-32 px-6 min-h-screen"
      style={{
        backgroundImage: "url('/assets/image11.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Framing (no blur) */}
      <div className="absolute inset-0 bg-black/80"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black"></div>

      <div className="relative z-10 w-full flex justify-center">
        <div className="w-full max-w-[1200px] text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-cyan-300">⬇️ Download Center</h2>
          <p className="text-lg text-gray-300 mb-10 max-w-3xl mx-auto">
            Grab the brand-new Windows miner below, report any bugs you find, and stay tuned—our Mac miner ships in two
            weeks alongside more tooling.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <div className="flex flex-col items-center">
              <a
                href="https://github.com/ab1567/alyncoin-site/releases/download/v1.0.1.4/AlynCoin-win.exe"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-xl shadow-md transition"
              >
                🪟 Download Windows Miner
              </a>
              <small className="mt-1 text-sm text-gray-300">
                <a
                  href="https://github.com/ab1567/alyncoin-site/releases/latest"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-gray-100"
                >
                  Release notes
                </a>
              </small>
            </div>
            <a
              href="/downloads/AlynCoin_Whitepaper.pdf"
              target="_blank"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl shadow-md transition"
            >
              📄 View Whitepaper
            </a>
            <a
              href="/downloads/pitch_deck.pdf"
              target="_blank"
              className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl shadow-md transition"
            >
              📘 View Pitch Deck
            </a>
            <a
              href="/"
              className="bg-gray-700 hover:bg-gray-600 text-white px-6 py-3 rounded-xl shadow-md transition"
            >
              🔙 Back to Home
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
