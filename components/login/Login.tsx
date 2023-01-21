import React from 'react';
import {Formik, Field} from 'formik';
import {
  ActivityIndicator,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Input from '../reusableComponents/Input';
import Info from '../reusableComponents/Info';
import Welcome from './Welcome';
import {TextInput, Title} from 'react-native-paper';
import useFns from './useFns';

export const Form = () => {
  const {
    handleSubmit,
    isLoading,
    toggleSecureText,
    errorMessage,
    initialValues,
    validationSchema,
    navigate,
    secureText,
  } = useFns();

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}>
      {({handleSubmit}) => (
        <ScrollView>
          <Welcome />
          <View style={styles.container}>
            <Field
              component={Input}
              name="Email"
              label="Email"
              left={<TextInput.Icon icon="email" color="#bbbdbd" />}
            />
            <Field
              component={Input}
              name="Password"
              label="Password"
              secureTextEntry={secureText}
              left={<TextInput.Icon icon="lock" color="#bbbdbd" />}
              right={
                <TextInput.Icon
                  icon={!secureText ? 'eye-off' : 'eye'}
                  color="#bbbdbd"
                  onPress={toggleSecureText}
                />
              }
            />
            {errorMessage !== '' && <Info error={errorMessage} />}
            <TouchableOpacity
              activeOpacity={0.6}
              disabled={isLoading}
              style={styles.btn}
              onPress={handleSubmit}>
              {!isLoading && <Text style={styles.login_text}>Login</Text>}
              {isLoading && <ActivityIndicator size="small" color="white" />}
            </TouchableOpacity>
            <View style={styles.button}>
              <TouchableOpacity onPress={() => navigate('ForgotPassword')}>
                <Text style={styles.password}>Forgot Password ?</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.sub_container}>
            <Text style={styles.register_text}>Dont Have Account?</Text>
            <TouchableOpacity onPress={() => navigate('SignUp')}>
              <Title style={{color: '#326fa8'}}>Register</Title>
            </TouchableOpacity>
          </View>
        </ScrollView>
      )}
    </Formik>
  );
};
export default Form;

const styles = StyleSheet.create({
  container: {width: '95%', alignSelf: 'center'},
  login_text: {color: '#fff', fontWeight: 'bold', fontSize: 18},
  register_text: {color: 'black', fontSize: 18, marginRight: 10},
  password: {color: '#326fa8', fontSize: 14},
  button: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  btn: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 15,
    borderRadius: 7,
    marginTop: 20,
    backgroundColor: '#326fa8',
  },
  sub_container: {
    marginTop: '5%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
