'use client';

import { Check } from 'lucide-react';
import { useState } from 'react';
import Link from 'next/link';

const tiers = [
  {
    name: 'Basic',
    price: { monthly: 0, annual: 0 },
    description: 'Perfect for getting started with programming basics.',
    features: [
      'Access to 5 beginner courses',
      'Community forum access',
      'Basic progress tracking',
      'Mobile app access'
    ],
    cta: 'Start for free',
    popular: false,
  },
  {
    name: 'Pro',
    price: { monthly: 29, annual: 24 },
    description: 'Everything you need to become a professional developer.',
    features: [
      'Access to all courses (100+)',
      'AI-powered code reviews',
      '1-on-1 mentorship sessions',
      'Certificate of completion',
      'Career prep materials'
    ],
    cta: 'Get Started',
    popular: true,
  },
  {
    name: 'Team',
    price: { monthly: 99, annual: 79 },
    description: 'Level up your entire engineering team.',
    features: [
      'Everything in Pro',
      'Up to 5 team members',
      'Admin dashboard',
      'Team progress reports',
      'Custom learning paths'
    ],
    cta: 'Contact Sales',
    popular: false,
  },
];

export default function Pricing() {
  const [isAnnual, setIsAnnual] = useState(true);

  return (
    <section id="pricing" className="py-24 bg-background border-t border-border">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-foreground mb-4">
            Simple, transparent pricing
          </h2>
          <p className="text-muted-foreground text-lg mb-8">
            No hidden fees. Cancel anytime.
          </p>

          <div className="inline-flex items-center rounded-full border border-border p-1 bg-muted/50">
            <button
              onClick={() => setIsAnnual(false)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
                !isAnnual ? 'bg-background shadow-sm text-foreground' : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setIsAnnual(true)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors flex items-center space-x-2 ${
                isAnnual ? 'bg-background shadow-sm text-foreground' : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              <span>Annually</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`rounded-xl border bg-card text-card-foreground shadow-sm flex flex-col p-6 relative ${
                tier.popular ? 'border-primary shadow-md' : 'border-border'
              }`}
            >
              {tier.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full">
                  Most Popular
                </span>
              )}

              <h3 className="text-xl font-semibold mb-2">{tier.name}</h3>
              <p className="text-sm text-muted-foreground mb-6 h-10">{tier.description}</p>
              
              <div className="mb-6 flex items-baseline text-foreground">
                <span className="text-4xl font-bold tracking-tight">
                  ${isAnnual ? tier.price.annual : tier.price.monthly}
                </span>
                <span className="text-sm text-muted-foreground ml-1 font-medium">/month</span>
              </div>

              <Link
                href={tier.cta === 'Contact Sales' ? '/#contact' : '/#waitlist'}
                className={`w-full mb-8 ${tier.popular ? 'btn btn-primary' : 'btn btn-outline'}`}
              >
                {tier.cta}
              </Link>

              <div className="space-y-4 mt-auto">
                <h4 className="text-sm font-medium">What&apos;s included:</h4>
                <ul className="space-y-3">
                  {tier.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <Check className="h-4 w-4 text-primary mr-3 mt-0.5 shrink-0" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
