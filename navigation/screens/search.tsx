import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import Search from "../../components/search/Search";

const SearchScreen = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <Search />
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default SearchScreen;
