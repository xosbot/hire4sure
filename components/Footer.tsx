const footerLinks = [
  { label: "Privacy Policy", href: "#" },
  { label: "Terms of Service", href: "#" },
  { label: "Contact", href: "#" },
  { label: "Support", href: "#" },
];

export default function Footer() {
  return (
    <footer className="bg-gray-950 border-t border-white/5 py-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="text-center md:text-left">
            <a href="#" className="text-xl font-bold text-white">
              hire4sure<span className="text-indigo-400">.ai</span>
            </a>
            <p className="text-gray-600 text-xs mt-1">AI Career Copilot</p>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap justify-center gap-6">
            {footerLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-gray-500 hover:text-gray-300 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Copyright */}
          <p className="text-gray-700 text-xs">
            © {new Date().getFullYear()} hire4sure.ai. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
