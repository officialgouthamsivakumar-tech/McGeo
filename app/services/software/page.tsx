'use client';

import { Code, Smartphone, Globe, Database, Cloud, Shield, Zap, Settings, BarChart, Users } from 'lucide-react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import AnimatedSection from '@/components/AnimatedSection';

export default function SoftwarePage() {
  const services = [
    {
      icon: Globe,
      title: 'Web Applications',
      description: 'Custom web applications built with modern technologies for scalability and performance.',
    },
    {
      icon: Smartphone,
      title: 'Mobile Apps',
      description: 'Native and cross-platform mobile applications for iOS and Android.',
    },
    {
      icon: Code,
      title: 'API Development',
      description: 'RESTful APIs and microservices architecture for seamless integrations.',
    },
    {
      icon: Database,
      title: 'System Integration',
      description: 'Connect your existing systems and streamline your workflows.',
    },
    {
      icon: Cloud,
      title: 'Cloud Solutions',
      description: 'Cloud migration, infrastructure setup, and managed cloud services for scalability.',
    },
    {
      icon: Shield,
      title: 'Cybersecurity',
      description: 'Security audits, vulnerability assessments, and implementation of security best practices.',
    },
    {
      icon: Zap,
      title: 'DevOps & Automation',
      description: 'CI/CD pipelines, infrastructure as code, and automated deployment solutions.',
    },
    {
      icon: Settings,
      title: 'Maintenance & Support',
      description: 'Ongoing maintenance, updates, and technical support for your software systems.',
    },
    {
      icon: BarChart,
      title: 'Data Analytics',
      description: 'Business intelligence solutions, data visualization, and analytics platforms.',
    },
    {
      icon: Users,
      title: 'Enterprise Software',
      description: 'Custom enterprise solutions including ERP, CRM, and workflow management systems.',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-br from-blue-500 to-blue-600 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl sm:text-6xl font-bold mb-6">Software Development</h1>
          <p className="text-xl text-blue-100 max-w-3xl">
            We build scalable, high-performance software solutions tailored to your business needs. 
            From web applications to mobile apps, we deliver cutting-edge technology that drives results.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Expertise</h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              We don't just write code—we engineer solutions. Our software development services 
              help businesses build robust, scalable systems that drive growth and efficiency.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Whether you need a custom web application, mobile app, or system integration, 
              we deliver technology solutions that align with your business objectives.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <AnimatedSection key={index} delay={index * 0.1}>
                  <motion.div
                    className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow"
                    whileHover={{ y: -5, scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <motion.div
                      className="inline-flex p-3 rounded-lg bg-blue-100 mb-4"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <Icon className="h-6 w-6 text-blue-600" />
                    </motion.div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {service.description}
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
          <h2 className="text-4xl font-bold mb-6">Ready to Build Your Solution?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can develop software that transforms your business operations.
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

