import { TextField } from '@mui/material';
import Image from 'next/image';

import SectionTitle from '../Text/SectionTitle';

export default function Contact() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 md:px-0 lg:py-20">
      <SectionTitle title="Contact Us" />
      <div className="flex flex-col md:flex-row justify-between space-x-10">
        <div className="">
          <ul className="mb-6 md:mb-0 md:max-w-2xl">
            <li className="flex w-full items-start">
              <div className="flex h-10 w-10 items-center justify-center rounded text-primary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6"
                >
                  <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
                  <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z" />
                </svg>
              </div>
              <div className="ml-4 mb-4">
                <h3 className="mb-2 text-lg font-medium text-gray-700">
                  PT ABLE EXCHANGE
                </h3>
                <p className="text-gray-600 dark:text-slate-400">
                  Jalan The Golf Island Boulevard, Ruko The Beach Blok A Nomor
                  19, Desa/Kelurahan Kamal Muara, Kec. Penjaringan, Kota Adm.
                  Jakarta Utara, Provinsi DKI Jakarta
                </p>

                <h3 className="mb-2 text-lg font-medium text-gray-700 mt-4">
                  Contact
                </h3>
                <p className="text-gray-600 dark:text-slate-400">
                  Mobile: +1 (123) 456-7890
                </p>
                <p className="text-gray-600 dark:text-slate-400">
                  Mail: admin@gmail.com
                </p>
                <h3 className="mb-2 text-lg font-medium text-gray-700 mt-4">
                  Working hours
                </h3>
                <p className="text-gray-600 dark:text-slate-400">
                  Monday - Friday: 08:00 - 17:00
                </p>
                <p className="text-gray-600 dark:text-slate-400">
                  Saturday &amp; Sunday: 08:00 - 12:00
                </p>
              </div>
            </li>
            <li className="flex w-full items-start">
              <div className="flex h-10 w-10 items-center justify-center rounded text-primary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6"
                >
                  <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
                  <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z" />
                </svg>
              </div>
              <div className="ml-4 mb-4">
                <h3 className="mb-2 text-lg font-medium text-gray-700">
                  PT BAILI MONEY CHANGER
                </h3>
                <p className="text-gray-600 dark:text-slate-400">
                  Jalan The Golf Island Boulevard, Ruko The Beach Blok A Nomor
                  19, Desa/Kelurahan Kamal Muara, Kec. Penjaringan, Kota Adm.
                  Jakarta Utara, Provinsi DKI Jakarta
                </p>

                <h3 className="mb-2 text-lg font-medium text-gray-700 mt-4">
                  Contact
                </h3>
                <p className="text-gray-600 dark:text-slate-400">
                  Mobile: +1 (123) 456-7890
                </p>
                <p className="text-gray-600 dark:text-slate-400">
                  Mail: admin@gmail.com
                </p>
                <h3 className="mb-2 text-lg font-medium text-gray-700 mt-4">
                  Working hours
                </h3>
                <p className="text-gray-600 dark:text-slate-400">
                  Monday - Friday: 08:00 - 17:00
                </p>
                <p className="text-gray-600 dark:text-slate-400">
                  Saturday &amp; Sunday: 08:00 - 12:00
                </p>
              </div>
            </li>
          </ul>
        </div>
        <div className="">
          <div className="p-2">
            <Image
              className="mx-auto lg:hidden"
              src="/ask.png"
              width={300}
              height={300}
              alt="ask"
            />
            <p className="text-lg font-semibold text-gray-600">
              Want to ask a question?
            </p>
          </div>
          <div className="bg-white p-2" id="form">
            <form id="contactForm">
              <TextField
                fullWidth
                label="Your Name"
                variant="outlined"
                className="mb-5"
              />
              <TextField
                fullWidth
                label="Your Email Address"
                variant="outlined"
                className="mb-5"
              />
              <TextField
                fullWidth
                label="Write your message here"
                multiline
                rows={4}
                className="mb-5"
              />
              <div className="">
                <button
                  type="button"
                  className="bg-secondary p-4 rounded text-white flex justify-center space-x-2 items-center w-full md:w-[200px]"
                >
                  <span>SEND MESSAGE</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
