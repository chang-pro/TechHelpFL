import Link from "next/link"
import { Mail, Phone, MapPin } from "lucide-react"
import { content } from "@/content"

export function Footer() {
  const navLinks = [
    { href: "#services", label: "Services" },
    { href: "#process", label: "Process" },
    { href: "#about", label: "About" },
    { href: "#locations", label: "Locations" },
    { href: "#faq", label: "FAQ" },
    { href: "#contact", label: "Contact" },
  ]

  return (
    <footer className="bg-gray-900 dark:bg-black text-gray-300 dark:text-gray-400" role="contentinfo">
      <div className="mx-auto max-w-[1200px] px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-white text-xl font-bold mb-4">
              {content.brand.name}
            </h3>
            <a
              href="tel:3863878150"
              className="block text-gray-400 dark:text-gray-500 mb-4 text-base leading-relaxed hover:text-white dark:hover:text-gray-200 transition-colors"
            >
              📞 (386) 387-8150
            </a>
            <p className="text-gray-400 dark:text-gray-400 mb-4 text-base">
              Serving Central Florida
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-base hover:text-white dark:hover:text-gray-200 transition-colors focus:outline-none focus:ring-2 focus:ring-accent rounded px-1 py-1"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" aria-hidden="true" />
                <span>{content.brand.address}</span>
              </li>
              <li>
                <a
                  href="tel:3863878150"
                  className="flex items-start gap-2 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-accent rounded"
                >
                  <Phone className="w-5 h-5 mt-0.5 flex-shrink-0" aria-hidden="true" />
                  <span>{content.brand.phone}</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${content.brand.email}`}
                  className="flex items-start gap-2 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-accent rounded"
                >
                  <Mail className="w-5 h-5 mt-0.5 flex-shrink-0" aria-hidden="true" />
                  <span>{content.brand.email}</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} {content.brand.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
