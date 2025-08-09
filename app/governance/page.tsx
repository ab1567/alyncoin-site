"use client";

import { Lock, Wallet, Vote, UserCheck } from 'lucide-react';

/**
 * Governance & DAO page
 *
 * Explains AlynCoin’s fully on‑chain governance model and the role of the DAO in managing
 * resources and directing network development. Emphasizes the use of zero‑knowledge proofs
 * for private voting and the community‑driven ethos of the project.
 */
export default function GovernancePage() {
  return (
    <div className="space-y-12 py-10">
      <h1 className="text-3xl sm:text-4xl font-bold text-center">Governance & DAO</h1>
      <p className="max-w-4xl mx-auto text-center text-gray-600 dark:text-gray-300">
        AlynCoin’s governance is entirely on‑chain. Smart contracts handle proposal submission,
        voting and execution with complete transparency and immutability. A decentralized
        autonomous organization (DAO) stewards the treasury, prioritizes features and allocates
        funds for grants and network upgrades. Zero‑knowledge proofs within the voting process
        protect voter privacy while maintaining verifiable outcomes.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
        <GovernanceCard
          icon={<Lock className="h-8 w-8 text-primary" />}
          title="On‑Chain Proposals"
          description="All governance actions—from feature requests to budget approvals—are proposed and executed via immutable smart contracts."
        />
        <GovernanceCard
          icon={<Vote className="h-8 w-8 text-primary" />}
          title="Private Voting"
          description="Zero‑knowledge voting protects each participant’s choices while ensuring that tallies remain auditable by anyone."
        />
        <GovernanceCard
          icon={<Wallet className="h-8 w-8 text-primary" />}
          title="Treasury Management"
          description="The DAO oversees spending of the developer fund, awarding grants and financing maintenance without centralized control."
        />
        <GovernanceCard
          icon={<UserCheck className="h-8 w-8 text-primary" />}
          title="Community Driven"
          description="Anyone holding ALYN tokens can participate in governance, ensuring that the network evolves according to its stakeholders."
        />
      </div>
      <div className="max-w-4xl mx-auto space-y-4">
        <h2 className="text-2xl font-semibold">Get Involved</h2>
        <p className="text-gray-600 dark:text-gray-300">
          The DAO is continuously evolving. If you’re interested in shaping AlynCoin’s future—whether by
          proposing enhancements, reviewing technical designs or helping steward the treasury—reach out
          via our community channels. Together we’ll build a secure, privacy‑first blockchain for the next era.
        </p>
      </div>
    </div>
  );
}

function GovernanceCard({ icon, title, description }: { icon: React.ReactElement; title: string; description: string; }) {
  return (
    <div className="p-4 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-sm flex space-x-4">
      <div className="shrink-0">{icon}</div>
      <div>
        <h3 className="text-lg font-semibold mb-1">{title}</h3>
        <p className="text-sm text-gray-600 dark:text-gray-400">{description}</p>
      </div>
    </div>
  );
}