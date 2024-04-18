import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

const ShuffleHero = () => {
  return (
    <section className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 items-center gap-8 max-w-12xl mx-auto m-auto">
      <ShuffleGrid />
    </section>
  );
};

const shuffle = array => {
  let currentIndex = array.length,
    randomIndex;

  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
};

const squareData = [
  {
    id: 1,
    src: 'https://i.ibb.co/kBZy7RW/Baldurs-Gate-3.webp',
  },
  {
    id: 2,
    src: 'https://i.ibb.co/JxxV9Tp/survivor-16827508379411387348426.webp',
  },
  {
    id: 3,
    src: 'https://i.ibb.co/MSp4QJd/horizon-forbidden-west-burning-shores-1-jpg.jpg',
  },
  {
    id: 4,
    src: 'https://i.ibb.co/F7xDbC0/Spider-Man-Remastered-Adding-Two-New-Costumes-featured-image-gaming-instincts.webp',
  },
  {
    id: 5,
    src: 'https://i.ibb.co/r45Wd7F/God-of-War-Ragnarok-release-date-7ce4b11.jpg',
  },
  {
    id: 6,
    src: 'https://i.ibb.co/WVrtLXm/joel-ellie.webp',
  },
  {
    id: 7,
    src: 'https://i.ibb.co/Fz8FkjT/TEKKEN-SITE.webp',
  },
  {
    id: 8,
    src: 'https://i.ibb.co/K0bm2VY/Ftq2i-XRa-DXrexx-Yr-Pe-QHd3.jpg',
  },
  {
    id: 9,
    src: 'https://i.ibb.co/5L64NQx/deathloop.webp',
  },
  {
    id: 10,
    src: 'https://i.ibb.co/DzqsNw5/happy-13th-birthday-halo-reach-v0-bjylanxba8ob1.webp',
  },
  {
    id: 11,
    src: 'https://i.ibb.co/LkJ6y0m/back-4-blood.webp',
  },
  {
    id: 12,
    src: 'https://i.ibb.co/N7SdtY5/best-horror-games-on-ps5-guide-1-large.jpg',
  },
  {
    id: 13,
    src: 'https://i.ibb.co/7vFFjYZ/PSV0538-11.webp',
  },
  {
    id: 14,
    src: 'https://i.ibb.co/TwgjgWg/valhalla.webp',
  },
  {
    id: 15,
    src: 'https://i.ibb.co/Rp0wyv2/Sifu-game-1170x675.jpg',
  },
  {
    id: 16,
    src: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1820&q=80',
  },
];

const generateSquares = () => {
  return shuffle(squareData).map(sq => (
    <motion.div
      key={sq.id}
      layout
      transition={{ duration: 3.5, type: 'spring' }}
      className="w-full h-full"
      style={{
        backgroundImage: `url(${sq.src})`,
        backgroundSize: 'cover',
      }}
    ></motion.div>
  ));
};

const ShuffleGrid = () => {
  const timeoutRef = useRef(null);
  const [squares, setSquares] = useState(generateSquares());

  useEffect(() => {
    shuffleSquares();

    return () => clearTimeout(timeoutRef.current);
  }, []);

  const shuffleSquares = () => {
    setSquares(generateSquares());

    timeoutRef.current = setTimeout(shuffleSquares, 4000);
  };

  return (
    <div className="grid grid-cols-4 grid-rows-4 h-[950px] gap-1">
      {squares.map(sq => sq)}
    </div>
  );
};

export default ShuffleHero;
