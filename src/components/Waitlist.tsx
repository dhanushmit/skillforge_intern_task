'use client';

import { useState } from 'react';
import { CheckCircle2 } from 'lucide-react';

export default function Waitlist() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const res = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: 'Anonymous', email, interest: 'General' }),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus('success');
        setMessage(data.message || 'You have been added to the waitlist!');
        setEmail('');
      } else {
        setStatus('error');
        setMessage(data.error || 'Something went wrong. Please try again.');
      }
    } catch (err) {
      console.error(err);
      setStatus('error');
      setMessage('Failed to connect to the server.');
    }
  };

  return (
    <section id="waitlist" className="py-24 bg-background border-t border-border">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center rounded-2xl border border-border bg-card p-8 md:p-12 shadow-sm relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10" />
          
          <h2 className="text-3xl font-bold tracking-tight text-foreground mb-4">
            Ready to get started?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Join the waitlist to get early access before we launch to the public.
          </p>

          {status === 'success' ? (
            <div className="flex flex-col items-center justify-center py-4">
              <CheckCircle2 className="w-12 h-12 text-primary mb-4" />
              <p className="text-foreground font-medium">{message}</p>
              <button 
                onClick={() => setStatus('idle')}
                className="btn btn-outline mt-6"
              >
                Join with another email
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row max-w-md mx-auto gap-3">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 flex-grow"
                placeholder="Enter your email"
              />
              <button
                type="submit"
                disabled={status === 'loading'}
                className="btn btn-primary sm:w-auto"
              >
                {status === 'loading' ? 'Joining...' : 'Join Waitlist'}
              </button>
            </form>
          )}
          {status === 'error' && (
            <p className="text-destructive text-sm mt-4">{message}</p>
          )}
        </div>
      </div>
    </section>
  );
}
