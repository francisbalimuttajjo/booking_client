import React from 'react';
import 'react-native-gesture-handler';
// import AppLoading from 'expo-app-loading';
import {Provider as PaperProvider} from 'react-native-paper';
import {QueryClient, QueryClientProvider} from 'react-query';
//import Container from './navigation/mainNavigation';
import UserContext from './utils/fns/userContext';
import useFns from './utils/fns/useAppFns';
import {Text} from 'react-native';
const App = () => {
  const queryClient = new QueryClient();

  const {
    //isAuthenticating,
    // setIsAuthenticating,
    // authenticateUser,
    initialState,
    handleLogin,
    handleLogOut,
    updateProfilePic,
  } = useFns();

  // if (isAuthenticating) {
  //   return (
  //     <Text>Loading</Text>
  //     // <AppLoading
  //     //   startAsync={authenticateUser}
  //     //   onFinish={() => setIsAuthenticating(false)}
  //     //   onError={console.warn}
  //     // />
  //   );
  // }

  return (
    <UserContext.Provider
      value={{initialState, handleLogin, handleLogOut, updateProfilePic}}>
      <QueryClientProvider client={queryClient}>
        <PaperProvider>
          {/* <Container /> */}
          <Text>Initial Implementation</Text>
        </PaperProvider>
      </QueryClientProvider>
    </UserContext.Provider>
  );
};

export default App;
