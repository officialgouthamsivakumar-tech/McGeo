'use client';

import { useState } from 'react';
import { Mail, Phone, Clock, Linkedin, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import AnimatedSection from '@/components/AnimatedSection';
import Script from 'next/script';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    subject: '',
    service: '',
    budget: '',
    timeline: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ 
          name: '', 
          company: '',
          email: '', 
          phone: '', 
          subject: '',
          service: '', 
          budget: '',
          timeline: '',
          message: '' 
        });
        // Reset status after 5 seconds
        setTimeout(() => setSubmitStatus('idle'), 5000);
      } else {
        setSubmitStatus('error');
        console.error('Error:', data.error);
      }
    } catch (error) {
      setSubmitStatus('error');
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* Schema Markup for SEO */}
      <Script
        id="contact-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "McGeo",
            "description": "McGeo provides end-to-end business solutions including branding, software development, SEO, and SMO services.",
            "url": "https://mcgeogroup.com",
            "telephone": "9605673444",
            "email": "sales@mcgeogroup.com",
            "address": {
              "@type": "PostalAddress",
              "addressCountry": "IN"
            },
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "9605673444",
              "contactType": "Sales",
              "email": "sales@mcgeogroup.com",
              "availableLanguage": "English"
            },
            "sameAs": [
              "https://www.linkedin.com/company/mcgeo"
            ]
          })
        }}
      />

      <div className="min-h-screen bg-white">
        <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection>
              <h1 className="text-5xl sm:text-6xl font-bold mb-6">Get In Touch</h1>
              <p className="text-xl text-gray-300 max-w-3xl">
                Ready to transform your business? Whether you need a proposal, have a business inquiry, 
                or want to discuss our services, we're here to help. Reach out and let's start a conversation 
                about how McGeo can accelerate your growth.
              </p>
            </AnimatedSection>
          </div>
        </section>

        <section className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Left Column - Contact Information */}
              <div>
                <AnimatedSection>
                  <h2 className="text-4xl font-bold text-gray-900 mb-6">Contact Information</h2>
                  <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                    We're here to help. Reach out to us through any of the following channels, 
                    and we'll get back to you as soon as possible. For urgent inquiries, call us directly.
                  </p>
                </AnimatedSection>

                <div className="space-y-6 mb-8">
                  <AnimatedSection delay={0.1}>
                    <div className="flex items-start">
                      <div className="flex-shrink-0">
                        <Mail className="h-6 w-6 text-orange-600" />
                      </div>
                      <div className="ml-4">
                        <h3 className="text-lg font-semibold text-gray-900">Email</h3>
                        <a 
                          href="mailto:sales@mcgeogroup.com" 
                          className="text-gray-600 hover:text-orange-600 transition-colors"
                        >
                          sales@mcgeogroup.com
                        </a>
                      </div>
                    </div>
                  </AnimatedSection>

                  <AnimatedSection delay={0.2}>
                    <div className="flex items-start">
                      <div className="flex-shrink-0">
                        <Phone className="h-6 w-6 text-orange-600" />
                      </div>
                      <div className="ml-4">
                        <h3 className="text-lg font-semibold text-gray-900">Phone</h3>
                        <a 
                          href="tel:9605673444" 
                          className="text-gray-600 hover:text-orange-600 transition-colors"
                        >
                          96056 73444
                        </a>
                        <p className="text-sm text-gray-500 mt-1">Click to call</p>
                      </div>
                    </div>
                  </AnimatedSection>

                  <AnimatedSection delay={0.3}>
                    <div className="flex items-start">
                      <div className="flex-shrink-0">
                        <MessageCircle className="h-6 w-6 text-orange-600" />
                      </div>
                      <div className="ml-4">
                        <h3 className="text-lg font-semibold text-gray-900">WhatsApp</h3>
                        <a 
                          href="https://wa.me/919605673444" 
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-600 hover:text-orange-600 transition-colors"
                        >
                          Chat on WhatsApp
                        </a>
                      </div>
                    </div>
                  </AnimatedSection>

                  <AnimatedSection delay={0.4}>
                    <div className="flex items-start">
                      <div className="flex-shrink-0">
                        <Clock className="h-6 w-6 text-orange-600" />
                      </div>
                      <div className="ml-4">
                        <h3 className="text-lg font-semibold text-gray-900">Office Hours</h3>
                        <p className="text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM IST</p>
                        <p className="text-gray-600">Saturday: 10:00 AM - 2:00 PM IST</p>
                      </div>
                    </div>
                  </AnimatedSection>

                </div>

                {/* Social Media Links */}
                <AnimatedSection delay={0.6}>
                  <div className="mb-8">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Connect With Us</h3>
                    <div className="flex space-x-4">
                      <a
                        href="https://www.linkedin.com/company/mcgeo"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
                        aria-label="LinkedIn"
                      >
                        <Linkedin className="h-5 w-5 text-gray-700" />
                      </a>
                    </div>
                  </div>
                </AnimatedSection>

                {/* Response Time CTA */}
                <AnimatedSection delay={0.7}>
                  <div className="bg-orange-50 border-l-4 border-orange-500 p-4 rounded">
                    <p className="text-sm text-gray-700">
                      <strong>Response Time:</strong> We reply within 24-48 hours. For urgent inquiries, 
                      call us directly at <a href="tel:9605673444" className="text-orange-600 font-semibold">96056 73444</a>.
                    </p>
                  </div>
                </AnimatedSection>

                {/* Google Maps */}
                <AnimatedSection delay={0.8}>
                  <div className="mt-8">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Find Us</h3>
                    <div className="w-full h-64 rounded-lg overflow-hidden">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15715.5!2d76.2673!3d9.9312!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080d514abec6ef%3A0xbd7ca70302775927!2sKochi%2C%20Kerala!5e0!3m2!1sen!2sin!4v1234567890"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        className="w-full h-full"
                        title="Rogus, Cochin Location"
                      ></iframe>
                    </div>
                  </div>
                </AnimatedSection>
              </div>

              {/* Right Column - Contact Form */}
              <div>
                <AnimatedSection delay={0.2}>
                  <div className="bg-gray-50 rounded-xl p-8 sticky top-24">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                          Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          id="name"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                          placeholder="Your full name"
                        />
                      </div>

                      <div>
                        <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                          Company Name
                        </label>
                        <input
                          type="text"
                          id="company"
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                          placeholder="Your company name"
                        />
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                          Email <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="email"
                          id="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                          placeholder="your.email@company.com"
                        />
                      </div>

                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                          Phone
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                          placeholder="+91 12345 67890"
                        />
                      </div>

                      <div>
                        <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                          Subject <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          id="subject"
                          required
                          value={formData.subject}
                          onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                          placeholder="What is this regarding?"
                        />
                      </div>

                      <div>
                        <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                          Service Interest
                        </label>
                        <select
                          id="service"
                          value={formData.service}
                          onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                        >
                          <option value="">Select a service</option>
                          <option value="branding">Branding</option>
                          <option value="software">Software Development</option>
                          <option value="seo">SEO Services</option>
                          <option value="smo">SMO Services</option>
                          <option value="multiple">Multiple Services</option>
                        </select>
                      </div>

                      <div>
                        <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-2">
                          Project Budget
                        </label>
                        <input
                          type="text"
                          id="budget"
                          value={formData.budget}
                          onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                          placeholder="e.g., ₹50,000 - ₹1 Lakh"
                        />
                      </div>

                      <div>
                        <label htmlFor="timeline" className="block text-sm font-medium text-gray-700 mb-2">
                          Timeline
                        </label>
                        <select
                          id="timeline"
                          value={formData.timeline}
                          onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                        >
                          <option value="">Select timeline</option>
                          <option value="asap">ASAP</option>
                          <option value="1-month">Within 1 Month</option>
                          <option value="1-3-months">1-3 Months</option>
                          <option value="3-6-months">3-6 Months</option>
                          <option value="6-months-plus">6+ Months</option>
                        </select>
                      </div>

                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                          Message <span className="text-red-500">*</span>
                        </label>
                        <textarea
                          id="message"
                          rows={5}
                          required
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                          placeholder="Tell us about your project or inquiry..."
                        />
                      </div>

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className={`w-full px-8 py-4 rounded-lg font-semibold transition-colors text-lg ${
                          isSubmitting
                            ? 'bg-gray-400 cursor-not-allowed text-white'
                            : 'bg-gray-900 text-white hover:bg-gray-800'
                        }`}
                      >
                        {isSubmitting ? 'Sending...' : 'Send Message'}
                      </button>

                      {submitStatus === 'success' && (
                        <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg text-sm">
                          ✓ Thank you! We've received your message and will get back to you within 24-48 hours.
                        </div>
                      )}

                      {submitStatus === 'error' && (
                        <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-lg text-sm">
                          ✗ Something went wrong. Please try again or call us directly at{' '}
                          <a href="tel:9605673444" className="font-semibold underline">96056 73444</a>.
                        </div>
                      )}

                      <p className="text-sm text-gray-500 text-center">
                        We reply within 24-48 hours. For urgent inquiries, call{' '}
                        <a href="tel:9605673444" className="text-orange-600 font-semibold">96056 73444</a>.
                      </p>
                    </form>
                  </div>
                </AnimatedSection>
              </div>
            </div>

            {/* Social Proof Section */}
            <AnimatedSection delay={0.9}>
              <div className="mt-24">
                <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Trusted by Leading Businesses</h2>
                <div className="bg-gray-50 rounded-xl p-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <p className="text-lg text-gray-700 italic mb-4">
                        "McGeo transformed our business operations with their strategic approach. 
                        Their team delivered exceptional results that exceeded our expectations."
                      </p>
                      <p className="text-sm font-semibold text-gray-900">— CEO, Tech Startup</p>
                    </div>
                    <div>
                      <p className="text-lg text-gray-700 italic mb-4">
                        "Working with McGeo was a game-changer. They helped us streamline our processes 
                        and achieve sustainable growth. Highly recommended!"
                      </p>
                      <p className="text-sm font-semibold text-gray-900">— Director, Manufacturing Company</p>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>
      </div>
    </>
  );
}
