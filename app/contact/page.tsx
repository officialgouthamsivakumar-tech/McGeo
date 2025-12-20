'use client';

import { Mail, Phone, Clock, Linkedin, MessageCircle } from 'lucide-react';
import AnimatedSection from '@/components/AnimatedSection';
import Script from 'next/script';

export default function ContactPage() {

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
            "telephone": "9566867444",
            "email": "sales@mcgeogroup.com",
            "address": {
              "@type": "PostalAddress",
              "addressCountry": "IN"
            },
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "9566867444",
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
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Contact Information Section - Centered */}
            <AnimatedSection>
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">Contact Information</h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
                  We're here to help. Reach out to us through any of the following channels, 
                  and we'll get back to you as soon as possible. For urgent inquiries, call us directly.
                </p>
              </div>
            </AnimatedSection>

            {/* Contact Cards Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              <AnimatedSection delay={0.1}>
                <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow text-center">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-orange-100 rounded-full">
                      <Mail className="h-6 w-6 text-orange-600" />
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Email</h3>
                  <a 
                    href="mailto:sales@mcgeogroup.com" 
                    className="text-gray-600 hover:text-orange-600 transition-colors text-sm break-all"
                  >
                    sales@mcgeogroup.com
                  </a>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.2}>
                <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow text-center">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-orange-100 rounded-full">
                      <Phone className="h-6 w-6 text-orange-600" />
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Phone</h3>
                  <a 
                    href="tel:9566867444" 
                    className="text-gray-600 hover:text-orange-600 transition-colors text-sm block"
                  >
                    +91 95668 67444
                  </a>
                  <p className="text-xs text-gray-500 mt-1">Click to call</p>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.3}>
                <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow text-center">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-orange-100 rounded-full">
                      <MessageCircle className="h-6 w-6 text-orange-600" />
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">WhatsApp</h3>
                  <a 
                    href="https://wa.me/919566867444" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-orange-600 transition-colors text-sm inline-block"
                  >
                    Chat on WhatsApp
                  </a>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.4}>
                <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow text-center">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-orange-100 rounded-full">
                      <Clock className="h-6 w-6 text-orange-600" />
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Office Hours</h3>
                  <p className="text-gray-600 text-sm">Mon - Fri: 9 AM - 6 PM</p>
                  <p className="text-gray-600 text-sm">Sat: 10 AM - 2 PM</p>
                  <p className="text-xs text-gray-500 mt-1">IST</p>
                </div>
              </AnimatedSection>
            </div>

            {/* Response Time & Social Links */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <AnimatedSection delay={0.5}>
                <div className="bg-orange-50 border-l-4 border-orange-500 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Response Time</h3>
                  <p className="text-sm text-gray-700">
                    We reply within 24-48 hours. For urgent inquiries, 
                    call us directly at <a href="tel:9566867444" className="text-orange-600 font-semibold">+91 95668 67444</a>.
                  </p>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.6}>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Connect With Us</h3>
                  <div className="flex space-x-4">
                    <a
                      href="https://www.linkedin.com/company/mcgeo"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-white rounded-lg hover:bg-gray-100 transition-colors shadow-sm"
                      aria-label="LinkedIn"
                    >
                      <Linkedin className="h-5 w-5 text-gray-700" />
                    </a>
                  </div>
                </div>
              </AnimatedSection>
            </div>

            {/* Google Maps */}
            <AnimatedSection delay={0.7}>
              <div className="mb-12">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Find Us</h3>
                <div className="w-full h-96 rounded-xl overflow-hidden shadow-lg">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15715.5!2d76.2673!3d9.9312!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080d514abec6ef%3A0xbd7ca70302775927!2sKochi%2C%20Kerala!5e0!3m2!1sen!2sin!4v1234567890"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full h-full"
                    title="McGeo Location"
                  ></iframe>
                </div>
              </div>
            </AnimatedSection>

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
