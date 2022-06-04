import { useNavigation } from "@react-navigation/native";
import { NavigationProps } from "../../types/apiTypes";

const UseFns = () => {
  const { navigate } = useNavigation<NavigationProps>();
  const handleNavigation = () => navigate("HotelDetails");
  return { handleNavigation };
};

export default UseFns;
