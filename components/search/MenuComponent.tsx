import React from 'react';
import {StyleSheet} from 'react-native';
import {Button, Menu} from 'react-native-paper';

interface MenuProps {
  title: string;
  isVisible: boolean;
  onDismiss: () => void;
  handlePress: () => void;
  handleMenuItemPress: (val: string) => void;
  data: string[];
}

const MenuComponent = (props: MenuProps) => {
  return (
    <Menu
      visible={props.isVisible}
      onDismiss={props.onDismiss}
      anchor={
        <Button
          style={styles.btn}
          contentStyle={{flexDirection: 'row-reverse'}}
          buttonColor="#f0f2f5"
          icon="chevron-down"
          dark={true}
          mode="contained"
          labelStyle={{color: 'black', textTransform: 'capitalize'}}
          onPress={props.handlePress}>
          {props.title}
        </Button>
      }>
      {props.data.map((el, index) => (
        <Menu.Item
          key={index}
          onPress={() => props.handleMenuItemPress(el)}
          title={el}
        />
      ))}
    </Menu>
  );
};

export default MenuComponent;

const styles = StyleSheet.create({
  btn: {
    marginTop: 25,
    width: 100,
    borderRadius: 15,
    borderWidth: 0.5,
    borderColor: 'black',
  },
});
