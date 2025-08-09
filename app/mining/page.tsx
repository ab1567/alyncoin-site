"use client";

/**
 * Mining & Emission page for the AlynCoin website.
 *
 * This page provides a high‑level overview of AlynCoin’s hybrid proof‑of‑work
 * consensus mechanism and explains how the emission schedule and difficulty
 * adjustment operate. A simple list of key mining features highlights the
 * design choices that make the network both secure and efficient. The page
 * follows the same visual style as the rest of the site with a dark theme
 * and a background image.
 */
import Header from '../../components/Header';

export default function MiningPage() {
  // Wrapper component to apply a background image with a tinted overlay.
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

  const features = [
    {
      title: 'Hybrid PoW',
      description:
        'Combines BLAKE3 and Keccak hashing for both efficiency and resilience.',
    },
    {
      title: 'Dynamic Difficulty',
      description:
        'Linearly weighted moving average algorithm keeps block times stable and fair.',
    },
    {
      title: 'Emission Schedule',
      description:
        'Rewards start at 25 ALYN and decay ~0.09% per block with a 0.25 ALYN tail emission.',
    },
    {
      title: 'Burn & Developer Fund',
      description:
        'Transaction fees are partially burned and partially allocated to the DAO treasury.',
    },
  ];

  return (
    <>
      {/* Site header */}
      <Header />

      {/* Hero */}
      <FramedSection bg="image9.png">
        <h1 className="text-4xl font-bold mb-4">Mining & Emission</h1>
        <p className="mb-4 leading-relaxed">
          AlynCoin uses a hybrid proof‑of‑work consensus combining BLAKE3 and Keccak hashing. This
          approach blends energy‑efficient hashing with robust security. Difficulty adjusts
          dynamically via a linearly weighted moving average algorithm, maintaining consistent block
          times even as network hash power fluctuates.
        </p>
      </FramedSection>

      {/* Feature list */}
      <section className="py-16 bg-gray-950">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-semibold text-center text-white mb-8">
            Mining Highlights
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature) => (
              <div key={feature.title} className="bg-gray-800 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-2 text-white">
                  {feature.title}
                </h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
