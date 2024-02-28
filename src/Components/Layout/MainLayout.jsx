import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import '../Styles/cursor.css';

const MainLayout = () => {
  return (
    <div className="h-auto bg-[url('https://themedox.com/demo/mykd/assets/img/bg/area_bg02.jpg')] svg mx-auto">
      <div>
        <Navbar></Navbar>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default MainLayout;
