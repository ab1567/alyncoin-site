import './globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'AlynCoin | Quantum-Resistant Cryptocurrency',
  description: 'Quantum-secure Layer-1 blockchain with zk-STARKs and post-quantum signatures.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.className}>
      <body className="bg-black text-white">
        {/* 🔔 Global Launch Notice */}
        <div className="fixed top-0 left-0 w-full bg-gradient-to-r from-cyan-700 via-black to-cyan-700 text-white text-sm md:text-base font-semibold py-2 z-50 overflow-hidden">
          <div className="animate-marquee whitespace-nowrap min-w-full px-4">
            🚀 Expected launch in <span className="text-yellow-300 font-bold">September</span>! Join our early access program and be first to explore AlynCoin.
          </div>
        </div>

        {/* Push content below banner */}
        <div className="h-10"></div>

        <Header />
        <main className="tab-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
