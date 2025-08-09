'use client';

export default function AboutPage() {
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
      className={`relative ${height} px-6 text-white`}
      style={{
        backgroundImage: `url('${bg}')`,
        backgroundSize: 'cover',
        backgroundPosition: position,
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="absolute inset-0 bg-black/60" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-transparent to-black/70" />
      <div className="relative z-10 max-w-4xl mx-auto text-center">{children}</div>
    </section>
  );

  const uniqueFeatures = [
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
    <div className="relative bg-black text-white">

      {/* OUR STORY — image10 (brain) */}
      <FramedSection bg="/assets/image10.png" position="top center" height="pt-44 pb-56">
        <h2 className="text-4xl font-bold mb-6 text-cyan-300">📢 Our Story</h2>
        <p className="mb-4 text-gray-100">
          AlynCoin has been in development for over <strong>4 years</strong>, initially started as <strong>AbzCoin</strong>.
          After years of dedicated research and engineering, the project evolved into <strong>AlynCoin</strong>, a robust,
          quantum-resistant blockchain with a mission to set new standards in security and decentralization.
        </p>
        <p className="text-gray-300">
          Today, we’re proud to announce that AlynCoin is <strong>95% complete</strong> with most of the core features functional and battle-tested.
        </p>
      </FramedSection>

      {/* WHAT MAKES UNIQUE — directly on image9 (lock) */}
      <FramedSection bg="/assets/image9.png" position="center" height="pt-36 pb-40">
        <h2 className="text-4xl font-bold mb-6 text-cyan-300">🚀 What Makes AlynCoin Unique</h2>
        <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6 text-left">
          {uniqueFeatures.map(({ title, description }) => (
            <div
              key={title}
              className="p-4 rounded-lg border border-gray-700 bg-gray-800 shadow-sm space-y-2"
            >
              <h3 className="text-lg font-semibold">{title}</h3>
              <p className="text-sm text-gray-400">{description}</p>
            </div>
          ))}
        </div>
      </FramedSection>

      {/* VISION AHEAD — image4 */}
      <FramedSection bg="/assets/image4.png" position="bottom center">
        <h2 className="text-4xl font-bold mb-6 text-cyan-300">🔭 Vision Ahead</h2>
        <p className="mb-4 text-gray-100">
          We’re entering final development with testnet and mobile wallet launch near. AlynCoin is welcoming developers,
          researchers, and pioneers to help shape the future of decentralized cryptography.
        </p>
        <p className="text-gray-300">
          Thank you for being part of the quantum-secure revolution.
        </p>
        <div className="mt-10">
          <a
            href="/"
            className="bg-gray-700 hover:bg-gray-600 text-white px-6 py-3 rounded-xl shadow-md transition"
          >
            ← Back to Home
          </a>
        </div>
      </FramedSection>
    </div>
  );
}
