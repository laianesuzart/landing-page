export function Button({ children, className, ...props }) {
  const styles =
    'cursor-pointer min-w-fit text-lg font-medium rounded-xl py-4 px-6' + ' ' + className;
  return (
    <button className={styles} {...props}>
      {children}
    </button>
  );
}
