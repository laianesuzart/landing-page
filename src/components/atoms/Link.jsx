export function Link({ outlined = false, ...props }) {
  const styles = {
    default:
      'font-medium relative after:absolute after:bottom-0 after:right-0 after:left-0 after:h-0.5 after:bg-orange after:origin-left after:scale-0 after:transition-transform hover:after:scale-100 focus:after:scale-100',
    outlined:
      'font-medium px-5 py-2 rounded border text-center transition-colors hover:border-orange focus:outline-orange',
  };
  return <a {...props} className={outlined ? styles.outlined : styles.default}></a>;
}
