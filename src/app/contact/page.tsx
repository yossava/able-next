'use client';

import { TextField } from '@mui/material';
import Image from 'next/image';

import Card from '@/components/Card/Card';
import { useData } from '@/context/StoreContext';

export default function Contact() {
  const { data, loading } = useData();

  if (!data && !loading) {
    return (
      <Card className="text-red-400">
        Failed to fetch data, please refresh the page
      </Card>
    );
  }

  if (loading || !data) {
    return (
      <Card className="flex justify-start items-center space-x-3 text-gray-600">
        <img src="/loading.svg" className="w-4 animate-spin" alt="" srcSet="" />
        <span>Fetching data...</span>
      </Card>
    );
  }

  return (
    <>
      <div
        className="bg-[url(/blog-placeholder.jpeg)] bg-no-repeat bg-center
         min-h-[300px] py-20 relative flex justify-center flex-col z-[1]
          before:absolute before:left-0 before:top-0 before:w-full 
          before:h-full before:bg-black/70 before:z-[-1] before:opacity-[0.7] bg-cover"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-12">
            <div className="col-span-12">
              <div className="text-center">
                <h2 className="text-3xl text-white mb-2">Contact</h2>
                <ul>
                  <li
                    className="inline-block px-[5px] text-xl relative font-heading-font sm:text-[18px]
                                after:content-['/'] after:relative after:left-[7px] after:text-white"
                  >
                    <a
                      href="/"
                      className="text-white text-[20px] transition-all hover:text-secondary"
                    >
                      Home
                    </a>
                  </li>
                  <li className="inline-block px-[5px] text-[20px] relative font-heading-font sm:text-[18px] ">
                    <span className="text-tertiary">Contact</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="office-location py-section bg-white p-3 pt-10 lg:pt-20 text-gray-700">
        <div className="mx-auto max-w-5xl">
          <div className="grid grid-cols-12 gap-8">
            {data &&
              data?.map((d: any) => (
                <div
                  key={d.id}
                  className="single-office col-span-12 md:col-span-6"
                >
                  <div className="rounded-xl overflow-hidden">
                    <figure className="text-center relative group">
                      <img
                        className="w-full"
                        src={d.id === 1 ? '/pik.webp' : '/cpm.webp'}
                        alt=""
                      />{' '}
                      <figcaption className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white font-medium border-2 border-white px-10 min-w-max py-3 rounded-lg group-hover:bg-primary group-hover:text-white">
                        {d.name}
                      </figcaption>
                    </figure>
                  </div>{' '}
                  <div className="border-2 h-[350px] border-[#f4f4f4] rounded-xl p-8 mt-8">
                    <div className="space-y-5">
                      <div className="flex items-center">
                        <div className="w-12 h-12 flex-shrink-0 rounded-md bg-[#f4f4f4] text-center mr-4 text-heading-light flex justify-center items-center">
                          <svg
                            stroke="currentColor"
                            fill="none"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            height="22"
                            width="22"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                          </svg>
                        </div>{' '}
                        <a href="/" className="hover:text-primary">
                          {d.phone}
                        </a>
                      </div>{' '}
                      <div className="flex items-center">
                        <div className="w-12 h-12 flex-shrink-0 rounded-md bg-[#f4f4f4] text-center mr-4 text-heading-light flex justify-center items-center">
                          <svg
                            stroke="currentColor"
                            fill="currentColor"
                            strokeWidth="0"
                            viewBox="0 0 24 24"
                            height="22"
                            width="22"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M20 4H4c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2zm0 2v.511l-8 6.223-8-6.222V6h16zM4 18V9.044l7.386 5.745a.994.994 0 0 0 1.228 0L20 9.044 20.002 18H4z" />
                          </svg>
                        </div>{' '}
                        <a
                          href="mailto:example@mail.com"
                          className="hover:text-primary"
                        >
                          {d.email}
                        </a>
                      </div>{' '}
                      <div className="flex items-center">
                        <div className="w-12 h-12 flex-shrink-0 rounded-md bg-[#f4f4f4] text-center mr-4 text-heading-light flex justify-center items-center">
                          <svg
                            stroke="currentColor"
                            fill="none"
                            strokeWidth="0"
                            viewBox="0 0 24 24"
                            height="22"
                            width="22"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                            />
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                          </svg>
                        </div>{' '}
                        <div className="">
                          <p className="font-bold">{d.company_name}</p>
                          <p>{d.address}</p>
                        </div>
                      </div>
                    </div>{' '}
                  </div>
                  <div className="google-map mt-8">
                    <iframe
                      title="map"
                      src={
                        d.id === 1
                          ? 'https://www.google.com/maps/embed/v1/place?q=+++Photo+Photo+Photo+Photo+Photo+Photo+Photo+Photo+Photo++More+photos+Street+View+PT+Able+Exchange+(Money+Changer+/+jasa+penukaran+uang+asing)+di+cp+mall&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8'
                          : 'https://www.google.com/maps/embed/v1/place?q=Baiili+Money+Changer+(Jasa+Penukaran+Uang+Asing),+Golf+Island,+Pantai+Indah+Kapuk+Street,+RT.6/RW.2,+North+Jakarta+City,+Jakarta,+Indonesia&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8'
                      }
                      className="w-full h-[300px] md:h-[550px]"
                    />
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>

      <div className="bg-white px-3 pb-20 pt-10 text-gray-700">
        <div className="max-w-5xl mx-auto">
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
    </>
  );
}
