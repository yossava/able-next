'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect } from 'react';

import MobileMenu from './MobileMenu';

export default function Navbar() {
  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.getElementById('navbar');
      if (navbar) {
        if (window.scrollY > 20) {
          navbar.classList.add('navbar-white');
        } else {
          navbar.classList.remove('navbar-white');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <header
      id="navbar"
      className="text-white text-md font-semibold fixed top-0 left-0 right-0 z-50 flex justify-center px-5"
    >
      <div className="container">
        <nav className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <a className="lg:mr-20 " href="/">
              <Image width={130} height={24} src="/able-logo.png" alt="Logo" />
            </a>
            <ul className="hidden lg:flex lg:items-center lg:w-auto lg:space-x-12 ">
              <li className="group relative pt-4 pb-4 has-child">
                <Link className="hover:text-tertiary transition-all" href="/">
                  Home
                </Link>
              </li>
              <li className="pt-4 pb-4">
                <Link
                  className="hover:text-tertiary transition-all"
                  href="/exchange"
                >
                  Rates
                </Link>
              </li>
              <li className="pt-4 pb-4">
                <Link
                  className="hover:text-tertiary transition-all"
                  href="/service"
                >
                  Services
                </Link>
              </li>
              <li className="pt-4 pb-4">
                <Link
                  className="hover:text-tertiary transition-all"
                  href="/blog"
                >
                  Blog
                </Link>
              </li>
              <li className="pt-4 pb-4">
                <Link
                  className="hover:text-tertiary transition-all"
                  href="/contact"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="hidden lg:block">
            <a
              className="btn-accent hover-up-2 flex justify-between items-center space-x-2"
              href="/"
            >
              <img
                alt="British pound"
                loading="lazy"
                width="50"
                height="50"
                decoding="async"
                data-nimg="1"
                className="rounded-full overflow-hidden object-cover w-5 h-5"
                src="https://region-api.pages.dev/flags/svg/GB.svg"
              />{' '}
              <span>English</span>
            </a>
          </div>
        </nav>
      </div>
      <MobileMenu />
    </header>
  );
}
