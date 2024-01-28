import CardGray from '../Card/CardGray';
import SectionTitle from '../Text/SectionTitle';

export default function News() {
  return (
    <div className="max-w-7xl mx-auto w-full overflow-hidden">
      <SectionTitle title="Latest News" />
      <div className="grid grid-cols-1 gap-5 mt-10 sm:grid-cols-2 lg:grid-cols-4">
        <CardGray className="mb-6">
          <a href="/">
            <img
              src="/blog-placeholder.jpeg"
              className="w-full rounded-tl-md rounded-tr-md"
              alt="news"
            />
            <p className="text-md p-3">
              <span className="font-semibold text-gray-700">
                Popular Places for Canadians to Travel During the Winter
              </span>
            </p>
            <div className="mb-3 p-3 text-xs">
              <p className="font-semibold text-gray-600">Author Name</p>
              <p className="text-gray-600">Sept 28th, 2024</p>
            </div>
          </a>
        </CardGray>
        <CardGray className="mb-6">
          <a href="/">
            <img
              src="/blog-placeholder.jpeg"
              className="w-full rounded-tl-md rounded-tr-md"
              alt="news"
            />
            <p className="text-md p-3">
              <span className="font-semibold text-gray-700">
                Popular Places for Canadians to Travel During the Winter
              </span>
            </p>
            <div className="mb-3 p-3 text-xs">
              <p className="font-semibold text-gray-600">Author Name</p>
              <p className="text-gray-600">Sept 28th, 2024</p>
            </div>
          </a>
        </CardGray>
        <CardGray className="mb-6">
          <a href="/">
            <img
              src="/blog-placeholder.jpeg"
              className="w-full rounded-tl-md rounded-tr-md"
              alt="news"
            />
            <p className="text-md p-3">
              <span className="font-semibold text-gray-700">
                Popular Places for Canadians to Travel During the Winter
              </span>
            </p>
            <div className="mb-3 p-3 text-xs">
              <p className="font-semibold text-gray-600">Author Name</p>
              <p className="text-gray-600">Sept 28th, 2024</p>
            </div>
          </a>
        </CardGray>
        <CardGray className="mb-6">
          <a href="/">
            <img
              src="/blog-placeholder.jpeg"
              className="w-full rounded-tl-md rounded-tr-md"
              alt="news"
            />
            <p className="text-md p-3">
              <span className="font-semibold text-gray-700">
                Popular Places for Canadians to Travel During the Winter
              </span>
            </p>
            <div className="mb-3 p-3 text-xs">
              <p className="font-semibold text-gray-600">Author Name</p>
              <p className="text-gray-600">Sept 28th, 2024</p>
            </div>
          </a>
        </CardGray>
      </div>
      <div className="px-3">
        <button
          type="button"
          className="bg-secondary p-4 rounded text-white flex justify-center space-x-2 items-center w-full md:w-[200px]"
        >
          <span>READ MORE</span>
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
  );
}
