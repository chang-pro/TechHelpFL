'use client'

import Link from 'next/link'

interface HeaderProps {
  navLinks?: Array<{ label: string; href: string }>
  ctaText?: string
  ctaHref?: string
}

export default function Header({ 
  navLinks = [
    { label: 'About', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Contact', href: '/contact' }
  ],
  ctaText = 'Get Tech Help',
  ctaHref = '/contact'
}: HeaderProps) {
  return (
    <header className="w-full bg-white px-6 py-4 flex items-center justify-between shadow-sm">
      <Link href="/" className="text-2xl font-bold text-gray-900">
        LocalTech Daytona
      </Link>
      <div className="flex items-center gap-4">
        {navLinks.map((link) => (
          <Link 
            key={link.href}
            href={link.href}
            className="text-gray-700 hover:text-gray-900 transition-colors hidden md:block"
          >
            {link.label}
          </Link>
        ))}
        <Link 
          href={ctaHref}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          {ctaText}
        </Link>
        <button className="md:hidden p-2">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </header>
  )
}

