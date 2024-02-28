import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import '../Styles/cursor.css';
import AnimatedCursor from 'react-animated-cursor';

const MainLayout = () => {
  return (
    <div className="h-auto bg-[url('https://themedox.com/demo/mykd/assets/img/bg/area_bg02.jpg')] svg mx-auto">
      <AnimatedCursor
        innerSize={10}
        outerSize={50}
        innerScale={1}
        outerScale={2}
        outerAlpha={0}
        trailingSpeed={4}
        hasBlendMode={true}
        innerStyle={{
          backgroundColor: 'white',
        }}
        outerStyle={{
          border: '3px solid white',
        }}
      />
      <div>
        <Navbar></Navbar>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default MainLayout;
