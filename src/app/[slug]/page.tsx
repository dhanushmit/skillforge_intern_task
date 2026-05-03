import { notFound } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

const pageData: Record<string, { title: string, content: React.ReactNode }> = {
  changelog: {
    title: 'Changelog',
    content: (
      <div className="space-y-8">
        <div>
          <h3 className="text-xl font-bold text-foreground">v3.0 - Launch UI Theme Update</h3>
          <p className="text-sm text-primary font-bold mb-4 mt-1">May 2026</p>
          <ul className="list-disc pl-5 space-y-2 text-muted-foreground font-medium">
            <li>Completely overhauled UI with Launch UI aesthetic.</li>
            <li>Added dynamic dark and light mode switching.</li>
            <li>Restored SkillForge educational content.</li>
            <li>Added fully functional contact and waitlist integrations.</li>
          </ul>
        </div>
      </div>
    )
  },
  about: {
    title: 'About Us',
    content: (
      <div className="space-y-4 text-muted-foreground font-medium">
        <p>SkillForge was founded with a single mission: to democratize tech education and make world-class learning accessible to everyone, anywhere.</p>
        <p>We believe that traditional education is broken. By combining expert instruction with AI-driven adaptive learning, we're building the future of skills development.</p>
      </div>
    )
  },
  careers: {
    title: 'Careers at SkillForge',
    content: (
      <div className="space-y-4 text-muted-foreground font-medium">
        <p>Join our team and help us build the next generation of education. We're a fully remote company with competitive benefits.</p>
        <div className="p-6 bg-secondary border border-border rounded-xl mt-6 shadow-sm">
          <h4 className="font-bold text-foreground mb-2">Open Positions</h4>
          <p className="text-muted-foreground text-sm">No open positions currently available. Check back soon or <Link href="/#contact" className="text-primary font-bold hover:underline">send us your resume</Link>.</p>
        </div>
      </div>
    )
  },
  blog: {
    title: 'SkillForge Blog',
    content: (
      <div className="space-y-4 text-muted-foreground font-medium">
        <p>Stay tuned for our latest insights on software engineering, design, and product management.</p>
        <div className="p-6 bg-secondary border border-border rounded-xl mt-4 text-center shadow-sm">
          <p className="italic text-muted-foreground">First article coming next week!</p>
        </div>
      </div>
    )
  },
  privacy: {
    title: 'Privacy Policy',
    content: (
      <div className="space-y-6 text-muted-foreground font-medium text-center py-12">
        <p className="text-2xl font-bold text-foreground">Coming Soon</p>
        <p>We are currently drafting our privacy policy. Check back later.</p>
      </div>
    )
  },
  terms: {
    title: 'Terms of Service',
    content: (
      <div className="space-y-6 text-muted-foreground font-medium text-center py-12">
        <p className="text-2xl font-bold text-foreground">Coming Soon</p>
        <p>Our terms of service are currently being finalized.</p>
      </div>
    )
  },
  cookies: {
    title: 'Cookie Policy',
    content: (
      <div className="space-y-6 text-muted-foreground font-medium text-center py-12">
        <p className="text-2xl font-bold text-foreground">Coming Soon</p>
        <p>Our cookie policy will be published here shortly.</p>
      </div>
    )
  }
};

export default function DynamicPage({ params }: { params: { slug: string } }) {
  const data = pageData[params.slug] || {
    title: 'Coming Soon',
    content: (
      <div className="space-y-6 text-muted-foreground font-medium text-center py-12">
        <p className="text-2xl font-bold text-foreground">Under Construction</p>
        <p>This page is currently being built. Please check back later!</p>
      </div>
    )
  };

  return (
    <main className="min-h-screen flex flex-col relative overflow-hidden bg-background">
      <Header />
      <div className="flex-grow pt-40 pb-32">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto rounded-xl border border-border bg-card p-8 md:p-12 shadow-sm">
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground mb-8">{data.title}</h1>
            <div className="leading-relaxed text-lg">
              {data.content}
            </div>
            
            <div className="mt-12 pt-8 border-t border-border">
              <Link href="/" className="text-primary font-bold hover:underline flex items-center">
                &larr; Back to Home
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
