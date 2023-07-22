import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div className='flex min-h-screen bg-slate-500'>
      <div className='mx-auto w-full max-w-[1440px] bg-white '>
      {<Outlet/>}
      </div>
    </div>
  )
}

export default Layout