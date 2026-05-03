'use client';

import Link from 'next/link';
import { Rocket, Code2, MessageCircle, Moon, Sun } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function Header() {
  const [isDark, setIsDark] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsDark(document.documentElement.classList.contains('dark'));
  }, []);

  if (!mounted) return null; // Avoid hydration mismatch for theme-dependent icons

  const toggleTheme = () => {
    if (document.documentElement.classList.contains('dark')) {
      document.documentElement.classList.remove('dark');
      localStorage.theme = 'light';
      setIsDark(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
      setIsDark(true);
    }
  };

  const links = [
    { name: 'Features', href: '/#features' },
    { name: 'Courses', href: '/#courses' },
    { name: 'Pricing', href: '/#pricing' },
    { name: 'Contact', href: '/#contact' },
  ];

  return (
    <header className="absolute top-0 w-full z-50 border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 h-14 flex items-center justify-between">
        
        {/* Left Side */}
        <div className="flex items-center space-x-6">
          <Link href="/" className="flex items-center space-x-2">
            <Rocket className="w-5 h-5 text-foreground" />
            <span className="font-bold text-foreground">SkillForge</span>
            <span className="bg-secondary text-secondary-foreground text-[10px] px-1.5 py-0.5 rounded font-medium border border-border">v2.0</span>
          </Link>
          <nav className="hidden lg:flex items-center space-x-6">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>

        {/* Right Side */}
        <div className="flex items-center space-x-4">
          <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
            <Code2 className="w-5 h-5" />
          </a>
          <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
            <MessageCircle className="w-5 h-5" />
          </a>
          <button 
            onClick={toggleTheme}
            className="text-muted-foreground hover:text-foreground transition-colors p-1"
          >
            {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
        </div>

      </div>
    </header>
  );
}
