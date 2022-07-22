import { ImOmega } from 'react-icons/im'
import { useRecoilState } from 'recoil'
import { mobileDrawerState } from '../../atoms'

import {AiOutlineClose} from "react-icons/ai"
interface MobileMenuProps {}

export const MobileMenu: React.FC<MobileMenuProps> = () => {
  const [open, setOpen] = useRecoilState(mobileDrawerState)
  return (
    <div
      className="border-[3px] transition-all duration-200 ease-in-out p-3 flex items-center justify-center rounded-full border-[#660000] mobileMenuShadow text-[#F2F3F4] cursor-pointer hover:border-[#203354] hover:scale-110 group focus:border-[#203354] bg-black"
      onClick={() => setOpen(!open)}
    >
      {open ? (
        <AiOutlineClose className="group-hover:scale-105" />
      ) : (
        <ImOmega className="group-hover:scale-105" />
      )}
    </div>
  )
}
