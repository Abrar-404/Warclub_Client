import Marquee from 'react-fast-marquee';

const MarqueeText = () => {
  return (
    <div>
      <Marquee>
        <div className="flex items-center gap-10">
          <h1 className="text-4xl">ACTION-PACKED</h1>
          <h1 className="text-4xl">MIND-BENDING</h1>
          <h1 className="text-4xl">Collection OG Games</h1>
          <h1 className="text-4xl">Gaming Spanning</h1>
        </div>
      </Marquee>
    </div>
  );
};

export default MarqueeText;
