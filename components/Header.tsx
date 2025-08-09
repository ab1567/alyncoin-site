"use client";

import Link from 'next/link';
import { useState } from 'react';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';

/**
 * Top navigation bar component.
 *
 * Renders a responsive header with the AlynCoin logo and primary navigation links.
 * On mobile screens a hamburger menu toggles the link list.
 */
export default function Header() {
  const [open, setOpen] = useState(false);
  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Tokenomics', href: '/tokenomics' },
    { label: 'Governance', href: '/governance' },
    { label: 'Mining', href: '/mining' },
    { label: 'Progress', href: '/progress' },
  ];
  return (
    <header className="sticky top-0 z-50 bg-gray-900/90 border-b border-gray-800 shadow-md">
      <div className="mx-auto max-w-7xl flex items-center justify-between px-4 py-3">
        <Link href="/" className="flex items-center space-x-3">
          <Image src="/assets/logo.png" alt="AlynCoin logo" width={40} height={40} className="h-10 w-10 object-contain" />
          <span className="text-2xl font-semibold tracking-tight text-white">AlynCoin</span>
        </Link>
        {/* Desktop navigation */}
        <nav className="hidden md:flex space-x-6 text-sm font-medium">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-gray-300 hover:text-white transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        {/* Mobile hamburger toggle */}
        <button
          type="button"
          className="md:hidden inline-flex items-center justify-center rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-primary"
          aria-label="Toggle navigation menu"
          onClick={() => setOpen(!open)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-gray-800 bg-gray-900">
          <nav className="px-4 py-2 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:bg-gray-800"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}