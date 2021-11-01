import {useTransition, animated} from 'react-spring';

export default function ToggleFadeTransition({statusA, statusB, show}) {
  const transition = useTransition(show, {
    from: { position: "absolute", opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    delay: 200
  });

  return transition((props, item) => item
    ? <animated.span style={props}>{statusA}</animated.span>
    : <animated.span style={props}>{statusB}</animated.span>
  );
}
