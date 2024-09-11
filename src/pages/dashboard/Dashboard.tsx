import { Outlet } from 'react-router-dom';
import Header from '../layout/Header';
import Footer from '../layout/Footer';

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
