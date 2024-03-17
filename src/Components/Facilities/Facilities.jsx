import controller from '../../assets/controller.svg';
import '../Styles/facilities.css';

const Facilities = () => {
  return (
    <div>
      <div
        style={{
          backgroundImage:
            'url("https://wordpress.themeholy.com/bame/wp-content/uploads/2024/01/feature-sec1-bg.png")',
          borderRadius: '70px',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="flex justify-center mx-auto gap-10">
          <div className="bg-[#0F1C23] rounded-xl bg-transparent">
            <div className="py-5 px-5">
              <div className="mx-auto  flex justify-center">
                <img className="invisible" src={controller} alt="" />
              </div>
              <div className="">
                <h1 className="text-center invisible">Esports Lounge</h1> <br />
                <h1 className="text-center invisible">
                  Lounge areas with comfortable seating for relaxation between
                  gaming sessions. Provide snacks, drink, and vending machine
                  for refreshments.
                </h1>
              </div>
            </div>
          </div>

          <div className="bg-[#0B0E13] rounded-[40px]  py-10 px-10">
            <div className="bg-[#0F1C23] rounded-[40px]">
              <div className="py-10 px-5">
                <div className="mx-auto flex justify-center">
                  <img className="mb-5" src={controller} alt="" />
                </div>
                <div className="text-white">
                  <h1 className="text-center text-3xl font-bold">
                    Esports Lounge
                  </h1>{' '}
                  <br />
                  <h1 className="text-center text-[#5C6574] font-semibold">
                    Lounge areas with comfortable seating for relaxation between
                    gaming sessions. Provide snacks, drink, and vending machine
                    for refreshments.
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-start gap-10 mt-48">
          <div className="bg-[#0B0E13] rounded-[40px]  py-10 px-10">
            <div className="bg-[#0F1C23] rounded-[40px]">
              <div className="py-10 px-5">
                <div className="mx-auto flex justify-center">
                  <img className="mb-5" src={controller} alt="" />
                </div>
                <div className="text-white">
                  <h1 className="text-center text-3xl font-bold">
                    Esports Lounge
                  </h1>{' '}
                  <br />
                  <h1 className="text-center text-[#5C6574] font-semibold">
                    Lounge areas with comfortable seating for relaxation between
                    gaming sessions. Provide snacks, drink, and vending machine
                    for refreshments.
                  </h1>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#0F1C23] rounded-xl bg-transparent">
            <div className="py-5 px-5">
              <div className="mx-auto  flex justify-center">
                <img className="invisible" src={controller} alt="" />
              </div>
              <div className="">
                <h1 className="text-center invisible">Esports Lounge</h1> <br />
                <h1 className="text-center invisible">
                  Lounge areas with comfortable seating for relaxation between
                  gaming sessions. Provide snacks, drink, and vending machine
                  for refreshments.
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Facilities;
