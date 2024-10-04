import { Outlet } from 'react-router-dom';

import Footer from '../layout/Footer';
import Header from '../layout/Header';

const Dashboard = () => {
  return (
    <div id="dashboard" className="flex min-h-screen w-full flex-col">
      <Header />
      <main className="grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Dashboard;
