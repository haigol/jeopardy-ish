import { Footer, Navbar } from '@/components';
import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = {
  title: 'CA 2025 Jeopardy-quiz',
  description: 'Det skal quizzes',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className='flex flex-col h-screen w-screen'>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
