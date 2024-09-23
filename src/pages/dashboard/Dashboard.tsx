import { Outlet } from 'react-router-dom';

import Footer from '../layout/Footer';
import Header from '../layout/Header';

const Dashboard = () => {
  return (
    <div id="dashboard" className="w-screen">
      <Header />
      <div className="min-h-[84vh]">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Dashboard;
