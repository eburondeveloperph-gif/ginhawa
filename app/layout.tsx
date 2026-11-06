import type {Metadata} from 'next';
import './globals.css'; // Global styles

export const metadata: Metadata = {
  title: 'Ginhawa App - Professional Care & Natural Healing',
  description: 'Ginhawa App connects clients with certified and verified therapists for massage therapy, pain relief, body alignment, rehabilitation, and home wellness services across the Philippines.',
  openGraph: {
    title: 'Ginhawa App - Professional Care & Natural Healing',
    description: 'Ginhawa App connects clients with certified and verified therapists for massage therapy, pain relief, body alignment, rehabilitation, and home wellness services across the Philippines.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ginhawa App - Professional Care & Natural Healing',
    description: 'Ginhawa App connects clients with certified and verified therapists for massage therapy, pain relief, body alignment, rehabilitation, and home wellness services across the Philippines.',
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
