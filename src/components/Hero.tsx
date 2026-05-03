'use client';

import Link from 'next/link';
import { Code2, ArrowRight, Star, Sparkles, MonitorSmartphone } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden min-h-screen flex items-center">
      {/* Glow Effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[600px] bg-blue-600/10 rounded-[100%] blur-[120px] -z-10 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-blue-900/20 rounded-[100%] blur-[120px] -z-10 pointer-events-none translate-x-1/3 translate-y-1/3" />
      
      <div className="container mx-auto px-6 z-10 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-left"
          >
            {/* Top Pill Badge */}
            <div className="inline-flex items-center rounded-full border border-border bg-secondary/30 px-3 py-1 text-sm font-medium text-muted-foreground mb-6 hover:bg-secondary/50 transition-colors cursor-pointer group">
              <span className="text-foreground mr-2">SkillForge 2.0 Beta is live</span>
              Claim your spot <ArrowRight className="w-3 h-3 ml-1 group-hover:translate-x-0.5 transition-transform" />
            </div>

            {/* Giant Title */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-foreground mb-6 leading-[1.1]">
              Give your career the platform it deserves
            </h1>

            {/* Subtitle */}
            <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-lg leading-relaxed">
              Professionally curated learning paths built with AI, industry experts, and a community that will help your skillset stand out.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4 mb-12">
              <Link href="/#waitlist" className="btn btn-primary btn-lg w-full sm:w-auto text-base rounded-full font-semibold px-6">
                Enroll Now
              </Link>
              <Link href="/#courses" className="btn btn-secondary btn-lg w-full sm:w-auto text-base rounded-full gap-2 border-transparent hover:border-border">
                <Code2 className="w-5 h-5" />
                Explore Courses
              </Link>
            </div>

            {/* Social Proof */}
            <div className="flex items-center space-x-4">
              <div className="flex -space-x-3">
                {[...Array(3)].map((_, i) => (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img 
                    key={i}
                    src={`https://i.pravatar.cc/100?img=${i + 15}`} 
                    alt="User" 
                    className="w-10 h-10 rounded-full border-2 border-background object-cover"
                  />
                ))}
              </div>
              <div className="flex flex-col">
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 text-foreground fill-foreground" />
                  ))}
                </div>
                <span className="text-xs text-muted-foreground mt-0.5 font-medium">Trusted by 12.5k+ learners worldwide</span>
              </div>
            </div>
          </motion.div>

          {/* Right Side Tilted Mockups */}
          <motion.div 
            initial={{ opacity: 0, x: 50, rotateY: -15, rotateZ: 5 }}
            animate={{ opacity: 1, x: 0, rotateY: -15, rotateZ: 5 }}
            transition={{ duration: 1, type: "spring" }}
            className="relative hidden lg:block perspective-[2000px]"
          >
            <div className="relative w-[120%] -right-[10%] rounded-xl border border-border/50 bg-background/80 backdrop-blur-xl shadow-2xl overflow-hidden aspect-[16/10] transform-gpu">
               <div className="absolute top-0 w-full h-8 bg-secondary border-b border-border/50 flex items-center px-4 space-x-1.5">
                 <div className="w-2.5 h-2.5 rounded-full bg-muted-foreground/50" />
                 <div className="w-2.5 h-2.5 rounded-full bg-muted-foreground/50" />
                 <div className="w-2.5 h-2.5 rounded-full bg-muted-foreground/50" />
               </div>
               <div className="p-8 pt-16 h-full flex flex-col gap-6">
                 <div className="flex gap-4">
                   <div className="w-1/2 h-32 rounded-lg border border-border/40 bg-card p-4 shadow-sm flex flex-col justify-between">
                      <div className="flex justify-between items-start">
                        <div className="w-8 h-8 rounded-full bg-primary mb-4 flex items-center justify-center">
                          <Code2 className="w-4 h-4 text-primary-foreground" />
                        </div>
                        <span className="text-[10px] font-bold text-green-500 bg-green-500/10 px-2 py-0.5 rounded-full">+24%</span>
                      </div>
                      <div>
                        <div className="w-24 h-3 bg-foreground/80 rounded mb-2" />
                        <div className="w-16 h-2 bg-muted-foreground/50 rounded" />
                      </div>
                   </div>
                   <div className="w-1/2 h-32 rounded-lg border border-border/40 bg-card p-4 shadow-sm flex flex-col justify-between">
                     <div className="flex justify-between items-start">
                        <div className="w-8 h-8 rounded-full bg-blue-500/10 mb-4 flex items-center justify-center">
                          <MonitorSmartphone className="w-4 h-4 text-blue-500" />
                        </div>
                      </div>
                      <div>
                        <div className="w-32 h-3 bg-foreground/80 rounded mb-2" />
                        <div className="w-20 h-2 bg-muted-foreground/50 rounded" />
                      </div>
                   </div>
                 </div>
                 <div className="w-full flex-grow rounded-lg border border-border/40 bg-card p-4 flex items-center justify-center">
                    <div className="text-center">
                      <Sparkles className="w-8 h-8 text-primary mx-auto mb-2" />
                      <div className="w-40 h-3 bg-foreground/80 rounded mx-auto mb-2" />
                      <div className="w-24 h-2 bg-muted-foreground/50 rounded mx-auto" />
                    </div>
                 </div>
               </div>
            </div>
            
            {/* Secondary stacked card effect */}
            <div className="absolute -bottom-10 -right-10 w-[80%] rounded-xl border border-border/30 bg-background/90 backdrop-blur-3xl shadow-2xl aspect-[16/9] -z-10 transform-gpu rotate-6" />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
