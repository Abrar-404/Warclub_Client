import footerBgPic from '../../assets/AboutFooter.png';

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
      </div>
    </div>
  );
};

export default AboutFooter;
