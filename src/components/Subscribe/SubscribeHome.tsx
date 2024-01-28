export default function SubscribeHome() {
  return (
    <div className="flex container mx-auto text-gray-700 px-5 lg:px-10">
      <div className="w-2/3 pr-10">
        <h2 className="text-xl font-semibold">Subscribe to our Newsletter</h2>
        <p className="text-gray-500 text-sm">
          Get the latest news and updates from our team by subscribing to our
          newsletter.
        </p>
      </div>

      <div className="w-1/3">
        <form className="flex justify-start items-center">
          <input
            className="w-full border border-white p-3 rounded-lg border-r-0 rounded-tr-none rounded-br-none focus:outline-none bg-gray-100"
            type="email"
            placeholder="Enter your email"
          />

          <button
            className="bg-secondary text-white py-3 px-6 rounded-lg rounded-tl-none rounded-bl-none"
            type="submit"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
}
