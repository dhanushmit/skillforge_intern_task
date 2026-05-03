'use client';

import { motion } from 'framer-motion';
import { Star, Clock, BookOpen, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const courses = [
  {
    id: 1,
    title: 'Full-Stack React Development',
    category: 'Engineering',
    rating: 4.9,
    students: '12.5k',
    duration: '12 weeks',
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    color: 'bg-blue-500/10 text-blue-500',
  },
  {
    id: 2,
    title: 'Advanced UI/UX Design',
    category: 'Design',
    rating: 4.8,
    students: '8.2k',
    duration: '8 weeks',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    color: 'bg-purple-500/10 text-purple-500',
  },
  {
    id: 3,
    title: 'Machine Learning Fundamentals',
    category: 'Data Science',
    rating: 4.9,
    students: '15.1k',
    duration: '16 weeks',
    image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    color: 'bg-emerald-500/10 text-emerald-500',
  },
];

export default function Courses() {
  return (
    <section id="courses" className="py-24 relative bg-background border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div className="max-w-2xl">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl font-bold tracking-tight text-foreground mb-4"
            >
              Masterclasses
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-muted-foreground text-lg"
            >
              Expert-led courses designed to take you from beginner to job-ready in months.
            </motion.p>
          </div>
          <motion.button 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="hidden md:flex items-center text-primary font-semibold hover:underline transition-all mt-4 md:mt-0 group"
          >
            <span>View All Curriculums</span>
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course, index) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="rounded-xl border border-border bg-card text-card-foreground shadow-sm overflow-hidden flex flex-col group cursor-pointer hover:shadow-md transition-shadow"
            >
              {/* Image Container */}
              <div className="relative h-56 overflow-hidden border-b border-border">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out opacity-90 group-hover:opacity-100"
                />
                <div className="absolute top-4 left-4 z-20">
                  <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider backdrop-blur-md ${course.color}`}>
                    {course.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold tracking-tight text-foreground mb-4 group-hover:text-primary transition-colors">
                  {course.title}
                </h3>
                
                <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-8 font-medium">
                  <div className="flex items-center space-x-1.5 bg-secondary px-2.5 py-1 rounded-md border border-border">
                    <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
                    <span className="text-foreground">{course.rating}</span>
                  </div>
                  <div className="flex items-center space-x-1.5">
                    <BookOpen className="w-4 h-4" />
                    <span>{course.students}</span>
                  </div>
                  <div className="flex items-center space-x-1.5">
                    <Clock className="w-4 h-4" />
                    <span>{course.duration}</span>
                  </div>
                </div>

                <div className="mt-auto pt-6 border-t border-border flex items-center justify-between">
                  <span className="text-2xl font-bold tracking-tight text-foreground">$199</span>
                  <Link href="/#waitlist" className="btn btn-secondary">
                    Enroll Now
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <button className="md:hidden mt-8 w-full btn btn-outline h-12">
          View All Courses
        </button>
      </div>
    </section>
  );
}
