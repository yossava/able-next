export default function Blog() {
  return (
    <div className="bg-white">
      <div
        className="bg-[url(/blog-placeholder.jpeg)] bg-no-repeat bg-center
         min-h-[300px] py-20 relative flex justify-center flex-col z-[1]
          before:absolute before:left-0 before:top-0 before:w-full 
          before:h-full before:bg-black/70 before:z-[-1] before:opacity-[0.7] bg-cover"
      >
        <div className="container mx-auto">
          <div className="grid grid-cols-12">
            <div className="col-span-12">
              <div className="text-center">
                <h2 className="text-3xl text-white mb-2">Article</h2>
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
                    <span className="text-tertiary">Blog</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="py-10">
        <div className="container mx-auto p-3">
          <div className="grid grid-cols-12 gap-3">
            <div className="col-span-12 lg:col-span-8">
              <div className="">
                <div className="mb-4 bg-white p-2 rounded lg:p-4">
                  <img className="w-full" src="/blog-placeholder.jpeg" alt="" />
                  <div className="overflow-hidden my-4">
                    <ul className="flex justify-start items-center space-x-2 text-gray-500 text-xs">
                      <li className="">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-3 h-3 inline mr-1"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                          />
                        </svg>
                        By{' '}
                        <a
                          className="transition-all hover:text-secondary"
                          href="/"
                        >
                          Jenny Watson
                        </a>{' '}
                      </li>
                      <li className="">
                        <i className="relative top-0 mr-[3px] text-sm text-[#666]  fi flaticon-comment-white-oval-bubble" />
                        Comments 35{' '}
                      </li>
                      <li className="">
                        <i className="relative top-0 mr-[3px] text-sm text-[#666]  fi flaticon-calendar-1" />
                        24 Jun 2023
                      </li>
                    </ul>
                  </div>
                  <h3 className="text-xl font-bold transition-all mb-[20px] group">
                    <a
                      href="/"
                      className="group-hover:text-secondary transition-all text-gray-700"
                    >
                      8 Mistakes Founders Make When Starting a Business.
                    </a>
                  </h3>
                  <p className="text-[#666] leading-[24px] text-sm mb-[20px]">
                    Consulting is a great career path if you want to build a
                    broad skill set that includes everything from critical
                    thinking and strategic planning to communications. If you
                    love rising to a challenge.
                  </p>
                  <a
                    href="/"
                    className="text-gray-700 text-sm flex  items-center font-semibold transition-all hover:text-secondary"
                  >
                    <span>Read More</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-4 h-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m8.25 4.5 7.5 7.5-7.5 7.5"
                      />
                    </svg>
                  </a>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div className="relative bg-white p-2 rounded lg:p-4">
                    <div
                      className="relative 
                            before:absolute before:left-0 before:top-0 before:w-full before:h-full 
                            before:bg-black/50 before:duration-150 before:opacity-0 before:invisible
                             hover:before:opacity-100 hover:before:visible"
                    >
                      <div className="wpo-minimal-img">
                        <img
                          className="w-full"
                          src="/blog-placeholder.jpeg"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="my-2">
                      <ul className="hidden lg:flex">
                        <li className="text-[14px] font-medium uppercase float-left col:float-none col:block col:ml-[0px] col:mb-[5px] text-gray-500 pl-[20px] relative before:absolute before:left-0 before:top-[50%] before:w-[7px] before:h-[7px] before:rounded-[50%] before:content-[''] before:translate before:-translate-y-1/2 before:bg-tertiary z-10 before:-z-10">
                          <i className="relative top-0 mr-[3px] text-sm text-[#666]  fi flaticon-comment-white-oval-bubble" />
                          Comments 35{' '}
                        </li>
                        <li className="text-[14px] font-medium uppercase float-left col:float-none col:block col:ml-[0px] col:mb-[5px] text-[#666] ml-[20px] pl-[20px] relative before:absolute before:left-0 before:top-[50%] before:w-[7px] before:h-[7px] before:rounded-[50%] before:content-[''] before:translate before:-translate-y-1/2 before:bg-tertiary z-10 before:-z-10">
                          <i className="relative top-0 mr-[3px] text-sm text-[#666]  fi flaticon-calendar-1" />
                          24 Jun 2023
                        </li>
                      </ul>
                    </div>
                    <h3 className="text-xl font-bold transition-all mb-[20px] group">
                      <a
                        href="/"
                        className="group-hover:text-secondary transition-all text-gray-700"
                      >
                        Lorem ipsum dolor sit amet.
                      </a>
                    </h3>
                    <p className="text-[#666] leading-[24px] text-sm mb-[20px]">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Corrupti, nemo.
                    </p>
                    <a
                      href="/"
                      className="text-gray-700 text-sm flex  items-center font-semibold transition-all hover:text-secondary"
                    >
                      <span>Read More</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-4 h-4"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m8.25 4.5 7.5 7.5-7.5 7.5"
                        />
                      </svg>
                    </a>
                  </div>
                  <div className="relative bg-white p-2 rounded lg:p-4">
                    <div
                      className="relative 
                            before:absolute before:left-0 before:top-0 before:w-full before:h-full 
                            before:bg-black/50 before:duration-150 before:opacity-0 before:invisible
                             hover:before:opacity-100 hover:before:visible"
                    >
                      <div className="wpo-minimal-img">
                        <img
                          className="w-full"
                          src="/blog-placeholder.jpeg"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="my-2">
                      <ul className="hidden lg:flex">
                        <li className="text-[14px] font-medium uppercase float-left col:float-none col:block col:ml-[0px] col:mb-[5px] text-gray-500 pl-[20px] relative before:absolute before:left-0 before:top-[50%] before:w-[7px] before:h-[7px] before:rounded-[50%] before:content-[''] before:translate before:-translate-y-1/2 before:bg-tertiary z-10 before:-z-10">
                          <i className="relative top-0 mr-[3px] text-sm text-[#666]  fi flaticon-comment-white-oval-bubble" />
                          Comments 35{' '}
                        </li>
                        <li className="text-[14px] font-medium uppercase float-left col:float-none col:block col:ml-[0px] col:mb-[5px] text-[#666] ml-[20px] pl-[20px] relative before:absolute before:left-0 before:top-[50%] before:w-[7px] before:h-[7px] before:rounded-[50%] before:content-[''] before:translate before:-translate-y-1/2 before:bg-tertiary z-10 before:-z-10">
                          <i className="relative top-0 mr-[3px] text-sm text-[#666]  fi flaticon-calendar-1" />
                          24 Jun 2023
                        </li>
                      </ul>
                    </div>
                    <h3 className="text-xl font-bold transition-all mb-[20px] group">
                      <a
                        href="/"
                        className="group-hover:text-secondary transition-all text-gray-700"
                      >
                        Lorem ipsum dolor sit amet.
                      </a>
                    </h3>
                    <p className="text-[#666] leading-[24px] text-sm mb-[20px]">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Corrupti, nemo.
                    </p>
                    <a
                      href="/"
                      className="text-gray-700 text-sm flex  items-center font-semibold transition-all hover:text-secondary"
                    >
                      <span>Read More</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-4 h-4"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m8.25 4.5 7.5 7.5-7.5 7.5"
                        />
                      </svg>
                    </a>
                  </div>
                  <div className="relative bg-white p-2 rounded lg:p-4">
                    <div
                      className="relative 
                            before:absolute before:left-0 before:top-0 before:w-full before:h-full 
                            before:bg-black/50 before:duration-150 before:opacity-0 before:invisible
                             hover:before:opacity-100 hover:before:visible"
                    >
                      <div className="wpo-minimal-img">
                        <img
                          className="w-full"
                          src="/blog-placeholder.jpeg"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="my-2">
                      <ul className="hidden lg:flex">
                        <li className="text-[14px] font-medium uppercase float-left col:float-none col:block col:ml-[0px] col:mb-[5px] text-gray-500 pl-[20px] relative before:absolute before:left-0 before:top-[50%] before:w-[7px] before:h-[7px] before:rounded-[50%] before:content-[''] before:translate before:-translate-y-1/2 before:bg-tertiary z-10 before:-z-10">
                          <i className="relative top-0 mr-[3px] text-sm text-[#666]  fi flaticon-comment-white-oval-bubble" />
                          Comments 35{' '}
                        </li>
                        <li className="text-[14px] font-medium uppercase float-left col:float-none col:block col:ml-[0px] col:mb-[5px] text-[#666] ml-[20px] pl-[20px] relative before:absolute before:left-0 before:top-[50%] before:w-[7px] before:h-[7px] before:rounded-[50%] before:content-[''] before:translate before:-translate-y-1/2 before:bg-tertiary z-10 before:-z-10">
                          <i className="relative top-0 mr-[3px] text-sm text-[#666]  fi flaticon-calendar-1" />
                          24 Jun 2023
                        </li>
                      </ul>
                    </div>
                    <h3 className="text-xl font-bold transition-all mb-[20px] group">
                      <a
                        href="/"
                        className="group-hover:text-secondary transition-all text-gray-700"
                      >
                        Lorem ipsum dolor sit amet.
                      </a>
                    </h3>
                    <p className="text-[#666] leading-[24px] text-sm mb-[20px]">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Corrupti, nemo.
                    </p>
                    <a
                      href="/"
                      className="text-gray-700 text-sm flex  items-center font-semibold transition-all hover:text-secondary"
                    >
                      <span>Read More</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-4 h-4"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m8.25 4.5 7.5 7.5-7.5 7.5"
                        />
                      </svg>
                    </a>
                  </div>
                  <div className="relative bg-white p-2 rounded lg:p-4">
                    <div
                      className="relative 
                            before:absolute before:left-0 before:top-0 before:w-full before:h-full 
                            before:bg-black/50 before:duration-150 before:opacity-0 before:invisible
                             hover:before:opacity-100 hover:before:visible"
                    >
                      <div className="wpo-minimal-img">
                        <img
                          className="w-full"
                          src="/blog-placeholder.jpeg"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="my-2">
                      <ul className="hidden lg:flex">
                        <li className="text-[14px] font-medium uppercase float-left col:float-none col:block col:ml-[0px] col:mb-[5px] text-gray-500 pl-[20px] relative before:absolute before:left-0 before:top-[50%] before:w-[7px] before:h-[7px] before:rounded-[50%] before:content-[''] before:translate before:-translate-y-1/2 before:bg-tertiary z-10 before:-z-10">
                          <i className="relative top-0 mr-[3px] text-sm text-[#666]  fi flaticon-comment-white-oval-bubble" />
                          Comments 35{' '}
                        </li>
                        <li className="text-[14px] font-medium uppercase float-left col:float-none col:block col:ml-[0px] col:mb-[5px] text-[#666] ml-[20px] pl-[20px] relative before:absolute before:left-0 before:top-[50%] before:w-[7px] before:h-[7px] before:rounded-[50%] before:content-[''] before:translate before:-translate-y-1/2 before:bg-tertiary z-10 before:-z-10">
                          <i className="relative top-0 mr-[3px] text-sm text-[#666]  fi flaticon-calendar-1" />
                          24 Jun 2023
                        </li>
                      </ul>
                    </div>
                    <h3 className="text-xl font-bold transition-all mb-[20px] group">
                      <a
                        href="/"
                        className="group-hover:text-secondary transition-all text-gray-700"
                      >
                        Lorem ipsum dolor sit amet.
                      </a>
                    </h3>
                    <p className="text-[#666] leading-[24px] text-sm mb-[20px]">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Corrupti, nemo.
                    </p>
                    <a
                      href="/"
                      className="text-gray-700 text-sm flex  items-center font-semibold transition-all hover:text-secondary"
                    >
                      <span>Read More</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-4 h-4"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m8.25 4.5 7.5 7.5-7.5 7.5"
                        />
                      </svg>
                    </a>
                  </div>
                </div>

                <div className="mt-5 text-center">
                  <ul className="inline-block overflow-hidden text-center">
                    <li className="float-left mr-[10px]">
                      <a
                        href="/"
                        aria-label="Previous"
                        className=" font-bold w-[50px] h-[50px] leading-[50px] text-[#232f4b] bg-[#ebf4fc] transition-all hover:bg-tertiary hover:text-white flex justify-center items-center"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-6 h-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15.75 19.5 8.25 12l7.5-7.5"
                          />
                        </svg>
                      </a>
                    </li>
                    <li className="active float-left mr-[10px]">
                      <a
                        href="/"
                        className=" font-bold w-[50px] h-[50px] leading-[50px]
                                            text-white block bg-tertiary transition-all hover:bg-tertiary"
                      >
                        1
                      </a>
                    </li>
                    <li className="float-left mr-[10px]">
                      <a
                        href="/"
                        className=" font-bold w-[50px] h-[50px] leading-[50px] text-[#232f4b] block bg-[#ebf4fc] transition-all hover:bg-tertiary hover:text-white"
                      >
                        2
                      </a>
                    </li>
                    <li className="float-left mr-[10px]">
                      <a
                        href="/"
                        className=" font-bold w-[50px] h-[50px] leading-[50px] text-[#232f4b] block bg-[#ebf4fc] transition-all hover:bg-tertiary hover:text-white"
                      >
                        3
                      </a>
                    </li>
                    <li className="float-left mr-[10px]">
                      <a
                        href="/"
                        aria-label="Next"
                        className=" font-bold w-[50px] h-[50px] leading-[50px] text-[#232f4b] bg-[#ebf4fc] transition-all hover:bg-tertiary hover:text-white flex justify-center items-center"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-6 h-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m8.25 4.5 7.5 7.5-7.5 7.5"
                          />
                        </svg>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-span-12 lg:col-span-4 lg:pl-5">
              <div className="">
                <div className="">
                  <form>
                    <div className="relative">
                      <input
                        type="text"
                        className="form-control w-full text-sm rounded-[5px] h-[70px] border-0
                                            pl-[10px] focus:outline-0 focus:shadow-none bg-[rgba(55,87,247,0.05)]
                                            text-[#212529]"
                        placeholder="Search Post.."
                      />
                      <button
                        type="submit"
                        className="text-white  bg-tertiary absolute right-[10px] top-[52%] h-[50px]
                            leading-[50px] w-[50px] rounded-[6px] transform -translate-y-1/2 flex justify-center items-center"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-7 h-7"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                          />
                        </svg>
                      </button>
                    </div>
                  </form>
                </div>

                <div className="mt-[65px]">
                  <h3
                    className="text-[23px] relative text-[#232f4b] text-left capitalize pb-[20px] font-bold 
                    before:content-[''] before:bg-tertiary before:w-[55px] before:absolute before:h-[4px] before:left-0 before:bottom-0 before:rounded-[10px]
                    after:content-[''] after:bg-[#f2f2f2] after:w-[80%] after:absolute after:h-[4px] after:left-[65px]
                    after:bottom-0 after:rounded-[10px]
                    "
                  >
                    Categories
                  </h3>
                  <ul>
                    <li className="text-sm mt-[15px] group transition-all pt-[6px] relative">
                      <a
                        href="/"
                        className="text-[#474f62] group hover:text-secondary text-lg font-bold block transition-all"
                      >
                        Blockchain Consulting{' '}
                        <span className="lg:inline-block hidden w-[30px]  h-[30px] leading-[30px]    bg-[#F3F3F3]  transition-all absolute right-0    text-center rounded-[50%] text-[18px]">
                          5
                        </span>
                      </a>
                    </li>
                    <li className="text-sm mt-[15px] group transition-all pt-[6px] relative">
                      <a
                        href="/"
                        className="text-[#474f62] group hover:text-secondary text-lg font-bold block transition-all"
                      >
                        Commodity Traders
                        <span className="lg:inline-block hidden w-[30px] h-[30px] leading-[30px] bg-[#F3F3F3]  transition-all absolute right-0 text-center rounded-[50%] text-[18px]">
                          7
                        </span>
                      </a>
                    </li>
                    <li className="text-sm mt-[15px] group transition-all pt-[6px] relative">
                      <a
                        href="/"
                        className="text-[#474f62] group hover:text-secondary text-lg font-bold block transition-all"
                      >
                        Financial Planning
                        <span className="lg:inline-block hidden w-[30px] h-[30px] leading-[30px] bg-[#F3F3F3]  transition-all absolute right-0 text-center rounded-[50%] text-[18px]">
                          3
                        </span>
                      </a>
                    </li>
                    <li className="text-sm mt-[15px] group transition-all pt-[6px] relative">
                      <a
                        href="/"
                        className="text-[#474f62] group hover:text-secondary text-lg font-bold block transition-all"
                      >
                        Investment Consulting
                        <span className="lg:inline-block hidden w-[30px] h-[30px] leading-[30px] bg-[#F3F3F3] absolute right-0 text-center rounded-[50%] text-[18px]">
                          8
                        </span>
                      </a>
                    </li>
                    <li className="text-sm mt-[15px] group transition-all pt-[6px] relative">
                      <a
                        href="/"
                        className="text-[#474f62] group hover:text-secondary text-lg font-bold block transition-all"
                      >
                        Online Banking Consulting
                        <span className="lg:inline-block hidden w-[30px] h-[30px] leading-[30px] bg-[#F3F3F3] transition-all absolute right-0 text-center rounded-[50%] text-[18px]">
                          6
                        </span>
                      </a>
                    </li>
                    <li className="text-sm mt-[15px] group transition-all pt-[6px] relative">
                      <a
                        href="/"
                        className="text-[#474f62] group hover:text-secondary text-lg font-bold block transition-all"
                      >
                        Personal Consulting Advice
                        <span className="lg:inline-block hidden w-[30px] h-[30px] leading-[30px] bg-[#F3F3F3]  transition-all absolute right-0 text-center rounded-[50%] text-[18px]">
                          2
                        </span>
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="mt-[65px]">
                  <h3
                    className="text-[23px] relative text-[#232f4b] text-left  capitalize pb-[20px] font-bold
                    before:content-[''] before:bg-tertiary before:w-[55px] before:absolute before:h-[4px] before:left-0 before:bottom-0 before:rounded-[10px]
                    after:content-[''] after:bg-[#f2f2f2] after:w-[80%] after:absolute after:h-[4px] after:left-[65px]
                    after:bottom-0 after:rounded-[10px]
                    "
                  >
                    Related Posts
                  </h3>
                  <div className="mt-[30px]">
                    <div className="overflow-hidden flex">
                      <div className="w-[90px]">
                        <img
                          className="rounded-[6px] w-full"
                          src="/blog-placeholder.jpeg"
                          alt=""
                        />
                      </div>
                      <div className="pl-[20px] w-[calc(100%-90px)]">
                        <h4>
                          <a
                            href="/"
                            className="inline-block  font-medium text-[#232f4b] text-lg transition-all hover:text-secondary"
                          >
                            The Internet tend to repeat predefined chunks.
                          </a>
                        </h4>
                        <span className="text-[#666] text-[13px]">
                          19 Jun 2023{' '}
                        </span>
                      </div>
                    </div>
                    <div className="overflow-hidden flex pt-[15px] mt-[15px]">
                      <div className="w-[90px]">
                        <img
                          className="rounded-[6px] w-full"
                          src="/blog-placeholder.jpeg"
                          alt=""
                        />
                      </div>
                      <div className="pl-[20px] w-[calc(100%-90px)]">
                        <h4>
                          <a
                            href="/"
                            className="inline-block  font-medium text-[#232f4b] text-lg        transition-all hover:text-secondary"
                          >
                            Have evolved over the years sometimes accident.
                          </a>
                        </h4>
                        <span className="text-[#666] text-[13px]">
                          22 May 2023{' '}
                        </span>
                      </div>
                    </div>
                    <div className="overflow-hidden flex pt-[15px] mt-[15px]">
                      <div className="w-[90px]">
                        <img
                          className="rounded-[6px] w-full"
                          src="/blog-placeholder.jpeg"
                          alt=""
                        />
                      </div>
                      <div className="pl-[20px] w-[calc(100%-90px)]">
                        <h4>
                          <a
                            href="/"
                            className="inline-block  font-medium text-[#232f4b] text-lg        transition-all hover:text-secondary"
                          >
                            The standard chunk of used since the interested.
                          </a>
                        </h4>
                        <span className="text-[#666] text-[13px]">
                          12 Apr 2023{' '}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-[65px]">
                  <h3
                    className="text-[23px] relative text-[#232f4b] text-left  capitalize pb-[20px] font-bold
                    before:content-[''] before:bg-tertiary before:w-[55px] before:absolute before:h-[4px] before:left-0 before:bottom-0 before:rounded-[10px]
                    after:content-[''] after:bg-[#f2f2f2] after:w-[80%] after:absolute after:h-[4px] after:left-[65px]
                    after:bottom-0 after:rounded-[10px]
                    "
                  >
                    Projects
                  </h3>
                  <ul className="flex flex-wrap mt-[30px]">
                    <li className="max-w-[33.33%] mb-[5px] px-[3px] flex-[0,0,33.33%]">
                      <a href="/">
                        <img
                          className="w-full  rounded-[6px]"
                          src="/blog-placeholder.jpeg"
                          alt=""
                        />
                      </a>
                    </li>
                    <li className="max-w-[33.33%] mb-[5px] px-[3px] flex-[0 0 33.33%]">
                      <a href="/">
                        <img
                          className="w-full  rounded-[6px]"
                          src="/blog-placeholder.jpeg"
                          alt=""
                        />
                      </a>
                    </li>
                    <li className="max-w-[33.33%] mb-[5px] px-[3px] flex-[0 0 33.33%]">
                      <a href="/">
                        <img
                          className="w-full  rounded-[6px]"
                          src="/blog-placeholder.jpeg"
                          alt=""
                        />
                      </a>
                    </li>
                    <li className="max-w-[33.33%] mb-[5px] px-[3px] flex-[0 0 33.33%]">
                      <a href="/">
                        <img
                          className="w-full  rounded-[6px]"
                          src="/blog-placeholder.jpeg"
                          alt=""
                        />
                      </a>
                    </li>
                    <li className="max-w-[33.33%] mb-[5px] px-[3px] flex-[0 0 33.33%]">
                      <a href="/">
                        <img
                          className="w-full  rounded-[6px]"
                          src="/blog-placeholder.jpeg"
                          alt=""
                        />
                      </a>
                    </li>
                    <li className="max-w-[33.33%] mb-[5px] px-[3px] flex-[0 0 33.33%]">
                      <a href="/">
                        <img
                          className="w-full  rounded-[6px]"
                          src="/blog-placeholder.jpeg"
                          alt=""
                        />
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="mt-[65px]">
                  <div className="p-[30px_40px] bg-tertiary lg:p-[20px]">
                    <h2
                      className="text-[36px] leading-[35px] 
                                 text-left block mb-[20px] font-bold text-gray-900"
                    >
                      How We Can Help You!
                    </h2>
                    <p className="text-gray-900 text-[18px]">
                      labore et dolore magna aliqua. Quis ipsum suspendisse
                      ultrices gravida. Risus commodo viverra maecenas accumsan
                      lacus vel facilisis.{' '}
                    </p>
                    <a
                      href="/"
                      className="py-[10px] px-[20px] border-[1px] border-gray-900
                                     text-gray-900
                                     text-[18px] relative mt-[40px] -translate-y-1/2 flex justify-between items-center"
                    >
                      <span>Contact Us</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                        />
                      </svg>
                    </a>
                  </div>
                </div>

                <div className="mt-[65px]">
                  <h3
                    className="text-[23px] relative text-[#232f4b] text-left  capitalize pb-[20px] font-bold
                                before:content-[''] before:bg-tertiary before:w-[55px]
                                 before:absolute before:h-[4px] before:left-0 before:bottom-0 before:rounded-[10px]
                                after:content-[''] after:bg-[#f2f2f2] after:w-[80%] after:absolute after:h-[4px] after:left-[65px]
                                after:bottom-0 after:rounded-[10px]
                                "
                  >
                    Tags
                  </h3>
                  <ul className="mt-[25px]">
                    <li className="float-left mr-[8px] mb-[12px]">
                      <a
                        href="/"
                        className="bg-[#ecf4fb] rounded-[5px] 
                    py-[5px] px-[18px] text-sm 
                    text-[#060530] transition-all hover:bg-tertiary
                     hover:text-white"
                      >
                        Consulting
                      </a>
                    </li>
                    <li className="float-left mr-[8px] mb-[12px]">
                      <a
                        href="/"
                        className="bg-[#ecf4fb] rounded-[5px] py-[5px]
                     px-[18px] text-sm text-[#060530] 
                     transition-all hover:bg-tertiary hover:text-white"
                      >
                        Planning
                      </a>
                    </li>
                    <li className="float-left mr-[8px] mb-[12px]">
                      <a
                        href="/"
                        className="bg-[#ecf4fb] rounded-[5px] py-[5px] 
                    px-[18px] text-sm text-[#060530] transition-all hover:bg-tertiary
                    hover:text-white"
                      >
                        Marketing
                      </a>
                    </li>
                    <li className="float-left mr-[8px] mb-[12px]">
                      <a
                        href="/"
                        className="bg-[#ecf4fb] rounded-[5px] py-[5px] 
                    px-[18px] text-sm text-[#060530] transition-all
                     hover:bg-tertiary hover:text-white"
                      >
                        Strategy
                      </a>
                    </li>
                    <li className="float-left mr-[8px] mb-[12px]">
                      <a
                        href="/"
                        className="bg-[#ecf4fb] rounded-[5px] py-[5px] 
                    px-[18px] text-sm  text-[#060530] transition-all
                     hover:bg-tertiary hover:text-white"
                      >
                        Finance
                      </a>
                    </li>
                    <li className="float-left mr-[8px] mb-[12px]">
                      <a
                        href="/"
                        className="bg-[#ecf4fb] rounded-[5px] py-[5px] px-[18px] 
                    text-sm text-[#060530] transition-all
                     hover:bg-tertiary hover:text-white"
                      >
                        Solution
                      </a>
                    </li>
                    <li className="float-left mr-[8px] mb-[12px]">
                      <a
                        href="/"
                        className="bg-[#ecf4fb] rounded-[5px] py-[5px]
                     px-[18px] text-sm text-[#060530]
                      transition-all hover:bg-tertiary hover:text-white"
                      >
                        Corporate
                      </a>
                    </li>
                    <li className="float-left mr-[8px] mb-[12px]">
                      <a
                        href="/"
                        className="bg-[#ecf4fb] rounded-[5px] py-[5px]
                     px-[18px] text-sm text-[#060530] 
                     transition-all hover:bg-tertiary hover:text-white"
                      >
                        Idea
                      </a>
                    </li>
                    <li className="float-left mr-[8px] mb-[12px]">
                      <a
                        href="/"
                        className="bg-[#ecf4fb] rounded-[5px] py-[5px] px-[18px] text-sm 
                    text-[#060530] transition-all hover:bg-tertiary hover:text-white"
                      >
                        Market Reserch
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
