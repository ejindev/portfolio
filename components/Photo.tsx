"use client";

import { delay, motion } from "framer-motion";
import Image from "next/image";

const Photo = () => {
  return (
    <div className="w-full h-full relative">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 0.8, duration: 0.4, ease: "easeIn" }
        }}
      >
        {/* image */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 1.2, duration: 0.4, ease: "easeInOut" }
          }}
          className="absolute w-[298px] h-[298px] lg:w-[498px] lg:h-[498px] mix-blend-lighten">
          <Image
            className="object-contain"
            src="/assets/photo.png"
            sizes=""
            priority
            quality={100}
            fill
            alt=""
          />
        </motion.div>
        {/* circle */}
        <motion.svg
          className="w-[300px] lg:w-[506px] h-[300px] lg:h-[506px]"
          fill={`transparent`}
          viewBox={`0 0 506 506`}
          xmlns={`http://www.w3.org/2000/svg`}
        >
          <motion.circle
            cx={`253`}
            cy={`253`}
            r={`250`}
            stroke={`#e8691e`}
            strokeWidth={`4`}
            strokeLinecap={`round`}
            strokeLinejoin={`round`}
            initial={{ strokeDasharray: "24 10 0 0" }}
            animate={{
              strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
              rotate: [120, 360]
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          />
        </motion.svg>
      </motion.div>
    </div>
  )
}

export default Photo