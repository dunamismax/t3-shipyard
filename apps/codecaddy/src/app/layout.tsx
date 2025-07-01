import '../styles/globals.css';

import { Inter } from 'next/font/google';

import Navbar from '../components/Navbar';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'CodeCaddy',
  description: 'Public code snippet sharing',
  icons: [{ rel: 'icon', url: '/favicon.ico' }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.className}`}>
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
