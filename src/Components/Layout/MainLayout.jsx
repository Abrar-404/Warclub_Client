import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import '../Styles/cursor.css';
import AnimatedCursor from 'react-animated-cursor';
import { Circle2 } from 'react-preloaders';

const MainLayout = () => {
  const background = {
    backgroundImage: `url(https://themedox.com/demo/mykd/assets/img/bg/area_bg02.jpg)`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed',
  };

  return (
    <div className="svg" style={background}>
      <div className="mx-auto">
        {/* <SmoothScroll></SmoothScroll> */}

        <AnimatedCursor
          innerSize={10}
          outerSize={38}
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

        {/* <AnimatedCursor
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
            mixBlendMode: 'exclusion',
          }}
        /> */}

        <div className="md:max-w-[768px] max-w-[428px] lg:max-w-[1400px] mx-auto ">
          <Navbar></Navbar>
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
