'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const handleServicesClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setIsOpen(false); // Close mobile menu first
    
    const scrollToServices = () => {
      const servicesSection = document.getElementById('services');
      if (servicesSection) {
        const yOffset = -80; // Offset for sticky navbar
        const y = servicesSection.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    };
    
    if (pathname === '/') {
      // If on homepage, scroll to services section after a small delay to ensure menu closes
      setTimeout(scrollToServices, 150);
    } else {
      // If on another page, navigate to homepage first, then scroll
      router.push('/');
      // Wait for navigation, then scroll
      setTimeout(() => {
        scrollToServices();
        // Retry if element not found (page might still be loading)
        if (!document.getElementById('services')) {
          setTimeout(scrollToServices, 300);
        }
      }, 200);
    }
  };

  return (
    <motion.nav 
      className="bg-white sticky top-0 z-50 border-none"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link href="/" className="flex items-center">
              <Image
                src="/logo.png"
                alt="McGeo Logo"
                width={200}
                height={60}
                priority
                className="h-14 w-auto"
              />
            </Link>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <motion.div whileHover={{ y: -2 }} whileTap={{ y: 0 }}>
              <Link href="/" className="text-gray-700 hover:text-[#1976B5] font-medium transition-colors">
                Home
              </Link>
            </motion.div>
            <motion.div whileHover={{ y: -2 }} whileTap={{ y: 0 }}>
              <a 
                href="#services" 
                onClick={handleServicesClick}
                className="text-gray-700 hover:text-[#1976B5] font-medium transition-colors cursor-pointer"
              >
                Services
              </a>
            </motion.div>
            <motion.div whileHover={{ y: -2 }} whileTap={{ y: 0 }}>
              <Link href="/about" className="text-gray-700 hover:text-[#1976B5] font-medium transition-colors">
                About
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link href="/contact" className="bg-[#1976B5] text-white px-6 py-2 rounded-lg hover:bg-[#145E91] transition-colors font-medium">
                Contact
              </Link>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="md:hidden py-4 space-y-4"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.1 }}
              >
                <Link href="/" className="block text-gray-700 hover:text-[#1976B5] font-medium">
                  Home
                </Link>
              </motion.div>
              <motion.div
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <a 
                  href="#services" 
                  onClick={handleServicesClick}
                  className="block text-gray-700 hover:text-[#1976B5] font-medium cursor-pointer"
                >
                  Services
                </a>
              </motion.div>
              <motion.div
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <Link href="/about" className="block text-gray-700 hover:text-[#1976B5] font-medium">
                  About
                </Link>
              </motion.div>
              <motion.div
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                <Link href="/contact" className="block bg-[#1976B5] text-white px-6 py-2 rounded-lg hover:bg-[#145E91] transition-colors font-medium text-center">
                  Contact
                </Link>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}

