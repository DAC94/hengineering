import React, { useState, useEffect } from 'react';
import { CoatOfArms } from './CoatOfArms';
import { Menu, X, Search, UserCheck, Shield, Phone, Mail, ChevronDown } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const navItems = [
    { name: 'Home', href: '#' },
    {
      name: 'About Us',
      href: '#history',
      dropdown: [
        { name: 'Our History', href: '#history' },
        { name: 'Royal Charter (1100 AD)', href: '#history' },
        { name: 'Coat of Arms', href: '#' },
      ],
    },
    {
      name: 'The Court',
      href: '#court',
      dropdown: [
        { name: 'The Master & Wardens', href: '#court' },
        { name: 'Court of Assistants', href: '#court' },
        { name: 'The Clerk', href: '#court' },
      ],
    },
    {
      name: 'Hengineering Craft',
      href: '#calculator',
      dropdown: [
        { name: 'Megalith Calculator', href: '#calculator' },
        { name: 'Solstice Observatory', href: '#alignment' },
      ],
    },
    {
      name: 'Education & Charity',
      href: '#gazette',
      dropdown: [
        { name: 'Stone Mason Grants', href: '#gazette' },
        { name: 'Indentured Apprenticeships', href: '#gazette' },
        { name: 'Research Papers', href: '#gazette' },
      ],
    },
    { name: 'Freedom of Guild', href: '#freedom' },
    { name: 'Megalithic Hall Hire', href: '#hall' },
    { name: 'Contact Us', href: '#footer' },
  ];

  return (
    <header className="w-full bg-white shadow-md border-b border-slate-200 sticky top-0 z-50">
      
      {/* 1. Top Bar (Dark Navy Utility Strip) */}
      <div className="bg-[#092e4a] text-slate-200 text-xs py-2 px-4 border-b border-amber-500/30">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          
          <div className="flex items-center space-x-4">
            <span className="flex items-center space-x-1.5 text-slate-300">
              <Phone className="w-3.5 h-3.5 text-amber-400" />
              <span>020 7329 2189</span>
            </span>
            <span className="hidden sm:inline text-slate-500">•</span>
            <span className="flex items-center space-x-1.5 text-slate-300">
              <Mail className="w-3.5 h-3.5 text-amber-400" />
              <span>clerk@hengineering.org</span>
            </span>
          </div>

          <div className="flex items-center space-x-3">
            <a
              href="#freedom"
              className="px-2.5 py-1 rounded bg-amber-600 hover:bg-amber-500 text-slate-950 font-semibold text-[11px] transition-colors"
            >
              Become a Member
            </a>
            <a
              href="#freedom"
              className="px-2.5 py-1 rounded bg-slate-800 hover:bg-slate-700 text-amber-300 border border-amber-500/40 text-[11px] transition-colors flex items-center space-x-1"
            >
              <UserCheck className="w-3.5 h-3.5 text-amber-400" />
              <span>Freemen's Portal</span>
            </a>
          </div>

        </div>
      </div>

      {/* 2. Main Header Logo & Title Area */}
      <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo Crest + Guild Title */}
          <a href="#" className="flex items-center space-x-4 group">
            <CoatOfArms size="md" className="group-hover:scale-105 transition-transform" />
            <div>
              <h1 className="font-serif-guild text-xl sm:text-2xl lg:text-3xl font-extrabold text-[#154c76] tracking-tight leading-tight">
                The Worshipful Company of Megalith Builders
              </h1>
              <p className="font-garamond italic text-sm text-slate-600 font-semibold mt-0.5">
                "The Hengineers" • City of London Livery Company No. 115
              </p>
            </div>
          </a>

          {/* Search Box on Desktop */}
          <div className="hidden lg:flex items-center space-x-2">
            <div className="relative">
              <input
                type="text"
                placeholder="Search the Guild website..."
                className="w-64 pl-3 pr-9 py-1.5 rounded border border-slate-300 text-xs text-slate-800 focus:outline-none focus:border-[#154c76]"
              />
              <Search className="w-4 h-4 text-slate-400 absolute right-2.5 top-2" />
            </div>
          </div>

          {/* Mobile Hamburger Toggle */}
          <div className="flex lg:hidden items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded text-[#154c76] hover:bg-slate-100"
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* 3. Main Navigation Bar (Navy Blue Bar) */}
      <nav className="bg-[#154c76] text-white shadow-inner hidden lg:block border-t border-amber-500/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ul className="flex items-center space-x-1 text-xs font-semibold uppercase tracking-wider">
            {navItems.map((item) => (
              <li
                key={item.name}
                className="relative group py-3 px-3.5 hover:bg-[#092e4a] cursor-pointer transition-colors"
                onMouseEnter={() => setActiveDropdown(item.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <a href={item.href} className="flex items-center space-x-1 text-slate-100 group-hover:text-amber-300">
                  <span>{item.name}</span>
                  {item.dropdown && <ChevronDown className="w-3 h-3 text-amber-400/80" />}
                </a>

                {/* Dropdown Menu */}
                {item.dropdown && activeDropdown === item.name && (
                  <ul className="absolute top-full left-0 w-56 bg-white text-slate-800 shadow-xl border-t-2 border-amber-500 py-2 space-y-1 rounded-b font-sans normal-case text-xs z-50">
                    {item.dropdown.map((sub) => (
                      <li key={sub.name}>
                        <a
                          href={sub.href}
                          className="block px-4 py-2 hover:bg-slate-100 hover:text-[#154c76] font-medium"
                        >
                          {sub.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-slate-200 px-4 pt-3 pb-6 space-y-2 text-sm font-medium text-slate-700">
          {navItems.map((item) => (
            <div key={item.name} className="border-b border-slate-100 pb-1">
              <a
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2 text-[#154c76] font-bold"
              >
                {item.name}
              </a>
              {item.dropdown && (
                <div className="pl-4 space-y-1 text-xs text-slate-600">
                  {item.dropdown.map((sub) => (
                    <a
                      key={sub.name}
                      href={sub.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block py-1 hover:text-[#154c76]"
                    >
                      {sub.name}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}

    </header>
  );
};
