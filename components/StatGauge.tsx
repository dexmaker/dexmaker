import { motion } from "framer-motion";
import React, { FC } from "react";

const toHue = (n: number) => (n / 255) * 180;

export const StatGauge: FC<{ value: number }> = ({ value }) => {
  return (
    <span className="w-64 block h-3 mx-2">
      <motion.div
        className="h-3 block rounded-md"
        animate={{
          width: `${(value * 100) / 255}%`,
          backgroundColor: `hsl(${toHue(value)}, 100%, 45%)`,
        }}
        initial={{
          width: "0%",
          backgroundColor: `hsl(0, 100%, 45%)`,
        }}
        transition={{ ease: "easeInOut", duration: 0.3 }}
      />
    </span>
  );
};