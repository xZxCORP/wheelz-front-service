import { Outlet } from 'react-router-dom';
import Header from '../layout/Header';
import Footer from '../layout/Footer';

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
