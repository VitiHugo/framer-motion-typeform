import { useTransform, useViewportScroll } from 'framer-motion';
import { Container } from './styles';

export function Header() {
  const { scrollYProgress } = useViewportScroll()

  const headerY = useTransform(
    scrollYProgress,
    [0.188, 0.238],
    ['0%', '-100%']
  )

  return (
    <Container style={{ y: headerY }}/>
  );
}
