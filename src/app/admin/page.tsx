'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Users, MessageSquare, Mail, Calendar, TrendingUp, BarChart, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

interface WaitlistEntry {
  id: number;
  name: string;
  email: string;
  interest: string;
  created_at: string;
}

interface ContactMessage {
  id: number;
  name: string;
  email: string;
  message: string;
  created_at: string;
  status: string;
}

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState<'overview' | 'waitlist' | 'messages'>('overview');
  const [waitlistData, setWaitlistData] = useState<WaitlistEntry[]>([]);
  const [contactData, setContactData] = useState<ContactMessage[]>([]);
  const [loading, setLoading] = useState(true);
  const [authenticated, setAuthenticated] = useState(false);
  const [password, setPassword] = useState('');

  const adminSecret = 'admin';

  const handleAuth = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === adminSecret) {
      setAuthenticated(true);
      fetchData();
    } else {
      alert('Invalid password');
    }
  };

  const fetchData = async () => {
    setLoading(true);
    try {
      const [waitlistRes, contactRes] = await Promise.all([
        fetch(`/api/waitlist?secret=${adminSecret}`),
        fetch(`/api/contact?secret=${adminSecret}`)
      ]);

      const waitlistJson = await waitlistRes.json();
      const contactJson = await contactRes.json();

      setWaitlistData(waitlistJson.entries || []);
      setContactData(contactJson.messages || []);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
    setLoading(false);
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  if (!authenticated) {
    return (
      <div className="min-h-screen bg-slate-100 flex items-center justify-center p-6 text-slate-900">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-2xl p-8 shadow-xl max-w-md w-full border border-slate-200"
        >
          <h1 className="text-3xl font-bold text-center mb-2 text-slate-900">Admin Portal</h1>
          <p className="text-center text-slate-500 mb-8">Secure access for staff only</p>
          <form onSubmit={handleAuth}>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter admin password"
              className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none mb-6 text-slate-900 bg-white"
            />
            <button
              type="submit"
              className="w-full bg-slate-900 text-white py-3 rounded-lg font-semibold hover:bg-slate-800 transition-all shadow-md"
            >
              Sign In
            </button>
            <p className="text-sm text-slate-400 text-center mt-6">
              Demo Password: admin
            </p>
          </form>
          <div className="mt-8 pt-6 border-t border-slate-100 text-center">
            <Link href="/" className="text-blue-600 hover:text-blue-700 text-sm font-medium flex items-center justify-center gap-2">
              <ArrowLeft className="w-4 h-4" /> Return to Website
            </Link>
          </div>
        </motion.div>
      </div>
    );
  }

  const stats = [
    {
      label: 'Total Waitlist',
      value: waitlistData.length,
      icon: Users,
      color: 'bg-blue-100 text-blue-600',
    },
    {
      label: 'Total Messages',
      value: contactData.length,
      icon: MessageSquare,
      color: 'bg-purple-100 text-purple-600',
    },
    {
      label: 'Unread Messages',
      value: contactData.filter(msg => msg.status === 'unread').length,
      icon: Mail,
      color: 'bg-orange-100 text-orange-600',
    },
    {
      label: 'Today',
      value: waitlistData.filter(entry => 
        new Date(entry.created_at).toDateString() === new Date().toDateString()
      ).length,
      icon: Calendar,
      color: 'bg-emerald-100 text-emerald-600',
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      {/* Header */}
      <div className="bg-white border-b border-slate-200 sticky top-0 z-10 shadow-sm">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-slate-900">SkillForge Admin</h1>
            <Link href="/" className="text-blue-600 hover:text-blue-700 font-medium flex items-center gap-2">
              <ArrowLeft className="w-4 h-4" /> Back to Site
            </Link>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-8">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-sm border border-slate-200"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3 rounded-lg ${stat.color}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <TrendingUp className="w-5 h-5 text-emerald-500" />
                </div>
                <p className="text-slate-500 text-sm mb-1 font-medium">{stat.label}</p>
                <p className="text-3xl font-bold text-slate-900">{stat.value}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
          <div className="border-b border-slate-200 bg-slate-50/50">
            <div className="flex">
              {[
                { id: 'overview', label: 'Overview', icon: BarChart },
                { id: 'waitlist', label: 'Waitlist', icon: Users },
                { id: 'messages', label: 'Messages', icon: MessageSquare },
              ].map((tab) => {
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id as any)}
                    className={`flex-1 px-6 py-4 font-semibold transition-colors flex items-center justify-center space-x-2 ${
                      activeTab === tab.id
                        ? 'bg-white text-blue-600 border-b-2 border-blue-600 shadow-sm'
                        : 'text-slate-500 hover:text-slate-700 hover:bg-slate-100'
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    <span>{tab.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="p-6">
            {activeTab === 'overview' && (
              <div className="animate-in fade-in slide-in-from-bottom-2">
                <h3 className="text-xl font-bold mb-4 text-slate-900">Quick Overview</h3>
                <div className="space-y-4">
                  <div className="bg-blue-50 border border-blue-100 rounded-xl p-5">
                    <p className="font-bold text-blue-900">Waitlist Growth</p>
                    <p className="text-sm text-blue-700 mt-1 font-medium">
                      {waitlistData.length} people waiting • Last signup: {waitlistData.length > 0 ? formatDate(waitlistData[0].created_at) : 'N/A'}
                    </p>
                  </div>
                  <div className="bg-purple-50 border border-purple-100 rounded-xl p-5">
                    <p className="font-bold text-purple-900">Messages</p>
                    <p className="text-sm text-purple-700 mt-1 font-medium">
                      {contactData.filter(m => m.status === 'unread').length} unread messages requiring attention
                    </p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'waitlist' && (
              <div className="animate-in fade-in slide-in-from-bottom-2">
                <h3 className="text-xl font-bold mb-4 text-slate-900">Waitlist Entries ({waitlistData.length})</h3>
                <div className="overflow-x-auto rounded-lg border border-slate-200">
                  <table className="w-full text-left border-collapse">
                    <thead className="bg-slate-50 text-slate-600 text-sm">
                      <tr>
                        <th className="py-3 px-4 font-semibold border-b border-slate-200">Name</th>
                        <th className="py-3 px-4 font-semibold border-b border-slate-200">Email</th>
                        <th className="py-3 px-4 font-semibold border-b border-slate-200">Interest</th>
                        <th className="py-3 px-4 font-semibold border-b border-slate-200">Date</th>
                      </tr>
                    </thead>
                    <tbody className="text-sm text-slate-800">
                      {waitlistData.map((entry) => (
                        <tr key={entry.id} className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                          <td className="py-3 px-4 font-medium">{entry.name}</td>
                          <td className="py-3 px-4 text-slate-600">{entry.email}</td>
                          <td className="py-3 px-4">
                            <span className="bg-blue-100 text-blue-700 px-2.5 py-1 rounded-full text-xs font-bold">
                              {entry.interest}
                            </span>
                          </td>
                          <td className="py-3 px-4 text-slate-500">{formatDate(entry.created_at)}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  {waitlistData.length === 0 && (
                    <p className="text-center text-slate-500 py-12 font-medium">No waitlist entries yet</p>
                  )}
                </div>
              </div>
            )}

            {activeTab === 'messages' && (
              <div className="animate-in fade-in slide-in-from-bottom-2">
                <h3 className="text-xl font-bold mb-4 text-slate-900">Contact Messages ({contactData.length})</h3>
                <div className="space-y-4">
                  {contactData.map((message) => (
                    <div
                      key={message.id}
                      className={`border rounded-xl p-5 ${
                        message.status === 'unread'
                          ? 'border-blue-200 bg-blue-50 shadow-sm'
                          : 'border-slate-200 bg-white'
                      }`}
                    >
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <p className="font-bold text-slate-900">{message.name}</p>
                          <p className="text-sm text-slate-500">{message.email}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-xs font-medium text-slate-400">{formatDate(message.created_at)}</p>
                          {message.status === 'unread' && (
                            <span className="inline-block mt-1 bg-red-100 text-red-600 border border-red-200 text-xs px-2.5 py-0.5 rounded-full font-bold">
                              New
                            </span>
                          )}
                        </div>
                      </div>
                      <p className="text-slate-700 bg-white p-4 rounded-lg border border-slate-100">{message.message}</p>
                    </div>
                  ))}
                  {contactData.length === 0 && (
                    <p className="text-center text-slate-500 py-12 font-medium">No messages yet</p>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
