import BuildingIcon from '../../../assets/icons/building.svg?react';
import HeartIcon from '../../../assets/icons/heart.svg?react';
import LeafIcon from '../../../assets/icons/leaf.svg?react';
import MapIcon from '../../../assets/icons/map.svg?react';
import SendIcon from '../../../assets/icons/send.svg?react';

export function TripCard() {
  return (
    <div
      aria-hidden="true"
      className="relative bg-white pt-5 px-6 pb-8 rounded-3xl shadow-xl w-fit after:absolute after:w-3/4 after:h-full after:top-0 after:right-0 after:bg-[#59B1E6] after:opacity-60 after:blur-[75px] after:-z-10 after:-translate-y-16 after:translate-x-8"
    >
      <img src="/src/assets/greece.jpg" alt="" className="rounded-3xl" />
      <div className="pt-6 font-medium text-[#84829A]">
        <h3 className="text-lg text-black">Trip to Greece</h3>
        <p className="py-3">14-29 June &#183; by Robbin Joseph</p>
        <div className="flex gap-4">
          <span className="size-9 grid place-content-center bg-[#F5F5F5] rounded-full">
            <LeafIcon />
          </span>
          <span className="size-9 grid place-content-center bg-[#F5F5F5] rounded-full">
            <MapIcon />
          </span>
          <span className="size-9 grid place-content-center bg-[#F5F5F5] rounded-full">
            <SendIcon />
          </span>
        </div>
        <div className="pt-8 flex justify-between items-center">
          <p className="flex gap-4 items-center">
            <BuildingIcon />
            <span>24 going</span>
          </p>
          <HeartIcon className="text-[#4152CA]" />
        </div>
      </div>
      <div className="absolute shadow-xs rounded-2xl p-5 bg-white bottom-16 right-0 translate-x-5/12">
        <div className="flex gap-3">
          <img
            src="/src/assets/ongoing-trip.jpg"
            alt=""
            className="size-12 rounded-full object-cover"
          />
          <div>
            <span className="text-sm text-[#84829A] font-medium">Ongoing</span>
            <h3 className="font-medium mb-2 text-lg text-black">Trip to Rome</h3>
            <p className="mb-2 text-sm font-medium text-black">
              <span className="text-[#8A79DF]">40% </span>
              complete
            </p>
            <div className="h-1 w-36 rounded bg-[#F5F5F5] relative after:absolute after:left-0 after:h-full after:rounded after:bg-[#8A79DF] after:w-[40%]"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
