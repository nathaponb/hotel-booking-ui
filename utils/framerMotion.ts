const easing: number[] = [0.6, -0.05, 0.01, 0.99];

export const parentMotion = {
  hidden: {
    opacity: 0,
    y: 60,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      ease: easing,
      duration: 1,
      staggerChildren: 0.5,
    },
  },
};

export const childMotion = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};
