export function FeatureItem({ icon, title, description, highlighted = false }) {
  return (
    <div
      className={`relative flex flex-col gap-4 items-center pt-10 rounded-4xl bg-white dark:bg-black ${
        highlighted ? 'shadow-lg pb-10 px-10' : 'px-8'
      }`}
    >
      <img
        src={icon}
        alt=""
        aria-hidden="true"
        className={`size-20 ${highlighted ? 'scale-150' : ''}`}
      />
      <h3 className="text-xl font-semibold text-black dark:text-white">{title}</h3>
      <p className="text-center">{description}</p>
      {highlighted && (
        <div className="hidden xl:block absolute bottom-0 left-0 -z-10 size-24 bg-light-red rounded-t-4xl rounded-br-xl translate-y-4/12 -translate-x-4/12"></div>
      )}
    </div>
  );
}
