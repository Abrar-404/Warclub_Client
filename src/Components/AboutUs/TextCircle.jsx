import { useEffect } from 'react';
import '../Styles/circletext.css';
import '../Styles/customFont.css';
import logo from '../../assets/logosamp.png';

const TextCircle = () => {
  useEffect(() => {
    const text = document.querySelector('.text p');
    if (text) {
      text.innerHTML = text.innerText
        .split('')
        .map(
          (char, i) =>
            `<span style="transform:rotate(${i * 25}deg)">${char}</span>`
        )
        .join('');
    } else {
      console.error("Element with selector '.text p' not found.");
    }
  }, []);

  return (
    <textcircle>
      <div className="flex md:flex-col lg:flex-row flex-col mx-auto gap-14 mt-72 justify-center">
        <div>
          <div className="">
            <div className="relative ">
              <div className="absolute lg:bottom-[70px] lg:right-[400px] f md:right-[470px] md:bottom-[50px] flex justify-center bottom-[60px] right-[90px]">
                <div>
                  <div className="circle">
                    <img
                      className="rounded-full w-[150px] h-[150px]"
                      src={logo}
                      alt=""
                    />
                    <div className="text border-2 border-[#45F882] rounded-full">
                      <p className="text-[#45F882] ">w a r c l u b</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </textcircle>
  );
};

export default TextCircle;
