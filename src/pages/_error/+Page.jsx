import { usePageContext } from 'vike-react/usePageContext';
import errorImage from '../../assets/error.svg';

export default function Page() {
  const { is404 } = usePageContext();
  if (is404) {
    return (
      <div className="absolute inset-0 grid grid-rows-[1fr_auto]">
        <img src={errorImage} alt="" aria-hidden="true" className="max-w-3xl m-auto" />
        <div className="pb-16 text-center">
          <h1 className="text-4xl">Page Not Found</h1>
          <p className="py-2">This page could not be found.</p>
          <a
            href="/"
            className="text-xs underline underline-offset-2 transition-colors hover:decoration-orange-400"
          >
            Home
          </a>
        </div>
      </div>
    );
  }
  return (
    <>
      <h1>Internal Error</h1>
      <p>Something went wrong.</p>
    </>
  );
}
