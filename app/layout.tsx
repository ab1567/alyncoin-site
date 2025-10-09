import './globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

export const metadata = {
  title: 'AlynCoin | Quantum-Resistant Cryptocurrency',
  description: 'Quantum-secure Layer-1 blockchain with zk-STARKs and post-quantum signatures.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-black text-white">
        {/* 🔔 Global Early Mining Notice */}
        <div className="fixed top-0 left-0 w-full bg-gradient-to-r from-cyan-800/90 via-black to-cyan-800/90 text-white text-sm md:text-base font-semibold py-2 z-50 shadow-lg backdrop-blur">
          <div className="mx-auto flex max-w-5xl items-center justify-center gap-3 px-4">
            <span aria-hidden="true" className="hidden text-lg sm:inline">
              🚀
            </span>
            <p className="flex-1 text-center">
              <span className="text-cyan-300">Early miner access is live.</span> Grab the latest build, hunt for bugs, and
              share your feedback.
            </p>
            <a
              href="/downloads"
              className="inline-flex items-center gap-1 rounded-full border border-cyan-400/70 bg-cyan-500/10 px-3 py-1 text-xs font-medium text-cyan-100 transition hover:border-cyan-300 hover:text-white hover:shadow-lg md:text-sm"
            >
              Download
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>

        {/* Push content below banner */}
        <div className="h-16"></div>

        <Header />
        <main className="tab-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
