import './styles.css';

import { Button } from '../../components/atoms/Button';
import { destinations, features } from './data';
import PlayIcon from '../../assets/icons/play.svg?react';
import underline from '../../assets/underline.png';
import { FeatureItem } from '../../components/molecules/FeatureItem';
import { ImageCard } from '../../components/molecules/ImageCard';

export { Page };

function Page() {
  return (
    <>
      <section className="grid xl:grid-cols-2">
        <div className="pt-8 xl:pt-28 xl:pb-20 max-w-[75ch]">
          <p className="font-poppins uppercase font-bold text-sm xl:text-xl text-light-red">
            Top Travel Destinations Worldwide
          </p>
          <h1 className="font-serif font-bold mt-4 mb-6 text-5xl xl:text-[5.25rem] leading-none text-black dark:text-white">
            Travel,{' '}
            <span className="relative inline-block">
              enjoy
              <img
                src={underline}
                aria-hidden="true"
                height={400}
                className="hidden xl:block absolute left-0 bottom-0 scale-150 origin-[30%] -z-1"
              />
            </span>{' '}
            and live a new and full life
          </h1>
          <p className="font-poppins pr-4 mb-6">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa, quis ut, sunt impedit
            dolore molestiae commodi eos rem, a tempora quaerat sapiente! Est ratione quae fuga
            deleniti.
          </p>
          <div className="flex flex-wrap gap-11">
            <Button className="bg-[#F1A501] text-white w-full sm:w-fit transition-colors hover:bg-light-red">
              Get started
            </Button>
            <Button className="flex gap-4 items-center p-0! w-fit group">
              <span className="text-white grid place-content-center bg-light-red size-12 rounded-full shadow-2xl shadow-light-red">
                <PlayIcon
                  aria-hidden="true"
                  className="transition-transform group-hover:scale-125"
                />
              </span>
              Play demo
            </Button>
          </div>
        </div>
        <div className="hidden -z-10 xl:block bg-[url(/src/assets/blob.webp)] bg-contain bg-no-repeat absolute top-0 right-0 left-1/2 h-[724px]"></div>
        <div className="hidden xl:block bg-[url(/src/assets/traveller.png)] bg-contain bg-no-repeat bg-center"></div>
      </section>
      <section className="relative">
        <p className="subtitle text-center">Our services</p>
        <h2 className="title text-center">Exceptional Services for Every Traveler</h2>
        <div className="grid grid-cols-[repeat(auto-fill,minmax(min(100%,252px),1fr))] gap-4 xl:gap-10">
          {features.map((feature) => (
            <FeatureItem key={feature.title} {...feature} />
          ))}
        </div>
        <div className="absolute right-0 top-0 size-36 -z-10 hidden 2xl:block bg-[url(/src/assets/decoration-01.svg)] bg-no-repeat bg-contain -translate-y-6 translate-x-full"></div>
      </section>
      <section>
        <p className="subtitle text-center">Our most popular trips</p>
        <h2 className="title text-center">Top Destinations</h2>
        <div className="relative grid grid-cols-[repeat(auto-fill,315px)] place-content-center gap-y-4 gap-x-10">
          {destinations.map((destination) => (
            <ImageCard key={destination.title} {...destination} />
          ))}
          <div className="hidden xl:block absolute -right-2 bottom-8 -z-10 w-24 h-64 bg-[url(/src/assets/decoration-02.svg)] bg-no-repeat bg-contain"></div>
        </div>
      </section>
      <section>
        <p className="subtitle">Fast and easy</p>
        <h2 className="title">Book Your Next Trip in 3 Easy Steps</h2>
      </section>
      <section>
        <p className="subtitle">Testimonials</p>
        <h2 className="title">What people say about us</h2>
      </section>
      <div></div>
      <section>
        <p className="subtitle">
          Join our newsletter for updates, travel insights, and exclusive Jadoo offers.
        </p>
        <form action=""></form>
      </section>
    </>
  );
}
