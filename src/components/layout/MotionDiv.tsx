"use client";

import { motion } from "framer-motion";

const MotionDiv = ({ children }: { children: React.ReactNode }) => {
  return <motion.div>{children}</motion.div>;
};

export default MotionDiv;
