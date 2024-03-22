import { useEffect } from 'react';
import '../Styles/circletext.css';
import '../Styles/customFont.css';

const TextCircle = () => {
  useEffect(() => {
    const text = document.querySelector('.text p');
    if (text) {
      text.innerHTML = text.innerText
        .split('')
        .map(
          (char, i) =>
            `<span style="transform:rotate(${i * 10}deg)">${char}</span>`
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
          <div>
            <div className="relative">
              <div className="absolute lg:bottom-[70px] lg:right-[400px] f md:right-[470px] md:bottom-[50px] flex justify-center bottom-[60px] right-[90px]">
                <div>
                  <div className="circle">
                    <img
                      className="rounded-full w-[150px] h-[150px]"
                      src="https://media.istockphoto.com/id/1390233984/photo/modern-luxury-bedroom.jpg?s=612x612&w=0&k=20&c=po91poqYoQTbHUpO1LD1HcxCFZVpRG-loAMWZT7YRe4="
                      alt=""
                    />
                    <div className="text">
                      <p>Experience Gam ing 24 Years With Warclub</p>
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
