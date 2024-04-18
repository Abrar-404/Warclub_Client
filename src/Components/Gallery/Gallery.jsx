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
    src: 'https://images.unsplash.com/photo-1556817411-31ae72fa3ea0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
  },
  {
    id: 7,
    src: 'https://images.unsplash.com/photo-1599586120429-48281b6f0ece?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
  },
  {
    id: 8,
    src: 'https://plus.unsplash.com/premium_photo-1671436824833-91c0741e89c9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
  },
  {
    id: 9,
    src: 'https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
  },
  {
    id: 10,
    src: 'https://images.unsplash.com/photo-1610768764270-790fbec18178?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
  },
  {
    id: 11,
    src: 'https://images.unsplash.com/photo-1507034589631-9433cc6bc453?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=684&q=80',
  },
  {
    id: 12,
    src: 'https://images.unsplash.com/photo-1533107862482-0e6974b06ec4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=882&q=80',
  },
  {
    id: 13,
    src: 'https://images.unsplash.com/photo-1560089000-7433a4ebbd64?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
  },
  {
    id: 14,
    src: 'https://images.unsplash.com/photo-1517466787929-bc90951d0974?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=686&q=80',
  },
  {
    id: 15,
    src: 'https://images.unsplash.com/photo-1606244864456-8bee63fce472?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=681&q=80',
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