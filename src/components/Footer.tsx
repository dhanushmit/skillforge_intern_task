import Link from 'next/link';
import { Rocket } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: 'Product',
      links: [
        { name: 'Features', href: '/#features' },
        { name: 'Courses', href: '/#courses' },
        { name: 'Pricing', href: '/#pricing' },
        { name: 'Changelog', href: '/changelog' },
      ],
    },
    {
      title: 'Company',
      links: [
        { name: 'About Us', href: '/about' },
        { name: 'Careers', href: '/careers' },
        { name: 'Blog', href: '/blog' },
        { name: 'Contact', href: '/#contact' },
      ],
    },
    {
      title: 'Legal',
      links: [
        { name: 'Privacy Policy', href: '/privacy' },
        { name: 'Terms of Service', href: '/terms' },
        { name: 'Cookie Policy', href: '/cookies' },
      ],
    },
  ];

  return (
    <footer className="border-t border-border bg-background py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          
          <div className="col-span-1">
            <Link href="/" className="flex items-center space-x-2 font-bold text-foreground text-xl">
              <Rocket className="w-5 h-5" />
              <span>SkillForge</span>
            </Link>
            <p className="text-sm text-muted-foreground mt-4 max-w-xs leading-relaxed">
              Empowering the next generation of builders with AI-driven education and an elite community.
            </p>
          </div>

          {footerLinks.map((column) => (
            <div key={column.title}>
              <h4 className="font-semibold text-foreground text-sm mb-4">{column.title}</h4>
              <ul className="space-y-3">
                {column.links.map((link) => (
                  <li key={link.name}>
                    <Link 
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between text-sm text-muted-foreground">
          <p>&copy; {currentYear} SkillForge Inc. All rights reserved.</p>
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <span>Built with ❤️</span>
            <span className="hidden md:inline text-border">|</span>
            <Link href="/admin" className="hover:text-foreground transition-colors">
              Admin Login
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
