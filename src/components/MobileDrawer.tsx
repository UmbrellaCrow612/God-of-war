import { useRecoilValue } from 'recoil'
import { mobileDrawerState } from '../../atoms'

interface mobileDrawerProps {}

export const MobileDrawer: React.FC<mobileDrawerProps> = () => {
  const showDrawer = useRecoilValue(mobileDrawerState)
  const options = [
    'Buy or pre-order',
    'Game Info',
    'Stories',
    'Media',
    'Fan Art',
    'Blog',
    'New game +',
    'News',
    'More',
  ]
  return (
    <div
      className={`w-full h-[400px] py-3 flex-col justify-between transition-all ease-in-out duration-150 bg-[#1d1919] ${
        showDrawer ? 'flex opacity-100' : 'hidden opacity-0'
      }`}
    >
      {options.map((option) => (
        <div
          key={option}
          className="h-[40px] transition-all duration-150 ease-in-out w-full flex items-center px-6 border-b cursor-pointer tracking-widest group rounded-md text-xl text-[#F2F3F4] hover:text-[#660000] hover:bg-[#1e1515]"
        >
          <p>{option}</p>
        </div>
      ))}
    </div>
  )
}
