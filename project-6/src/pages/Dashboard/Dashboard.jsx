import React from 'react'
import Sidenav from '../../components/Sidenav'
import TopNav from '../../components/TopNav'
import DashBoardLayout from "../../components/DashBoardLayout";

const Dashboard = () => {
  return (
    <DashBoardLayout title="Dashboard">
       <div className="bg-yellow-600 ml-40 px-4 justify-center">How are you</div>
    </DashBoardLayout>
  )
}

export default Dashboard