import './global.css';
import './layout.css';

import { useState } from 'react';
import { useRef } from 'react';
import { useEffect } from 'react';

import { Link } from '../components/atoms/Link';
import Apple from '../assets/icons/apple.svg?react';
import Facebook from '../assets/icons/facebook.svg?react';
import Instagram from '../assets/icons/instagram.svg?react';
import Logo from '../assets/logo.svg?react';
import Menu from '../assets/icons/menu.svg?react';
import PlayStore from '../assets/icons/play-store.svg?react';
import Twitter from '../assets/icons/twitter.svg?react';

export default function Layout({ children }) {
  return (
    <div className="max-w-[1160px] m-auto px-6 lg:px-4">
      <Header />
      <Content>{children}</Content>
      <Footer />
    </div>
  );
}

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const header = useRef(null);
  const container = useRef(null);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (header.current) {
      const offset = window.getComputedStyle(header.current).height;
      container.current.style.top = offset;
    }
  }, []);
  return (
    <header ref={header} className="header">
      <a href="/">
        <Logo />
      </a>
      <button role="menu" onClick={handleClick} className="cursor-pointer size-12 lg:hidden">
        <Menu />
      </button>
      <nav ref={container} className="menu" style={{ display: isOpen ? 'flex' : 'none' }}>
        <Link href="">Destinations</Link>
        <Link href="">Hotels</Link>
        <Link href="">Flights</Link>
        <Link href="">Bookings</Link>
        <Link href="" outlined>
          Sign in
        </Link>
      </nav>
    </header>
  );
}

function Content({ children }) {
  return <main className="flex flex-col gap-24 xl:gap-40">{children}</main>;
}

function Footer() {
  return (
    <footer className="relative font-poppins pt-24 pb-20">
      <div className="flex justify-between flex-wrap gap-y-10 gap-x-6">
        <div className="min-w-full lg:min-w-fit">
          <h3 className="text-black dark:text-white font-medium text-[42px] mb-8 leading-8">
            Jadoo.
          </h3>
          <p className="text-xs font-medium">
            Book your trip quickly and
            <br />
            stay fully in control all the way.
          </p>
        </div>
        <div>
          <h3 className="footer__title">Company</h3>
          <ul className="footer__list">
            <li>
              <Link href="">About</Link>
            </li>
            <li>
              <Link href="">Careers</Link>
            </li>
            <li>
              <Link href="">Mobile</Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="footer__title">Contact</h3>
          <ul className="footer__list">
            <li>
              <Link href="">Help/FAQ</Link>
            </li>
            <li>
              <Link href="">Press</Link>
            </li>
            <li>
              <Link href="">Affiliates</Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="footer__title">More</h3>
          <ul className="footer__list">
            <li>
              <Link href="">Airlines</Link>
            </li>
            <li>
              <Link href="">Airlines fees</Link>
            </li>
            <li>
              <Link href="">Low fare tips</Link>
            </li>
          </ul>
        </div>
        <div>
          <ul className="flex gap-6">
            <li>
              <a
                title="Facebook"
                href=""
                className="footer__media group hover:bg-conic-[from_180deg_at_50%_50%,#8cb4ff,#6ba0ff_45deg,#4a8bff_90deg,#2f79ff_135deg,#1877F2_180deg,#1668d8_225deg,#1259bb_270deg,#3a75f7_315deg,#7ca7ff]"
              >
                <Facebook aria-hidden="true" className="group-hover:text-white" />
              </a>
            </li>
            <li>
              <a
                title="Instagram"
                href=""
                className="footer__media group hover:bg-conic-[from_180deg_at_50%_50%,#B8D2F1,#F289AA_60deg,#C68BF0_106.09deg,#D164DA_153.75deg,#C963E8_221.25deg,#BFC2E8_258.75deg,#FFC999_288.75deg,#D0D8C9_315deg,#BAD0F1_334.13deg,#CED8CB_358.97deg,rgba(255,255,255,0)]"
              >
                <Instagram aria-hidden="true" className="group-hover:text-white" />
              </a>
            </li>
            <li>
              <a
                title="Twitter"
                href=""
                className="footer__media group hover:bg-conic-[from_180deg_at_50%_50%,#76d0ff,#4fc1ff_60deg,#32b5ff_120deg,#1da1f2_180deg,#178dd3_240deg,#1279b5_300deg,#5bc9ff]"
              >
                <Twitter aria-hidden="true" className="group-hover:text-white" />
              </a>
            </li>
          </ul>
          <h3 className="text-xl font-medium mt-6 mb-4">Discover our app</h3>
          <ul className="flex gap-2 flex-wrap">
            <li>
              <a
                href=""
                className="flex items-center gap-1 px-4 py-2 text-white dark:text-black bg-black dark:bg-white rounded-full focus:outline-orange"
              >
                <PlayStore aria-hidden="true" className="shrink-0" />
                <div className="font-sans text-[10px] flex flex-col uppercase ">
                  <span className="font-bold leading-[9px]">Get in on</span>
                  <span className="font-light">Google Play</span>
                </div>
              </a>
            </li>
            <li>
              <a
                href=""
                className="flex items-center gap-1 px-4 py-2 text-white dark:text-black bg-black dark:bg-white rounded-full focus:outline-orange"
              >
                <Apple aria-hidden="true" className="shrink-0" />
                <div className="font-sans flex flex-col">
                  <span className="font-medium text-[8px]">Available on the</span>
                  <span className="font-bold text-[12px] leading-3">Apple Store</span>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="text-center pt-20">
        <span className="text-sm">All rights reserved@jadoo.co</span>
      </div>
      <div className="hidden 2xl:block bg-[#D5AEE4] dark:bg-[#200e69] absolute bottom-0 right-0 w-12 h-5/12 blur-3xl translate-x-[calc(100%+80px)]"></div>
    </footer>
  );
}
