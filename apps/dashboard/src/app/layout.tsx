import '../styles/globals.css';

import { Inter } from 'next/font/google';

import { TRPCReactProvider } from '~/trpc/react';
import Navbar from '../components/Navbar';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Dashboard App',
  description: 'T3 Shipyard Dashboard App',
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
        <TRPCReactProvider>
          <Navbar />
          {children}
        </TRPCReactProvider>
      </body>
    </html>
  );
}
