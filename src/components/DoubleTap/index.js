import React from 'react';
import { TouchableOpacity } from 'react-native';

const DoubleTap = (props) => {

  const [state, setState] = React.useState({
    delay: 300,
    lastTap: null,
  })
  const handleDoubleTap = () => {
    const now = Date.now();
    if (state.lastTap && (now - state.lastTap) < state.delay) {
      props.onDoubleTap();
    }
    else {
      setState((prev) => ({ ...prev, lastTap: now }));
    }
  }
  return (
    <TouchableOpacity
      activeOpacity={1}
      onPress={handleDoubleTap}
    >
      {props.children}
    </TouchableOpacity>
  );
}
export default DoubleTap;