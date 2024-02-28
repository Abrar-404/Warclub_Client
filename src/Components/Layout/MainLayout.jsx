import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';

const MainLayout = () => {
  return (
    <div className="h-auto bg-[url('https://themedox.com/demo/mykd/assets/img/bg/area_bg02.jpg')] mx-auto">
      <div>
        <Navbar></Navbar>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default MainLayout;


