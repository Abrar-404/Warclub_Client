import { Outlet } from 'react-router-dom';

const MainLayout = () => {
  return (
    <div className="h-screen bg-[url('https://themedox.com/demo/mykd/assets/img/bg/area_bg02.jpg')]">
      <div>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default MainLayout;
