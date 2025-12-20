export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl sm:text-6xl font-bold mb-6">About Us</h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            We are the architects of enterprise value, transforming businesses through strategic solutions.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Mission</h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              We don't just advise. We re-engineer businesses for predictability, profitability, and speed. 
              We bridge the gap between Founder Vision and Operational Reality, transforming chaotic potential 
              into structured, scalable assets.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              We are not freelancers. We are your fractional C-Suite, providing end-to-end business solutions 
              that transform ideas into thriving enterprises.
            </p>

            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Philosophy</h2>
            <div className="bg-gray-50 rounded-xl p-8 mb-8">
              <p className="text-2xl font-bold text-gray-900 mb-2">Structure before Scale.</p>
              <p className="text-2xl font-bold text-gray-900 mb-2">Systems before Speed.</p>
              <p className="text-2xl font-bold text-gray-900 mb-4">Profit before Noise.</p>
            </div>

            <h2 className="text-4xl font-bold text-gray-900 mb-6">What We Do</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              We provide comprehensive business solutions including branding, software development, and SEO services. 
              Our integrated approach ensures that every aspect of your business is optimized for growth and success.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

