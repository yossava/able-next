import '@/styles/globals.css';

import { Nunito } from 'next/font/google';

import { DataProvider } from '@/context/StoreContext';
import MainLayout from '@/layouts/MainLayout/MainLayout';
import type { ChildrenProps } from '@/types';

export const metadata = {
  description:
    'lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quia!',
  keywords: 'money, exchange, money exchange',
  title: 'Able Group'
};

const nunito = Nunito({
  subsets: ['latin'],
  display: 'swap',
  adjustFontFallback: false
});

export default async function RootLayout({ children }: ChildrenProps) {
  return (
    <html lang="en">
      <body className={`${nunito.className}`}>
        <DataProvider>
          <MainLayout>{children}</MainLayout>
        </DataProvider>
      </body>
    </html>
  );
}
