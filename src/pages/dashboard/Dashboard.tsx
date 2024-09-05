import { Outlet } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div className="h-screen w-screen bg-orange-200">
      <Outlet />
    </div>
  );
};

export default Dashboard;
