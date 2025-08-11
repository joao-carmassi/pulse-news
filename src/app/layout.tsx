import type { Metadata } from 'next';
import './globals.css';
import Footer from '@/components/footer';
import Navbar from '@/components/navbar';

export const metadata: Metadata = {
  title: 'Pulse News',
  description:
    'Stay ahead, stay informed. Get the latest stories and insights, all in one place',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className='dark'>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
