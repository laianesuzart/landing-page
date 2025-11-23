export function StepItem({ title, description, icon, color }) {
  const styles = {
    yellow: 'bg-[#F0BB1F]',
    orange: 'bg-[#F15A2B]',
    blue: 'bg-[#006380]',
  };

  return (
    <div className="flex gap-5 font-poppins">
      <img
        src={icon}
        alt=""
        aria-hidden="true"
        className={`${styles[color]} rounded-xl size-12 p-3`}
      />
      <div>
        <h3 className="font-bold leading-none">{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}
