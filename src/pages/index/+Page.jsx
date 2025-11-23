import './styles.css';

import { Button } from '../../components/atoms/Button';
import { airlines, destinations, features, testimonials, travelSteps } from './data';
import PlayIcon from '../../assets/icons/play.svg?react';
import SendIcon from '../../assets/icons/send.svg?react';
import underline from '../../assets/underline.png';
import { FeatureItem } from '../../components/molecules/FeatureItem';
import { ImageCard } from '../../components/molecules/ImageCard';
import { TripCard } from './components/TripCard';
import { StepItem } from './components/StepItem';
import { TestimonialSlide } from './components/TestimonialSlide';

export { Page };

function Page() {
  const onSubscribe = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <section className="grid xl:grid-cols-2">
        <div className="pt-8 xl:pt-28 xl:pb-20 max-w-[75ch]">
          <p className="font-poppins uppercase font-bold text-sm xl:text-xl text-light-red">
            Top Travel Destinations Worldwide
          </p>
          <h1 className="font-serif font-bold mt-4 mb-6 text-5xl xl:text-[5rem] leading-none text-black dark:text-white">
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
      <section className="grid xl:grid-cols-2 gap-28 ">
        <div>
          <p className="subtitle max-xl:text-center">Fast and easy</p>
          <h2 className="title max-xl:text-center">Book Your Next Trip in 3 Simple Steps</h2>
          <ul className="max-w-[40ch] flex flex-col gap-8 xl:gap-12 max-xl:mx-auto">
            {travelSteps.map((step) => (
              <li key={step.title}>
                <StepItem {...step} />
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-16 hidden xl:block">
          <TripCard />
        </div>
      </section>
      <section className="grid xl:grid-cols-2 gap-20">
        <div>
          <p className="subtitle max-xl:text-center">Testimonials</p>
          <h2 className="title max-xl:text-center">What People Say About Us</h2>
        </div>
        <TestimonialSlide items={testimonials} />
      </section>
      <div className="flex flex-wrap gap-4 justify-center xl:justify-between">
        {airlines.map((airline) => (
          <img
            src={airline.image}
            alt={airline.alt}
            key={airline.alt}
            className="object-contain py-4 px-8 rounded-2xl bg-transparent grayscale dark:invert transition-all hover:dark:bg-white hover:dark:invert-0 hover:shadow-lg hover:grayscale-0"
          />
        ))}
      </div>
      <section className="relative bg-[#dfd7f933] dark:bg-[#5e628233] py-12 px-4 xl:py-20 rounded-2xl rounded-tl-4xl md:rounded-tl-[90px] mb-6 xl:mb-16">
        <p className="font-poppins font-semibold leading-8 text-xl xl:text-3xl mb-8 xl:mb-18 max-w-[40ch] text-center mx-auto">
          Join our newsletter for updates, travel insights, and exclusive Jadoo offers.
        </p>
        <form
          onSubmit={onSubscribe}
          className="px-6 flex flex-col xl:flex-row items-center gap-6 max-w-2xl mx-auto"
        >
          <input
            type="email"
            name="email"
            placeholder="Enter your best email"
            className="bg-white text-black rounded-xl px-2 h-15 w-full xl:w-8/12"
          />
          <Button
            type="submit"
            className="w-full xl:w-4/12 text-white bg-linear-[180deg,#FF946D,#FF7D68] transition-colors outline-offset-4 outline-dashed outline-transparent hover:outline-light-red"
          >
            Subscribe
          </Button>
        </form>
        <div className="absolute right-0 top-0 z-10 size-16 rounded-full grid place-content-center bg-linear-[201.65deg,#747DEF_10.27%,#5E3BE1] -translate-y-4 translate-x-4">
          <SendIcon
            aria-hidden="true"
            className="text-white size-8 rotate-6 motion-safe:animate-wiggle"
          />
        </div>
        <div className="absolute right-0 top-0 size-70 -z-10 hidden 2xl:block bg-[url(/src/assets/decoration-04.svg)] bg-cover bg-right"></div>
        <div className="absolute left-0 bottom-0 size-[420px] -z-10 hidden 2xl:block bg-[url(/src/assets/decoration-03.svg)] bg-no-repeat bg-contain bg-bottom -translate-x-16"></div>
        <div className="absolute right-0 bottom-0 size-36 -z-10 hidden 2xl:block bg-[url(/src/assets/decoration-05.svg)] bg-no-repeat bg-contain translate-y-16 translate-x-[calc(50%+24px)]"></div>
      </section>
    </>
  );
}
