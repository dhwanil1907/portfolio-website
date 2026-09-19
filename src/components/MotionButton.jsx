import { motion as Motion, useReducedMotion } from 'framer-motion';

const buttonHover = { y: -4, scale: 1.03 };
const buttonTap = { scale: 0.97 };
const iconHover = { y: -4, scale: 1.15 };
const iconTap = { scale: 0.95 };

function useMotionProps(type = 'button') {
  const shouldReduceMotion = useReducedMotion() ?? false;
  if (shouldReduceMotion) return { whileHover: {}, whileTap: {} };
  return type === 'icon'
    ? { whileHover: iconHover, whileTap: iconTap }
    : { whileHover: buttonHover, whileTap: buttonTap };
}

export function MotionButton({ children, ...props }) {
  const motionProps = useMotionProps('button');
  return (
    <Motion.a {...motionProps} {...props}>
      {children}
    </Motion.a>
  );
}

export function MotionButtonEl({ children, ...props }) {
  const motionProps = useMotionProps('button');
  return (
    <Motion.button {...motionProps} {...props}>
      {children}
    </Motion.button>
  );
}

export function MotionIconLink({ children, ...props }) {
  const motionProps = useMotionProps('icon');
  return (
    <Motion.a {...motionProps} {...props}>
      {children}
    </Motion.a>
  );
}
