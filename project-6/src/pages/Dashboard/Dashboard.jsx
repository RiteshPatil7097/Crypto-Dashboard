import React from 'react'
import Sidenav from '../../components/Sidenav'
import TopNav from '../../components/TopNav'
import DashBoardLayout from "../../components/DashBoardLayout";
import Portfolio from './Components/Portfolio';
import PriceSection from './Components/PriceSection';

const Dashboard = () => {
  return (
    <DashBoardLayout title="Dashboard">
       <Portfolio />
       <PriceSection />
    </DashBoardLayout>
  )
}

export default Dashboard