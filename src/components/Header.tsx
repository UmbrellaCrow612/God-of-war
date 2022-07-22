/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import { MobileMenu } from './MobileMenu'
import { options } from './MobileDrawer'
interface HeaderProps {}

export const Header: React.FC<HeaderProps> = () => {
  return (
    <>
      <nav className="px-4 h-[85px] sticky top-0 flex items-center justify-between bg-[#1b1b1b] max-w-screen-2xl mx-auto">
        <Link href="/">
          <a>
            <div className="width-[50px] h-[50px]">
              <img
                src="/images/logo.webp"
                alt="God of war"
                loading="lazy"
                className="w-full h-full"
              />
            </div>
          </a>
        </Link>
        <MobileMenu />
        <div className="items-center justify-between hidden xl:flex w-[70%]">
          {options.map((option) => (
            <button
              key={option}
              className="hover:text-[#660000] tracking-widest  text-xl text-[#F2F3F4] p-1 rounded-full transition-all duration-150 ease-in-out cursor-pointer"
            >
              <p>{option}</p>
            </button>
          ))}
        </div>
      </nav>
    </>
  )
}
