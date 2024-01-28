import '@/styles/globals.css';

import { Inter } from 'next/font/google';

import { DataProvider } from '@/context/StoreContext';
import MainLayout from '@/layouts/MainLayout/MainLayout';
import type { ChildrenProps } from '@/types';

export const metadata = {
  description:
    'lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quia!',
  keywords: 'money, exchange',
  title: 'Able Group'
};

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  adjustFontFallback: false
});

export default async function RootLayout({ children }: ChildrenProps) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <DataProvider>
          <MainLayout>{children}</MainLayout>
        </DataProvider>
      </body>
    </html>
  );
}
