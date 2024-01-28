'use client';

import { createContext } from 'react';

import Footer from '@/components/Footer/Footer';
import Navbar from '@/components/Header/Navbar';
import type { ChildrenProps } from '@/types';

export const TestContext = createContext({});

export default function MainLayout({ children }: ChildrenProps) {
  return (
    <main className="w-full relative">
      <Navbar />
      {children}
      <section className="bg-grey">
        <Footer />
      </section>
    </main>
  );
}
