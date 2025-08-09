import './globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

export const metadata = {
  title: 'AlynCoin | Quantum‑Resistant Blockchain',
  description:
    'Quantum-secure Layer‑1 blockchain with zk‑STARKs, post‑quantum signatures, and decentralized governance.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen flex flex-col bg-white text-gray-800 dark:bg-gray-900 dark:text-gray-100">
        <Header />
        <main className="flex-1 px-4 sm:px-6 md:px-8 max-w-7xl mx-auto w-full">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}