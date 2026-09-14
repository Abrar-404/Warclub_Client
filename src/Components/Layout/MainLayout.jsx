import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import '../Styles/cursor.css';
import AnimatedCursor from 'react-animated-cursor';
import AOS from 'aos';
import 'aos/dist/aos.css';

const MainLayout = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-out-cubic',
      once: true,
    });
  }, []);

  const background = {
    backgroundImage: `url(https://themedox.com/demo/mykd/assets/img/bg/area_bg02.jpg)`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed',
  };

  return (
    <div className="svg min-h-screen text-white" style={background}>
      <div className="mx-auto">
        <AnimatedCursor
          innerSize={10}
          outerSize={38}
          innerScale={1}
          outerScale={1.8}
          outerAlpha={0.15}
          trailingSpeed={5}
          hasBlendMode={true}
          innerStyle={{
            backgroundColor: '#45F882',
            zIndex: 9999999,
          }}
          outerStyle={{
            border: '2px solid #45F882',
            zIndex: 9999999,
          }}
          clickables={[
            'a',
            'input[type="text"]',
            'input[type="email"]',
            'input[type="number"]',
            'input[type="submit"]',
            'input[type="password"]',
            'input[type="search"]',
            'input[type="checkbox"]',
            'input[type="radio"]',
            'select',
            'textarea',
            'button',
            '.link',
            '.clickable',
            '.cta',
            '.pulse-button',
            '.cat_btn',
            '.modal',
            '.modal-box',
            '.swal2-confirm',
            '.swal2-cancel',
            '.swal2-close',
          ]}
        />

        <div className="md:max-w-[768px] max-w-[428px] lg:max-w-[1400px] mx-auto">
          <Navbar />
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
