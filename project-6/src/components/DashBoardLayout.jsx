import React, { Children } from 'react'
import Sidenav from '../components/Sidenav'
import TopNav from '../components/TopNav'


const DashBoardLayout = ({title,children}) => {
  return (
    <div className='flex h-screen'>

      <div className='w-[256px] hidden md:block bg-gray-200'>
        <Sidenav/>
      </div>
      
      <div className='flex-1 bg-white'>
         <TopNav title={title}/>
         <div className='max-w-[1100px] px-4 '>{children}</div>
      </div>
      
    </div>
  )
}

export default DashBoardLayout