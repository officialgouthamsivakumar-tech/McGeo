'use client';

import { Youtube, Instagram, Linkedin, Twitter, Facebook } from 'lucide-react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import AnimatedSection from '@/components/AnimatedSection';

export default function SMOPage() {
  const platforms = [
    {
      icon: Youtube,
      title: 'YouTube Marketing',
      description: 'Grow your channel and reach millions with strategic YouTube content creation, optimization, and promotion.',
      color: 'from-red-500 to-red-600',
    },
    {
      icon: Instagram,
      title: 'Instagram Marketing',
      description: 'Build a strong Instagram presence with engaging content, stories, reels, and influencer partnerships.',
      color: 'from-pink-500 to-purple-600',
    },
    {
      icon: Linkedin,
      title: 'LinkedIn Marketing',
      description: 'Establish thought leadership and generate B2B leads through professional LinkedIn content and networking.',
      color: 'from-blue-600 to-blue-700',
    },
    {
      icon: Twitter,
      title: 'Twitter Marketing',
      description: 'Engage with your audience in real-time through strategic Twitter campaigns and community building.',
      color: 'from-blue-400 to-blue-500',
    },
    {
      icon: Facebook,
      title: 'Facebook Marketing',
      description: 'Connect with your audience through engaging Facebook content, community management, and strategic campaigns.',
      color: 'from-blue-700 to-blue-800',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-br from-purple-500 to-purple-600 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl sm:text-6xl font-bold mb-6">Social Media Optimization (SMO)</h1>
          <p className="text-xl text-purple-100 max-w-3xl">
            Amplify your brand presence across all major social media platforms. We create engaging content, 
            build communities, and drive meaningful engagement that converts followers into customers.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our SMO Services</h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              We don't just post content—we build communities. Our social media optimization services 
              help you create a strong brand presence, engage with your audience, and drive business growth 
              across all major platforms.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              From content creation to community management, we handle every aspect of your social media 
              presence to ensure consistent brand messaging and maximum engagement.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {platforms.map((platform, index) => {
              const Icon = platform.icon;
              return (
                <AnimatedSection key={index} delay={index * 0.1}>
                  <motion.div
                    className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow"
                    whileHover={{ y: -5, scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <motion.div
                      className={`inline-flex p-3 rounded-lg bg-gradient-to-br ${platform.color} mb-4`}
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <Icon className="h-6 w-6 text-white" />
                    </motion.div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {platform.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {platform.description}
                    </p>
                  </motion.div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Grow Your Social Presence?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can amplify your brand across social media platforms and drive meaningful engagement.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-4 bg-white text-gray-900 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
          >
            Get Started
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}


