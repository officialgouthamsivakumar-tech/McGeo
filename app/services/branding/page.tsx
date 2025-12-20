import { Palette, Target, Layers, Sparkles } from 'lucide-react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function BrandingPage() {
  const features = [
    {
      icon: Target,
      title: 'Brand Strategy & Positioning',
      description: 'We develop comprehensive brand strategies that align with your business goals and resonate with your target audience.',
    },
    {
      icon: Palette,
      title: 'Visual Identity Design',
      description: 'From logos to color palettes, we create cohesive visual systems that represent your brand authentically.',
    },
    {
      icon: Layers,
      title: 'Brand Guidelines',
      description: 'We provide detailed brand guidelines ensuring consistent application across all touchpoints.',
    },
    {
      icon: Sparkles,
      title: 'Brand Storytelling',
      description: 'We craft compelling brand narratives that connect emotionally with your audience and drive engagement.',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-br from-orange-500 to-orange-600 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl sm:text-6xl font-bold mb-6">Branding Services</h1>
          <p className="text-xl text-orange-100 max-w-3xl">
            We don't just design logos; we design market dominance. From brand narrative to corporate identity, 
            we craft visual systems that command respect and attract premium clients.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">What We Offer</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Branding isn't just about a logo—it's about creating an identity that connects, engages, 
                and drives business growth. We engineer powerful brand experiences that differentiate you 
                from the competition.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our branding services help you build a strong brand presence, establish authority in your 
                market, and create lasting connections with your customers.
              </p>
            </div>
            <div className="bg-gray-50 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Approach</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-orange-500 mr-3 text-xl">1.</span>
                  <div>
                    <h4 className="font-semibold text-gray-900">Discovery & Research</h4>
                    <p className="text-gray-600">Understanding your business, market, and audience</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-3 text-xl">2.</span>
                  <div>
                    <h4 className="font-semibold text-gray-900">Strategy Development</h4>
                    <p className="text-gray-600">Creating a comprehensive brand strategy</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-3 text-xl">3.</span>
                  <div>
                    <h4 className="font-semibold text-gray-900">Design & Execution</h4>
                    <p className="text-gray-600">Bringing your brand to life visually</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-3 text-xl">4.</span>
                  <div>
                    <h4 className="font-semibold text-gray-900">Guidelines & Support</h4>
                    <p className="text-gray-600">Ensuring consistent brand application</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
                  <div className="inline-flex p-3 rounded-lg bg-orange-100 mb-4">
                    <Icon className="h-6 w-6 text-orange-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Build Your Brand?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can create a powerful brand identity that drives your business forward.
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

