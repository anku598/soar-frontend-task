import { useLocation } from 'react-router'
import Avatar from '../../assets/img/user-pic.jpg'
import { IconComp } from '../icons/IconComp'

const pageTitles: { [key: string]: string } = {
  '/': 'Overview',
  '/transactions': 'Transactions',
  '/accounts': 'Accounts',
  '/investments': 'Investments',
  '/cards': 'Credit Cards',
  '/loans': 'Loans',
  '/privileges': 'My Privileges',
  '/services': 'Services',
  '/settings': 'Settings',
}

export function Header() {
  const location = useLocation()
  const currentTitle = pageTitles[location.pathname] || 'Overview'

  return (
    <div className="flex items-center justify-between px-10 py-5 bg-white border-b border-[#E6EFF5]">
      <h1 className="font-heading-1">{currentTitle}</h1>

      <div className="flex items-center gap-[30px]">
        <div className="relative">
          <input
            type="text"
            placeholder="Search for something"
            className="pl-12 pr-4  py-4 bg-[#F5F7FA] border-none rounded-[2.5rem] focus:ring-0 focus:ring-gray-200 focus:outline-none w-[280px] text-[0.98rem] text-[#8BA3CB] placeholder-[#8BA3CB]"
          />
          <IconComp
            name="search"
            className=" text-gray-400 absolute left-5 top-1/2 transform -translate-y-1/2"
          />
        </div>

        <button className="p-2 hover:bg-gray-50 rounded-full">
          <IconComp name="header-settings-gear" className=" text-gray-600" />
        </button>

        <button className="p-2 hover:bg-gray-50 rounded-full">
          <IconComp name="notification" className=" " />
        </button>

        <div className="w-10 h-10 rounded-full overflow-hidden cursor-pointer">
          <img
            src={Avatar}
            alt="User avatar"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  )
}
