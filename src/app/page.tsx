'use client';

import { motion } from 'framer-motion';

import Contact from '@/components/Contact/Contact';
import Feature from '@/components/Feature/Feature';
import ExchangeForm from '@/components/Form/ExchangeForm';
import Gallery from '@/components/Gallery/Gallery';
import HeroMain from '@/components/Hero/HeroMain';
import News from '@/components/News/News';
import SubscribeHome from '@/components/Subscribe/SubscribeHome';
import RateTab from '@/components/Table/RateTab';
import SectionTitle from '@/components/Text/SectionTitle';

function FadeInWhenVisible({
  children,
  className
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      className={className}
      viewport={{ once: true, amount: 0.1 }}
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
function FadeInWhenVisibleOpacity({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.3 }}
      variants={{
        visible: { opacity: 1 },
        hidden: { opacity: 0 }
      }}
    >
      {children}
    </motion.div>
  );
}

export default function Home() {
  return (
    <>
      <HeroMain />

      <section
        className="lg:py-20 lg:pt-32 py-10 bg-tertiary z-40 relative before:absolute before:left-0 before:top-0 before:w-full before:h-full
                     before:bg-[url(/texture_bg.png)] before:z-[-1]"
      >
        {/* <div className="bounceimg">
          <Image src="/image-1.png" width={500} height={500} alt="image" />
        </div> */}
        <FadeInWhenVisibleOpacity>
          <div className="hidden lg:block absolute -top-12 left-20 right-20 bg-white py-7 rounded-md ">
            <SubscribeHome />
          </div>
        </FadeInWhenVisibleOpacity>

        <div className="container mx-auto grid grid-cols-12 gap-5 p-3">
          <FadeInWhenVisible className="lg:col-span-6 col-span-12">
            <div className="">
              <SectionTitle
                title="Get Exchanged Now"
                color="text-gray-800"
                borderColor="border-gray-900"
              />
              <ExchangeForm />
            </div>
          </FadeInWhenVisible>

          <FadeInWhenVisible className="mt-10 md:mt-0 lg:col-span-6 col-span-12">
            <div className="">
              <SectionTitle
                title="Todays Exchange Rate"
                color="text-gray-800"
                borderColor="border-gray-900"
              />
              <RateTab />
            </div>
          </FadeInWhenVisible>
        </div>
      </section>

      <section className="bg-grey lg:py-20 py-10">
        <FadeInWhenVisible>
          <Feature />
        </FadeInWhenVisible>
      </section>

      <section className="bg-white py-10 lg:py-20">
        <FadeInWhenVisible>
          <News />
        </FadeInWhenVisible>
      </section>

      <section className="py-10 lg:py-20 bg-grey">
        <FadeInWhenVisible>
          <Gallery />
        </FadeInWhenVisible>
      </section>
      <section className="bg-white">
        <FadeInWhenVisible>
          <Contact />
        </FadeInWhenVisible>
      </section>
    </>
  );
}
