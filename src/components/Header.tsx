/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import { MobileMenu } from './MobileMenu'

interface HeaderProps {}

export const Header: React.FC<HeaderProps> = () => {
  return (
    <>
      <nav className="px-4 h-[85px] sticky top-0 flex items-center justify-between bg-[#1b1b1b]">
        <MobileMenu />
        <Link href="/">
          <a>
            <div className="width-[120px] h-[100px]">
              <img
                src="/images/logo.png"
                alt="God of war"
                loading="lazy"
                className="w-full h-full"
              />
            </div>
          </a>
        </Link>
      </nav>
    </>
  )
}
