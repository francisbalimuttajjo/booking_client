import {FieldProps} from 'formik';
import React from 'react';
import {StyleSheet} from 'react-native';
import {TextInput} from 'react-native-paper';

type Props = {
  keyboard?: boolean;
  isAmount?: boolean;
  label: string;
  error?: boolean;
};

const Input: React.FC<Props & FieldProps> = props => {
  const {
    keyboard,
    isAmount,
    label,
    error,
    field: {name, onBlur, onChange, value},
    form: {errors, touched, setFieldTouched},
    ...inputProps
  } = props;

  const hasError: any = errors[name] && touched[name];

  return (
    <TextInput
      accessibilityLabelledBy={undefined}
      accessibilityLanguage={undefined}
      label={props.label}
      onChangeText={text => {
        onChange(name)(text);
      }}
      onBlur={() => {
        setFieldTouched(name);
        onBlur(name);
      }}
      mode="outlined"
      autoCapitalize="none"
      autoCorrect={false}
      value={value}
      {...inputProps}
      outlineColor="#bdbdbd"
      activeOutlineColor="#326fa8"
      keyboardType={props.keyboard ? 'numeric' : 'default'}
      error={hasError}
      style={styles.input} // autoComplete
    />
  );
};
export default Input;

const styles = StyleSheet.create({
  input: {
    fontSize: 13,
    height: 50,
    marginTop: '5%',
  },
});
