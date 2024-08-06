import { Outlet } from 'react-router-dom';

import Footer from '../layout/Footer';
import Header from '../layout/Header';

const Dashboard = () => {
  return (
    <div className="h-screen w-screen">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Dashboard;
