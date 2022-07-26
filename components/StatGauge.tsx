import { motion } from 'framer-motion';
import { FC } from 'react';

const toHue = (n: number, min: number, max: number) =>
  ((n - min) / (max - min)) * 180;

export const StatGauge: FC<{ value: number; min: number; max: number }> = ({
  value,
  min,
  max,
}) => {
  return (
    <span className='w-full h-5 mx-2 inline-flex content-center'>
      <motion.div
        className='h-3'
        animate={{
          width: `${(value * 100) / max}%`,
          backgroundColor: `hsl(${toHue(value, min, max)}, 100%, 45%)`,
        }}
        initial={{
          width: '0%',
          backgroundColor: `hsl(0, 100%, 45%)`,
        }}
        transition={{ ease: 'easeInOut', duration: 0.3 }}
      />
    </span>
  );
};
