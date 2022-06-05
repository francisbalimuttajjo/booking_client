import React from "react";
import { Animated } from "react-native";

interface Props {
  width: string | number;
  height: number;
  borderRadius?: number;
  margin?: number | string;
}

const Skeleton = (props: Props) => {
  const opacity = React.useRef(new Animated.Value(0.3));

  React.useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(opacity.current, {
          toValue: 1,
          useNativeDriver: true,
          duration: 500,
        }),
        Animated.timing(opacity.current, {
          toValue: 0.3,
          useNativeDriver: true,
          duration: 800,
        }),
      ])
    ).start();
  }, [opacity]);

  return (
    <Animated.View
      style={{
        opacity: opacity.current,
        width: props.width,
        height: props.height,
        backgroundColor: "#d6d0d0",
        borderRadius: props.borderRadius,
        marginTop: props.margin,
      }}
    />
  );
};
export default Skeleton;
