import Card from '../Card/Card';
import SectionTitle from '../Text/SectionTitle';

export default function Feature() {
  return (
    <div>
      <div className="max-w-7xl mx-auto px-4 sm:px-0 text-center">
        <div className="lg:text-center">
          <SectionTitle title="The Smarter Way to Exchange" />
        </div>

        <div className="mt-10">
          <dl className="space-y-5 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10 lg:grid-cols-3">
            <Card className="relative flex flex-col items-center group">
              <img
                alt=""
                className="w-16 mb-5"
                src="https://www.svgrepo.com/show/110441/good-idea.svg"
              />
              <dt>
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-tertiary-500 text-white" />
                <p className="text-lg font-semibold text-gray-600 group-hover:text-primary transition-all">
                  Trust Our Expertise
                </p>
              </dt>
              <dd className="mt-2 text-base text-gray-600">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Maiores impedit perferendis suscipit eaque, iste dolor
                cupiditate blanditiis ratione.
              </dd>
            </Card>
            <Card className="relative flex flex-col items-center group">
              <img
                alt=""
                className="w-16 mb-5"
                src="https://www.svgrepo.com/show/503138/webpack.svg"
              />
              <dt>
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-tertiary-500 text-white" />
                <p className="text-lg font-semibold text-gray-600 group-hover:text-primary transition-all">
                  Get Personalized Service
                </p>
              </dt>
              <dd className="mt-2 text-base text-gray-600">
                {' '}
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Maiores impedit perferendis suscipit eaque, iste dolor
                cupiditate blanditiis ratione.
              </dd>
            </Card>
            <Card className="relative flex flex-col items-center group">
              <img
                alt=""
                className="w-16 mb-5"
                src="https://www.svgrepo.com/show/470489/exchange.svg"
              />
              <dt>
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-tertiary-500 text-white" />
                <p className="text-lg font-semibold text-gray-600 group-hover:text-primary transition-all">
                  Access Competitive Rates
                </p>
              </dt>
              <dd className="mt-2 text-base text-gray-600">
                {' '}
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Maiores impedit perferendis suscipit eaque, iste dolor
                cupiditate blanditiis ratione.
              </dd>
            </Card>
            <Card className="relative flex flex-col items-center group">
              <img
                alt=""
                className="w-16 mb-5"
                src="https://www.svgrepo.com/show/470489/exchange.svg"
              />
              <dt>
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-tertiary-500 text-white">
                  ≈
                </div>
                <p className="text-lg font-semibold text-gray-600 group-hover:text-primary transition-all">
                  Enjoy Convenient Online Transactions
                </p>
              </dt>
              <dd className="mt-2 text-base text-gray-600">
                {' '}
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Maiores impedit perferendis suscipit eaque, iste dolor
                cupiditate blanditiis ratione.
              </dd>
            </Card>
            <Card className="relative flex flex-col items-center group">
              <img
                alt=""
                className="w-16 mb-5"
                src="https://www.svgrepo.com/show/503138/webpack.svg"
              />
              <dt>
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-tertiary-500 text-white" />
                <p className="text-lg font-semibold text-gray-600 group-hover:text-primary transition-all">
                  Get Personalized Service
                </p>
              </dt>
              <dd className="mt-2 text-base text-gray-600">
                {' '}
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Maiores impedit perferendis suscipit eaque, iste dolor
                cupiditate blanditiis ratione.
              </dd>
            </Card>
            <Card className="relative flex flex-col items-center group">
              <img
                alt=""
                className="w-16 mb-5"
                src="https://www.svgrepo.com/show/503138/webpack.svg"
              />
              <dt>
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-tertiary-500 text-white" />
                <p className="text-lg font-semibold text-gray-600 group-hover:text-primary transition-all">
                  Get Personalized Service
                </p>
              </dt>
              <dd className="mt-2 text-base text-gray-600">
                {' '}
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Maiores impedit perferendis suscipit eaque, iste dolor
                cupiditate blanditiis ratione.
              </dd>
            </Card>
          </dl>
        </div>
      </div>
    </div>
  );
}
