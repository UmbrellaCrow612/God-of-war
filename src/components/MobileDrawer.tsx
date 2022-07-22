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
      className={`w-full h-[400px] border py-3 flex-col justify-between transition-all ease-in-out duration-150 ${
        showDrawer ? 'flex opacity-100' : 'hidden opacity-0'
      }`}
    >
      {options.map((option) => (
        <div
          key={option}
          className="border h-[40px] w-full flex items-center px-3 cursor-pointer group"
        >
          <p>{option}</p>
        </div>
      ))}
    </div>
  )
}
