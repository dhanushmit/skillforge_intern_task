'use client';

import { Blocks, Layers, Layout, Palette, Smartphone, Zap, BrainCircuit, Target, Trophy, Users, BarChart } from 'lucide-react';

const features = [
  {
    title: 'AI-Powered Learning',
    description: 'Our smart algorithms adapt to your learning pace and style for maximum retention.',
    icon: BrainCircuit,
  },
  {
    title: 'Lightning Fast Progress',
    description: 'Skip what you know, focus on what you dont. Cut learning time in half.',
    icon: Zap,
  },
  {
    title: 'Goal-Oriented Paths',
    description: 'Tell us your dream job, and well build the exact curriculum to get you there.',
    icon: Target,
  },
  {
    title: 'Gamified Experience',
    description: 'Earn badges, compete on leaderboards, and stay motivated every step of the way.',
    icon: Trophy,
  },
  {
    title: 'Community Driven',
    description: 'Learn alongside peers, get help from mentors, and build your network.',
    icon: Users,
  },
  {
    title: 'Actionable Insights',
    description: 'Track your progress with detailed analytics and skill gap analysis.',
    icon: BarChart,
  },
];

export default function Features() {
  return (
    <section id="features" className="py-24 bg-background border-t border-border relative overflow-hidden">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-grid-white opacity-[0.03] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-foreground mb-4">
            Built for performance
          </h2>
          <p className="text-muted-foreground text-lg">
            We've completely reimagined online learning. Our platform combines
            cutting-edge AI technology with proven educational psychology.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group rounded-xl border border-border bg-card text-card-foreground shadow-sm p-6 flex flex-col items-start hover:shadow-md transition-shadow relative overflow-hidden"
              >
                {/* Subtle Hover Glow */}
                <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                
                <div className="p-2 bg-secondary rounded-lg mb-4 border border-border relative z-10">
                  <Icon className="w-5 h-5 text-foreground" />
                </div>
                <h3 className="font-semibold tracking-tight text-foreground mb-2 relative z-10">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed relative z-10">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
