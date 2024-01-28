import ExchangeForm from '@/components/Form/ExchangeForm';
import SectionTitle from '@/components/Text/SectionTitle';

export default function Contact() {
  return (
    <>
      <section
        className="bg-[url(/blog-placeholder.jpeg)] bg-no-repeat bg-center
         min-h-[300px] py-20 relative flex justify-center flex-col z-[1]
          before:absolute before:left-0 before:top-0 before:w-full 
          before:h-full before:bg-black/70 before:z-[-1] before:opacity-[0.7] bg-cover"
      >
        <div className="container mx-auto">
          <div className="grid grid-cols-12">
            <div className="col-span-12">
              <div className="text-center">
                <h2 className="text-3xl text-white mb-2">Exchange</h2>
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
                    <span className="text-tertiary">Exchange</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white relative py-10 lg:py-20 text-gray-700 lg:pb-20 px-3 text-center">
        <SectionTitle title="Exchange Rate" />
        <p>
          Check foreign exchange rates on the most popular currency pairs here
          before you initiate your money transfer.
        </p>
        <div className="max-w-5xl mt-10 mx-auto">
          <ExchangeForm />
        </div>
      </section>
      <section className="bg-white pb-10 lg:pb-20">
        <div className="max-w-5xl mx-auto p-3 flex flex-col lg:flex-row justify-between lg:space-x-10">
          <div className="p-5  flex justify-center items-center rounded-lg">
            <img className="w-32 lg:w-72" src="/credit-card.svg" alt="" />
          </div>
          <div className="text-gray-700">
            <h3 className="font-bold text-2xl capitalize mb-5">
              delectus hic dolorum perferendis provident magnam soluta illum
            </h3>
            <p className="text-gray-600 mb-5">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet
              asperiores delectus hic dolorum perferendis provident magnam
              soluta illum! Fugit debitis optio delectus fuga doloribus possimus
              enim beatae, voluptatem illo tenetur.
            </p>
            <div className="flex justify-end items-center space-x-3">
              <button
                type="button"
                className="bg-secondary  p-3 rounded text-white flex justify-center space-x-2 items-center w-[200px]"
              >
                <span>Login</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m8.25 4.5 7.5 7.5-7.5 7.5"
                  />
                </svg>
              </button>
              <button
                type="button"
                className="border-secondary border p-3 rounded text-secondary flex justify-center space-x-2 items-center w-[200px]"
              >
                <span>Register</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m8.25 4.5 7.5 7.5-7.5 7.5"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
