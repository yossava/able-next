import { motion } from 'framer-motion';

function FadeInWhenVisible({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.3 }}
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 40 }
      }}
    >
      {children}
    </motion.div>
  );
}
export default function HeroMain() {
  return (
    <div className="relative h-screen overflow-hidden w-full flex justify-center items-center">
      <video
        autoPlay
        loop
        muted
        className="absolute z-10 w-auto min-w-full min-h-full max-w-none"
      >
        <source src="/globe-bg-3.mp4" type="video/mp4" />
      </video>

      <div className="absolute top-0 right-0 bottom-0 left-0 overlay z-20" />

      <div className="relative z-30 mx-auto container text-left">
        <FadeInWhenVisible>
          <div className="w-full text-center px-5 lg:px-0">
            <h1 className="text-4xl lg:text-8xl font-bold text-tertiary uppercase sm:text-6xl">
              Save when you send worldwide
            </h1>
            <p className="mt-4 text-lg lg:text-2xl text-gray-100 mb-5">
              Get your money moving internationally. Save up to 2.5x when you
              send with Us.
            </p>
            <div className="flex justify-start md:justify-center flex-col md:flex-row items-center md:space-x-5 space-x-0 space-y-5 md:space-y-0 mt-20">
              <button
                type="button"
                className="bg-tertiary p-4 rounded text-black flex justify-center space-x-2 items-center w-full md:w-[200px]"
              >
                <span>Exchange Rate</span>
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
              </button>
              <button
                type="button"
                className="border-tertiary border p-4 rounded text-white flex justify-center space-x-2 items-center w-full md:w-[200px]"
              >
                <span>Why Us?</span>
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
              </button>
            </div>
          </div>
        </FadeInWhenVisible>
      </div>
    </div>
  );
}
