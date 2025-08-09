'use client';
import ContactSection from '../components/ContactSection';

export default function Home() {
  const FramedSection = ({
    children,
    bg,
  }: {
    children: React.ReactNode;
    bg: string;
  }) => (
    <section
      className="relative py-24 px-4 sm:px-6 md:px-12 text-gray-200"
      style={{
        backgroundImage: `url('${bg}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
      <div className="absolute inset-0 bg-[url('/assets/glow-grid.svg')] opacity-10 bg-center bg-cover mix-blend-screen pointer-events-none"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-transparent to-black/70"></div>
      <div className="relative z-10 w-full flex justify-center">
        <div className="w-full max-w-[1200px]">{children}</div>
      </div>
    </section>
  );

  const features = [
    { title: 'Post-Quantum Signatures', description: 'Falcon + Dilithium security' },
    { title: 'zk-STARK Proofs', description: 'Privacy and scalability built-in' },
    { title: 'Hybrid PoW', description: 'BLAKE3 + Keccak for resilient mining' },
    { title: 'Atomic Swaps', description: 'Cross-chain interoperability' },
    { title: 'Self-Healing Nodes', description: 'Autonomous sync & recovery' },
    { title: 'Quantum-Secure NFTs', description: 'Verifiable and tamper-proof' },
    { title: 'DAO Governance', description: 'Fully decentralized control' },
    { title: 'Recursive zk-Rollups', description: 'Efficient L2 aggregation' },
    { title: 'CLI & GUI Wallet', description: 'Complete with L1, L2, and more' },
  ];

  const progress = [
    {
      title: 'Blockchain Core',
      status: '✅ Complete',
      description:
        'Hybrid PoW engine built with BLAKE3 and Keccak, plus post‑quantum signature integration.',
    },
    {
      title: 'Wallet & zk Infrastructure',
      status: '✅ Complete',
      description:
        'GUI and CLI wallets support L1/L2 transactions and mining; zk‑STARK proofs & recursive rollups operational.',
    },
    {
      title: 'NFT Support',
      status: '✅ Complete',
      description: 'NFT minting and management tools are live.',
    },
    {
      title: 'Atomic Swaps',
      status: '🚧 In Progress',
      description: 'Trustless cross‑chain trading is under active development.',
    },
    {
      title: 'Public Testnet & Mobile Wallet',
      status: '🚧 In Progress',
      description:
        'Testnet launch and mobile client are underway; expected later this year.',
    },
    {
      title: 'Miner Launch',
      status: '🚀 September 2025',
      description:
        'Official miner release coming September 2025—join our community to get early access.',
    },
  ];

  const building = [
    { title: '💡 A custom non-EVM Layer-1', description: 'No legacy baggage' },
    { title: '🔐 Zero-knowledge proofs', description: 'Using Winterfell zk-STARKs' },
    { title: '🧠 Fully quantum-safe key systems', description: 'Falcon, Dilithium' },
    { title: '🪙 Native token', description: 'Elastic difficulty + modular emission' },
    {
      title: '🧹 zk-based identity & governance',
      description: 'zk-NFTs, DAO governance, rollups',
    },
    {
      title: '🔄 Recursive proofs',
      description: 'Support for scalability & compression',
    },
  ];

  return (
    <>
      {/* HERO */}
      <section
        className="relative text-white min-h-screen flex items-center justify-center"
        style={{
          backgroundImage: "url('/assets/image3.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/80"></div>
        <div className="relative z-10 text-center max-w-2xl px-6 py-32">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4 bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-500 text-transparent bg-clip-text drop-shadow-lg">
            AlynCoin
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-6">
            Quantum-Resistant. zk-STARK Powered. A Custom L1 Chain Built for the Future.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/downloads/AlyncoinGPTresearch.pdf"
              className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-600 text-white rounded-xl hover:from-purple-600 hover:to-pink-700 transition shadow-md"
            >
              🧠 GPT Research
            </a>
            <a
              href="/downloads/AlynCoin_Whitepaper.pdf"
              className="px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition shadow-md animate-pulse"
            >
              📄 View Whitepaper
            </a>
            <span className="px-6 py-3 bg-gray-600 text-white rounded-xl opacity-60 cursor-not-allowed shadow-inner">
              🍬 Wallet Coming Soon
            </span>
          </div>
          <p className="mt-10 text-sm text-cyan-300 animate-bounce">↓ Scroll to Explore</p>
        </div>
      </section>

      {/* WHY */}
      <FramedSection bg="/assets/image1.png">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold mb-6 bg-gradient-to-r from-cyan-300 to-blue-500 text-transparent bg-clip-text drop-shadow-lg">
            🔐 Why AlynCoin?
          </h2>
          <p className="mb-4 text-gray-100">
            AlynCoin is a next-generation quantum-secure blockchain built from the ground up for speed, privacy,
            decentralization, and post-quantum resistance. Originally started as <strong>AbzCoin</strong>, it evolved into
            AlynCoin after years of research and engineering.
          </p>
          <p className="text-gray-300">
            We’re not another Ethereum fork. AlynCoin is a fully custom layer-1 chain, optimized for scalability and
            built for the future of quantum computing, privacy-first finance, and decentralized governance.
          </p>
        </div>
      </FramedSection>

      {/* FEATURES */}
      <FramedSection bg="/assets/image6.png">
        <div>
          <h2 className="text-3xl font-extrabold text-center mb-10 bg-gradient-to-r from-cyan-300 to-blue-500 text-transparent bg-clip-text drop-shadow-lg">
            🔐 Quantum-Ready Features
          </h2>
          <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
            {features.map(({ title, description }) => (
              <div
                key={title}
                className="p-4 rounded-lg border border-gray-700 bg-gray-800 shadow-sm space-y-2"
              >
                <h3 className="text-lg font-semibold">{title}</h3>
                <p className="text-sm text-gray-400">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </FramedSection>

      {/* PROGRESS */}
      <FramedSection bg="/assets/image13.png">
        <div>
          <h2 className="text-3xl font-extrabold mb-6 bg-gradient-to-r from-cyan-300 to-blue-500 text-transparent bg-clip-text drop-shadow-lg">
            🚀 Current Progress
          </h2>
          <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
            {progress.map(({ title, status, description }) => (
              <div
                key={title}
                className="p-4 rounded-lg border border-gray-700 bg-gray-800 shadow-sm space-y-2"
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold">{title}</h3>
                  <span className="text-sm font-medium text-primary">{status}</span>
                </div>
                <p className="text-sm text-gray-400">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </FramedSection>

      {/* BUILDING */}
      <FramedSection bg="/assets/image5.png">
        <div>
          <h2 className="text-3xl font-extrabold mb-6 bg-gradient-to-r from-cyan-300 to-blue-500 text-transparent bg-clip-text drop-shadow-lg">
            🧱 What We're Building
          </h2>
          <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
            {building.map(({ title, description }) => (
              <div
                key={title}
                className="p-4 rounded-lg border border-gray-700 bg-gray-800 shadow-sm space-y-2"
              >
                <h3 className="text-lg font-semibold">{title}</h3>
                <p className="text-sm text-gray-400">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </FramedSection>

      {/* CONTACT */}
      <ContactSection />
    </>
  );
}
