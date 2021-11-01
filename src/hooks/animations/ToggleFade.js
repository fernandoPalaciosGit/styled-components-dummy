import {animated, useSpring, config} from 'react-spring'

export function ToggleFade({children, show}) {
  const animation = useSpring({
    opacity: show ? 1 : 0,
    transform: `translateY(${show ? 0 : -200}%)`,
    config: config.molasses
  });

  return <animated.div style={animation}>
    {children}
  </animated.div>
}
