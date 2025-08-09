"use client";

/**
 * Governance & DAO page for the AlynCoin website.
 *
 * This page summarises how on‑chain governance works for AlynCoin. It explains
 * that all proposals, voting and execution happen via immutable smart contracts
 * and introduces the decentralised autonomous organisation (DAO) that stewards
 * the project’s treasury and roadmap. A list of key governance features is
 * presented in an easy‑to‑scan grid.
 */
import Header from '../../components/Header';

export default function GovernancePage() {
  // Section wrapper with background image and overlay. Accepts a relative
  // path to an image placed in the public folder. Adjust the height
  // parameter to increase or decrease vertical padding.
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
      title: 'On‑Chain Proposals',
      description:
        'All governance actions—from feature requests to budget approvals—are proposed and executed via immutable smart contracts.',
    },
    {
      title: 'Private Voting',
      description:
        'Zero‑knowledge voting protects each participant’s choices while ensuring that tallies remain auditable by anyone.',
    },
    {
      title: 'Treasury Management',
      description:
        'The DAO oversees spending of the developer fund, awarding grants and financing maintenance without centralized control.',
    },
    {
      title: 'Community Driven',
      description:
        'Anyone holding ALYN tokens can participate in governance, ensuring that the network evolves according to its stakeholders.',
    },
  ];

  return (
    <>
      {/* Site header */}
      <Header />

      {/* Hero section */}
      <FramedSection bg="image17.png">
        <h1 className="text-4xl font-bold mb-4">Governance & DAO</h1>
        <p className="mb-4 leading-relaxed">
          AlynCoin’s governance is entirely on‑chain. Smart contracts handle proposal submission,
          voting and execution with complete transparency and immutability. A decentralised
          autonomous organisation (DAO) stewards the treasury, prioritises features and allocates
          funds for grants and network upgrades.
        </p>
      </FramedSection>

      {/* Features grid */}
      <section className="py-16 bg-gray-950">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-semibold text-center text-white mb-8">
            Governance Features
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
