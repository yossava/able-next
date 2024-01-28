export default function Contact() {
  return (
    <>
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
                <h2 className="text-3xl text-white mb-2">Service</h2>
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
                    <span className="text-tertiary">Service</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="bg-white overflow-hidden relative py-10 text-gray-800 pb-20 px-3">
        <div className="wraper">
          <div className="py-10 text-center mb-10">
            <span
              className="uppercase text-[16px] font-bold tracking-[3px] text-secondary 
                     font-base-font"
            >
              Our Services
            </span>
            <h2
              className="text-5xl 
                     mt-[10px] relative capitalize font-heading-font font-bold"
            >
              All Able Solution
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            <div className="">
              <div className="p-[50px] col:p-[30px_25px] shadow-[0px_0px_20px_0px_rgba(20,33,43,0.1)]">
                <div className="text-center">
                  <div className="w-[120px] h-[120px] leading-[120px] bg-[#f5f5f5] text-center mx-auto mb-[30px] text-[50px] rounded-[50%] flex justify-center items-center">
                    <img className="w-[50px]" src="/bank-btc.svg" alt="" />
                  </div>
                  <h2 className="text-[#14212b] text-[30px] font-bold mb-[20px] xl:text-[25px] col:text-[25px]">
                    Financial Advices
                  </h2>
                  <p className=" text-[#6e6e6e]">
                    Lorem Ipsum is simply dummy text the industry standard dummy
                    text ever scrambled type specimen
                  </p>
                  <a
                    href="/"
                    className="transition-all duration-300 flex justify-center space-x-2 items-center p-[10px_35px] pr-[45px] text-secondary border-[1px] border-secondary
                                    relative rounded-[6px] mt-[20px] uppercase 
                                    before:-translate-y-1/2 hover:bg-secondary hover:text-white"
                  >
                    <span>Details</span>
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
                        d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="">
              <div className="p-[50px] col:p-[30px_25px] shadow-[0px_0px_20px_0px_rgba(20,33,43,0.1)]">
                <div className="text-center">
                  <div className="w-[120px] h-[120px] leading-[120px] bg-[#f5f5f5] text-center mx-auto mb-[30px] text-[50px] rounded-[50%] flex justify-center items-center">
                    <img className="w-[70px]" src="/padlock.svg" alt="" />
                  </div>
                  <h2 className="text-[#14212b] text-[30px] font-bold mb-[20px] xl:text-[25px] col:text-[25px]">
                    Risk Management
                  </h2>
                  <p className=" text-[#6e6e6e]">
                    Lorem Ipsum is simply dummy text the industry standard dummy
                    text ever scrambled type specimen
                  </p>
                  <a
                    href="/"
                    className="transition-all duration-300 flex justify-center space-x-2 items-center p-[10px_35px] pr-[45px] text-secondary border-[1px] border-secondary
                                    relative rounded-[6px] mt-[20px] uppercase 
                                    before:-translate-y-1/2 hover:bg-secondary hover:text-white"
                  >
                    <span>Details</span>
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
                        d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="">
              <div className="p-[50px] col:p-[30px_25px] shadow-[0px_0px_20px_0px_rgba(20,33,43,0.1)]">
                <div className="text-center">
                  <div className="w-[120px] h-[120px] leading-[120px] bg-[#f5f5f5] text-center mx-auto mb-[30px] text-[50px] rounded-[50%] flex justify-center items-center">
                    <img className="w-[50px]" src="/conversion.svg" alt="" />
                  </div>
                  <h2 className="text-[#14212b] text-[30px] font-bold mb-[20px] xl:text-[25px] col:text-[25px]">
                    Tax Management
                  </h2>
                  <p className=" text-[#6e6e6e]">
                    Lorem Ipsum is simply dummy text the industry standard dummy
                    text ever scrambled type specimen
                  </p>
                  <a
                    href="/"
                    className="transition-all duration-300 flex justify-center space-x-2 items-center p-[10px_35px] pr-[45px] text-secondary border-[1px] border-secondary
                                    relative rounded-[6px] mt-[20px] uppercase 
                                    before:-translate-y-1/2 hover:bg-secondary hover:text-white"
                  >
                    <span>Details</span>
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
                        d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="pb-[120px] md:pb-[90px] sm:pb-[80px] bg-white px-3">
        <div className="wraper">
          <div
            className="p-5 bg-secondary flex flex-col lg:flex-row items-center relative rounded-[10px]
                     overflow-hidden z-[1] lg:p-[70px] md:p-[30px] sm:flex-wrap before:absolute before:left-0 before:top-0 before:w-full before:h-full
                     before:bg-[url(/bg-subscribe.png)] before:bg-no-repeat before:bg-center before:bg-cover before:z-[-1]"
          >
            <div className="lg:w-1/3 w-full mb-[20px]">
              <span className="text-[21px] text-white">Subscribe here</span>
              <h3
                className="text-[40px] text-white font-semibold leading-[55px] mt-[10px] lg:text-[32px]
                            lg:leading-[40px] md:text-[28px] md:leading-[35px] md:mt-0"
              >
                Subscribe For Newsletter
              </h3>
            </div>
            <div className="lg:w-2/3 w-full lg:pl-[60px] pl-0">
              <form action="#">
                <div className="relative">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full p-[40px] pr-[190px] h-[75px] rounded-[5px] bg-white border-none col:p-[10px] col:pr-[100px] focus:outline-0 focus:shadow-none"
                  />
                  <button
                    type="button"
                    className="absolute flex justify-center items-center space-x-2 right-[8px] bg-[#14212b] rounded-[5px] top-[8px]
                                 h-[65px] w-[120px] lg:w-[170px]
                                border-0 text-white  sm:w-[130px] col:w-[80px] col:h-[40px]
                                 
                               "
                  >
                    <span>Subscribe</span>

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
                        d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5"
                      />
                    </svg>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
