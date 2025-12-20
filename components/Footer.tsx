import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">McGeo</h3>
            <p className="text-gray-400">
              Transforming ideas into thriving enterprises through strategic solutions.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="/services/branding" className="hover:text-white transition-colors">
                  Branding
                </Link>
              </li>
              <li>
                <Link href="/services/software" className="hover:text-white transition-colors">
                  Software
                </Link>
              </li>
              <li>
                <Link href="/services/seo" className="hover:text-white transition-colors">
                  SEO
                </Link>
              </li>
              <li>
                <Link href="/services/smo" className="hover:text-white transition-colors">
                  SMO
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <Link href="/contact" className="hover:text-white transition-colors">
                Contact
              </Link>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Email: sales@mcgeogroup.com</li>
              <li>Phone: 96056 73444</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} McGeo. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

