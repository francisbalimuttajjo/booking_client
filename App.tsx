import React from "react";
import AppLoading from "expo-app-loading";
import "react-native-gesture-handler";
import devTools from "react-query-native-devtools";
import { QueryClient, QueryClientProvider } from "react-query";
import Container from "./navigation/mainNavigation";
import UserContext from "./utils/fns/userContext";
import useFns from "./utils/fns/useAppFns";
import { initial } from "lodash";

const App = () => {
  const queryClient = new QueryClient();
  // if (__DEV__) {
  // import('react-query-native-devtools').then(({ addPlugin }) => {
  //   addPlugin({ queryClient });
  // });
  //}

  const {
    isAuthenticating,
    setIsAuthenticating,
    authenticateUser,
    initialState,
    handleLogin,
  } = useFns();

  if (isAuthenticating) {
    return (
      <AppLoading
        startAsync={authenticateUser}
        onFinish={() => setIsAuthenticating(false)}
        onError={console.warn}
      />
    );
  }

  return (
    <UserContext.Provider value={{ initialState, handleLogin }}>
      <QueryClientProvider client={queryClient}>
        <Container />
      </QueryClientProvider>
    </UserContext.Provider>
  );
};

export default App;
