import { motion, useScroll, useTransform } from 'motion/react';

export default function SunEffect() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 300]);
  const rotate = useTransform(scrollY, [0, 1000], [0, 90]);
  
  return (
    <div className="fixed top-0 left-0 w-full h-full pointer-events-none overflow-hidden -z-10">
      {/* Soft warm sun glow */}
      <motion.div 
        style={{ y }}
        className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-amber-500/10 rounded-full blur-[120px]"
      />
      
      {/* Decorative spinning sun element */}
      <motion.div
        style={{ y, rotate }}
        className="absolute top-24 -right-12 w-64 h-64 border border-amber-300/30 rounded-full border-dashed opacity-50"
      />
    </div>
  );
}
