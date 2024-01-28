import CardGray from '../Card/CardGray';
import SectionTitle from '../Text/SectionTitle';

export default function Gallery() {
  return (
    <div className="flex justify-center items-center text-gray-600 w-full p-2">
      <div className="text-center max-w-7xl w-full">
        <SectionTitle title="Our Stores" />

        <p className="mx-auto text-gray-500 mt-5">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum
          magnam, repudiandae laborum illo corrupti temporibus
        </p>
        <div className="grid grid-cols-2 lg:grid-cols-3 lg:gap-5 gap-3 mt-10 container mx-auto">
          <CardGray className="">
            <div
              className="w-full h-40 lg:h-60 rounded-tl-md rounded-tr-md bg-no-repeat bg-center"
              style={{
                background: 'url(/gallery/1.webp)',
                backgroundSize: 'cover',
              }}
            />
            <div className="p-3 bg-white font-semibold">PIK</div>
          </CardGray>
          <CardGray className="">
            <div
              className="w-full h-40 lg:h-60 rounded-tl-md rounded-tr-md bg-no-repeat bg-center"
              style={{
                background: 'url(/gallery/2.webp)',
                backgroundSize: 'cover',
              }}
            />
            <div className="p-3 bg-white font-semibold">PIK</div>
          </CardGray>
          <CardGray className="">
            <div
              className="w-full h-40 lg:h-60 rounded-tl-md rounded-tr-md bg-no-repeat bg-center"
              style={{
                background: 'url(/gallery/3.webp)',
                backgroundSize: 'cover',
              }}
            />
            <div className="p-3 bg-white font-semibold">PIK</div>
          </CardGray>
          <CardGray className="">
            <div
              className="w-full h-40 lg:h-60 rounded-tl-md rounded-tr-md bg-no-repeat bg-center"
              style={{
                background: 'url(/gallery/4.webp)',
                backgroundSize: 'cover',
              }}
            />
            <div className="p-3 bg-white font-semibold">Central Park Mall</div>
          </CardGray>
          <CardGray className="">
            <div
              className="w-full h-40 lg:h-60 rounded-tl-md rounded-tr-md bg-no-repeat bg-center"
              style={{
                background: 'url(/gallery/5.webp)',
                backgroundSize: 'cover',
              }}
            />
            <div className="p-3 bg-white font-semibold">Central Park Mall</div>
          </CardGray>
          <CardGray className="">
            <div
              className="w-full h-40 lg:h-60 rounded-tl-md rounded-tr-md bg-no-repeat bg-center"
              style={{
                background: 'url(/gallery/6.webp)',
                backgroundSize: 'cover',
              }}
            />
            <div className="p-3 bg-white font-semibold">Central Park Mall</div>
          </CardGray>
        </div>
        <div className="mt-5">
          <button
            type="button"
            className="bg-secondary p-4 rounded text-white flex justify-center space-x-2 items-center w-full md:w-[200px]"
          >
            <span>SEE MORE</span>
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
    </div>
  );
}
