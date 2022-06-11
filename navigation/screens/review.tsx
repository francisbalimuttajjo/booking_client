import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import Review from "../../components/review/Review";
import { mainStackParams } from "../../types/screenTypes";

type Props = NativeStackScreenProps<mainStackParams, "Review">;

const ReviewScreen = ({ route }: Props) => {
  const { hotel } = route.params;
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <Review hotel={hotel} />
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default ReviewScreen;


