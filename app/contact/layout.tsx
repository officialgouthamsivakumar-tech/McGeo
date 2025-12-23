import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact – McGeo Consultancy | Get in Touch",
  description: "Contact McGeo for business consulting, proposals, and inquiries. We provide branding, software development, SEO, and SMO services. Reach out via email, phone, or WhatsApp. Response within 24-48 hours.",
  keywords: "McGeo contact, business consultancy contact, consulting services, business proposals, contact McGeo, McGeo email, McGeo phone, business inquiry",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}


