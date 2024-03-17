import controller from '../../assets/controller.svg';
import controller2 from '../../assets/controller2.svg';
import controller3 from '../../assets/controller3.svg';
import '../Styles/facilities.css';

const Facilities = () => {
  return (
    <div>
      <div className="mt-32">
        <h1 className="text-[#45F882] text-center font-semibold text-2xl">
          # World Best Facilities Game
        </h1>
        <br />
        <h1 className="text-5xl text-white text-center font-bold">
          Bame Comes With Many Facilities Included <br /> In Planet{' '}
          <span className="text-[#45F882]">!</span>
        </h1>
      </div>

      <div
        style={{
          backgroundImage:
            'url("https://wordpress.themeholy.com/bame/wp-content/uploads/2024/01/feature-sec1-bg.png")',
          borderRadius: '70px',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
      >
        {/* 1st row */}

        <div className="flex justify-center mx-auto gap-10 lg:flex-row md:flex-col flex-col">
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

        {/* 2nd row */}

        <div className="flex justify-start lg:flex-row md:flex-col flex-col gap-10 mt-48">
          <div className="bg-[#0B0E13] rounded-[40px]  py-10 px-10">
            <div className="bg-[#0F1C23] rounded-[40px]">
              <div className="py-10 px-5">
                <div className="mx-auto flex justify-center">
                  <img className="mb-5" src={controller2} alt="" />
                </div>
                <div className="text-white">
                  <h1 className="text-center text-3xl font-bold">
                    Training Facilities
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

        {/* 3rd row */}

        <div className="flex justify-start lg:flex-row md:flex-col flex-col-reverse gap-10 mt-48">
          <div className="bg-[#0F1C23] rounded-xl bg-transparent">
            <div className="py-10 px-5">
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
                  <img className="mb-5" src={controller3} alt="" />
                </div>
                <div className="text-white">
                  <h1 className="text-center text-3xl font-bold">
                    Broadcasting Studio
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
      </div>
    </div>
  );
};

export default Facilities;
