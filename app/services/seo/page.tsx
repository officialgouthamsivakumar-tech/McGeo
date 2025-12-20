import { Search, TrendingUp, FileText, Link as LinkIcon, DollarSign, Linkedin, Instagram, Facebook, Mail } from 'lucide-react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function SEOPage() {
  const services = [
    {
      icon: Search,
      title: 'Keyword Research',
      description: 'Comprehensive keyword analysis to identify opportunities and target the right audience.',
    },
    {
      icon: FileText,
      title: 'On-Page SEO',
      description: 'Optimize your website content, structure, and technical elements for search engines.',
    },
    {
      icon: TrendingUp,
      title: 'Content Strategy',
      description: 'Create SEO-optimized content that ranks well and engages your audience.',
    },
    {
      icon: LinkIcon,
      title: 'Link Building',
      description: 'Build high-quality backlinks to improve your domain authority and rankings.',
    },
    {
      icon: DollarSign,
      title: 'Google Ads',
      description: 'Maximize your ROI with strategic Google Ads campaigns that drive targeted traffic and conversions.',
    },
    {
      icon: Linkedin,
      title: 'LinkedIn Ads',
      description: 'Reach B2B audiences effectively with professional LinkedIn advertising campaigns.',
    },
    {
      icon: Instagram,
      title: 'Instagram Ads',
      description: 'Engage your audience with visually compelling Instagram ad campaigns that drive brand awareness.',
    },
    {
      icon: Facebook,
      title: 'Facebook Ads',
      description: 'Target your ideal customers with precision Facebook advertising strategies.',
    },
    {
      icon: Mail,
      title: 'Email Marketing',
      description: 'Build lasting customer relationships through strategic email marketing campaigns and automation.',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-br from-green-500 to-green-600 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl sm:text-6xl font-bold mb-6">SEO Services</h1>
          <p className="text-xl text-green-100 max-w-3xl">
            Boost your online visibility and drive organic traffic with our comprehensive SEO strategies. 
            We optimize your digital presence to rank higher and attract the right audience.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our SEO Approach</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Stop guessing. Start dominating. We align your online presence with actual demand through 
                comprehensive SEO strategies, keyword optimization, and competitive benchmarking.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our SEO services help you rank higher in search results, drive organic traffic, 
                and convert visitors into customers.
              </p>
            </div>
            <div className="bg-gray-50 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">What We Deliver</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 text-xl">✓</span>
                  <div>
                    <h4 className="font-semibold text-gray-900">Improved Rankings</h4>
                    <p className="text-gray-600">Higher visibility in search results</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 text-xl">✓</span>
                  <div>
                    <h4 className="font-semibold text-gray-900">Increased Traffic</h4>
                    <p className="text-gray-600">More organic visitors to your site</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 text-xl">✓</span>
                  <div>
                    <h4 className="font-semibold text-gray-900">Better Conversions</h4>
                    <p className="text-gray-600">Turn visitors into customers</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 text-xl">✓</span>
                  <div>
                    <h4 className="font-semibold text-gray-900">Long-term Growth</h4>
                    <p className="text-gray-600">Sustainable SEO results</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div key={index} className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
                  <div className="inline-flex p-3 rounded-lg bg-green-100 mb-4">
                    <Icon className="h-6 w-6 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Boost Your Rankings?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can improve your search engine visibility and drive organic growth.
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

