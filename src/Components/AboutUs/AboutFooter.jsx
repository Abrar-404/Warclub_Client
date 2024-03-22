import footerBgPic from '../../assets/AboutFooter.png';
import Socials from '../Footer/Socials';

const AboutFooter = () => {
  return (
    <div>
      <div className="" style={{ backgroundImage: `url(${footerBgPic})` }}>
        <div className="flex justify-center gap-14 items-center lg:flex-row md:flex-col flex-col pt-32">
          <h1 className="text-white font-bold hover:text-[#45F882]">Home</h1>
          <h1 className="text-white font-bold hover:text-[#45F882]">
            About Us
          </h1>
          <h1 className="text-white font-bold hover:text-[#45F882]">Blog</h1>
          <h1 className="text-white font-bold hover:text-[#45F882]">Gallery</h1>
          <h1 className="text-white font-bold hover:text-[#45F882]">Contact</h1>
        </div>

        <div className="flex justify-center mx-auto lg:flex-row md:flex-col flex-col gap-20 ml-10 mt-20">
          <div>
            <div>
              <h1 className="text-white font-bold text-lg text-left">
                Office <span className="text-[#45f882]">Location:</span>
              </h1>
            </div>

            <div className="mt-2">
              <h1 className="text-left text-gray-400">
                Floor 2, 4 Naval St, Ancoats, Manchester <br /> M4 6EW, United
                Kingdom
              </h1>
            </div>
          </div>

          <div>
            <div>
              <h1 className="text-white font-bold text-lg text-left">
                Contact <span className="text-[#45f882]">Information:</span>
              </h1>
            </div>

            <div className="mt-2">
              <div>
                <h1 className="text-left text-gray-400 hover:text-[#45f882]">
                  (+163)-2547-36587
                </h1>
              </div>{' '}
              <div>
                <h1 className="text-left text-gray-400 hover:text-[#45f882]">
                  infohelp@bameexample.com
                </h1>
              </div>
            </div>
          </div>

          <div>
            <div>
              <h1 className="text-white font-bold text-lg text-left">
                Follow <span className="text-[#45f882]">With Us:</span>
              </h1>
            </div>

            <div>
              <Socials></Socials>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutFooter;
