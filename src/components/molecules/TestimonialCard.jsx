export function TestimonialCard({ image, quote, author, subtitle }) {
  return (
    <div className="relative max-w-lg bg-white dark:bg-black shadow-xl rounded-xl py-7 px-9 flex flex-col gap-6">
      <img
        src={image}
        alt={author}
        className="absolute size-16 rounded-full object-cover top-0 left-0 -translate-1/2"
      />
      <p className="leading-relaxed">“{quote}”</p>
      <div>
        <p className="font-semibold text-lg">{author}</p>
        <p className="text-sm">{subtitle}</p>
      </div>
    </div>
  );
}
