
import React from 'react';

interface GridItemProps {
  title: string;
  imageUrl: string;
  className?: string; 
}

const GridItem: React.FC<GridItemProps> = ({
  title,
  imageUrl,
  className = '',
}) => {
  

  return (
    <div
      className={`relative w-full overflow-hidden rounded-2xl shadow-lg bg-cover bg-center ${className}`}
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      <div className="absolute inset-0 bg-black/30"></div>

      <div
        className="relative z-10 flex h-full w-full p-20 items-center justify-center text-center"
      >
        <h3 className="text-[28px] md:text-[20px] lg:text-[28px] xl:text-[30px] font-cal text-white">{title}</h3>
      </div>
    </div>
  );
};

export default GridItem;