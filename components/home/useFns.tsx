import { useNavigation } from "@react-navigation/native";
import { Hotel, HotelDetailsNavigationProps } from "../../types/apiTypes";

const UseFns = (hotel?: Hotel) => {
  const { navigate } = useNavigation<HotelDetailsNavigationProps>();
  const handleNavigation = () => navigate("HotelDetails", { hotel });
  const navigateToProfile = () => navigate("Profile");
  return { handleNavigation, navigateToProfile };
};

export default UseFns;
