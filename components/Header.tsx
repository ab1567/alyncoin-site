export default function Header() {
  return (
    <header className="sticky top-10 z-40 bg-black/70 backdrop-blur-lg border-b border-cyan-800 shadow-sm">
      <div className="max-w-[1200px] mx-auto px-6 py-3 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">

        {/* Logo + Title */}
        <a href="/" className="flex items-center gap-3 hover:opacity-90 transition-opacity" aria-label="AlynCoin home">
          <img
            src="/assets/logo.png"
            alt="AlynCoin Logo"
            className="w-12 h-12 rounded-xl shadow-lg hover:scale-105 transition-transform duration-300"
            loading="lazy"
          />
          <h1 className="text-2xl sm:text-3xl font-black tracking-tight bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text drop-shadow-lg">
            AlynCoin
          </h1>
        </a>

        {/* Nav Buttons */}
        <nav className="flex flex-wrap gap-3 text-sm sm:text-base font-semibold">
          {[
            { label: 'Home', href: '/' },
            { label: 'About', href: '/about' },
            { label: 'Tokenomics', href: '/tokenomics' },
            { label: 'Governance', href: '/governance' },
            { label: 'Mining', href: '/mining' },
            { label: 'Downloads', href: '/downloads' },
          ].map(({ label, href }) => (
            <a
              key={href}
              href={href}
              className="px-4 py-2 rounded-full bg-cyan-800/20 text-cyan-300 hover:bg-cyan-600 hover:text-white transition-colors duration-200 shadow-md backdrop-blur-sm"
            >
              {label}
            </a>
          ))}
        </nav>

      </div>
    </header>
  );
}
