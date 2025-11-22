import NavigationIcon from '../../assets/icons/navigation.svg?react';

export function ImageCard({ image, title, price, description }) {
  return (
    <div className="rounded-xl shadow-lg bg-white dark:bg-black">
      <img src={image} alt={title} className="w-full h-80 object-cover rounded-t-xl object-top" />

      <div className="pt-6 pb-8 px-5">
        <div className="flex justify-between font-medium text-lg">
          <h3>{title}</h3>
          <span>{price}</span>
        </div>
        <p className="pt-2">
          <NavigationIcon aria-hidden="true" className="text-black dark:text-white inline" />
          <span className="pl-3.5">{description}</span>
        </p>
      </div>
    </div>
  );
}
