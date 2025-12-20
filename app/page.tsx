'use client';

import Link from 'next/link';
import { ArrowRight, Palette, Code, Search, Share2 } from 'lucide-react';
import { motion } from 'framer-motion';
import AnimatedSection from '@/components/AnimatedSection';

export default function Home() {
  const services = [
    {
      title: 'Branding',
      description: 'We create powerful brand identities that connect, engage, and drive business growth. From brand narrative to corporate identity, we craft visual systems that differentiate you from the competition.',
      icon: Palette,
      href: '/services/branding',
      color: 'from-orange-500 to-orange-600',
    },
    {
      title: 'Software Development',
      description: 'We build scalable, high-performance software solutions tailored to your business needs. From web applications to mobile apps, we deliver cutting-edge technology that drives results.',
      icon: Code,
      href: '/services/software',
      color: 'from-blue-500 to-blue-600',
    },
    {
      title: 'SEO Services',
      description: 'Boost your online visibility and drive organic traffic with our comprehensive SEO strategies. We optimize your digital presence to rank higher and attract the right audience.',
      icon: Search,
      href: '/services/seo',
      color: 'from-green-500 to-green-600',
    },
    {
      title: 'SMO Services',
      description: 'Amplify your brand presence across all major social media platforms. We create engaging content, build communities, and drive meaningful engagement that converts followers into customers.',
      icon: Share2,
      href: '/services/smo',
      color: 'from-purple-500 to-purple-600',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white min-h-[600px] flex items-center">
        {/* Background Video */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="https://videos.pexels.com/video-files/3045163/3045163-hd_1920_1080_30fps.mp4" type="video/mp4" />
            {/* Fallback gradient if video doesn't load */}
          </video>
          {/* Overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900/80 via-gray-800/70 to-gray-900/80"></div>
        </div>
        
        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 w-full">
          <AnimatedSection>
            <div className="max-w-3xl">
              <motion.h1 
                className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                Turning Vision into Reality
              </motion.h1>
              <motion.p 
                className="text-xl sm:text-2xl text-gray-200 mb-8 leading-relaxed"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                We provide end-to-end business solutions that transform ideas into thriving enterprises. 
                Whether you're launching a new venture or refining an established one, our services are 
                designed to maximize efficiency, increase profitability, and drive sustainable growth.
              </motion.p>
              <motion.div 
                className="flex flex-col sm:flex-row gap-4"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white text-gray-900 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
                >
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <a
                  href="#services"
                  onClick={(e) => {
                    e.preventDefault();
                    const servicesSection = document.getElementById('services');
                    if (servicesSection) {
                      servicesSection.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-gray-900 transition-colors cursor-pointer"
                >
                  Explore Services
                </a>
              </motion.div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="border-l-4 border-orange-500 pl-6">
              <p className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2 leading-tight">
                Structure before Scale.
              </p>
              <p className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2 leading-tight">
                Systems before Speed.
              </p>
              <p className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 leading-tight">
                Profit before Noise.
              </p>
              <p className="text-lg text-gray-600 italic">– Our Philosophy</p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
                Our Services
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                We deliver an integrated ecosystem of growth
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <AnimatedSection key={index} delay={index * 0.1}>
                  <motion.div
                    className="bg-gray-50 rounded-xl p-8 hover:shadow-xl transition-shadow border border-gray-200"
                    whileHover={{ y: -5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className={`inline-flex p-4 rounded-lg bg-gradient-to-br ${service.color} mb-6`}>
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    <Link
                      href={service.href}
                      className="inline-flex items-center text-orange-600 font-semibold hover:text-orange-700 transition-colors"
                    >
                      Know More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </motion.div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="max-w-3xl">
              <h2 className="text-4xl sm:text-5xl font-bold mb-6">
                Ready to Transform?
              </h2>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Let's discuss how we can architect your enterprise value and accelerate your growth trajectory.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-gray-900 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
              >
                Schedule Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
