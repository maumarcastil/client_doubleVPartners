import { Outlet } from 'react-router-dom'
import { Header } from '../components/header'

const Layout = () => {
  return (
    <div className='flex min-h-screen bg-gray-100 px-4'>
      <div className='mx-auto w-full max-w-[1440px] '>
        <Header />
        <Outlet />
      </div>
    </div>
  )
}

export default Layout