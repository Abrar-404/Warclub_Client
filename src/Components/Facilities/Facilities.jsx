import controller from '../../assets/controller.svg';
import '../Styles/facilities.css'

const Facilities = () => {
  return (
    <div>
      <div className="flex justify-center mx-auto gap-10">
        <div className="bg-[#0F1C23] rounded-xl bg-transparent">
          <div className="py-5 px-5">
            <div className="mx-auto  flex justify-center">
              <img className='invisible' src={controller} alt="" />
            </div>
            <div className="">
              <h1 className="text-center invisible">Esports Lounge</h1> <br />
              <h1 className="text-center invisible">
                Lounge areas with comfortable seating for relaxation between
                gaming sessions. Provide snacks, drink, and vending machine for
                refreshments.
              </h1>
            </div>
          </div>
        </div>

        <div className="bg-[#0F1C23] rounded-xl">
          <div className="py-5 px-5">
            <div className="mx-auto flex justify-center">
              <img src={controller} alt="" />
            </div>
            <div className="">
              <h1 className="text-center">Esports Lounge</h1> <br />
              <h1 className="text-center">
                Lounge areas with comfortable seating for relaxation between
                gaming sessions. Provide snacks, drink, and vending machine for
                refreshments.
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Facilities;
