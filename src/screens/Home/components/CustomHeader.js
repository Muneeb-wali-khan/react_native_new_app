import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Menu, Divider } from 'react-native-paper';
import { THEME_COLOR, THEME_COLOR_LIGHT } from '../strings/Colors';

const CustomHeader = ({
  middleTitle,
  leftTitle,
  isRightMenuTrue,
  isIconTrue,
  onLeftIconPress,
}) => {
  const [visible, setVisible] = useState(false);

  const openMenu = () => setVisible(true);
  const closeMenu = () => setVisible(false);

  // slice the title if it exceeds a certain length
  const displayTitle = middleTitle?.length > 18 ? `${middleTitle.slice(0, 18)}...` : middleTitle;

  return (
    <View style={styles.headerContainer}>
      {/* Left Section */}
      {isIconTrue ? (
        <View style={styles.leftContainer}>
          <TouchableOpacity onPress={onLeftIconPress}>
            <MaterialCommunityIcons
              name="arrow-left"
              size={24}
              color={THEME_COLOR_LIGHT}
            />
          </TouchableOpacity>
        </View>
      ) : (
        <View style={styles.leftPlaceholder} />
      )}

      {/* Middle Section */}
      <View style={[styles.middleContainer, 
        { justifyContent: isIconTrue || isRightMenuTrue ? 'center' : 'flex-start' }]}>
        <Text style={styles.headerTitle}>{displayTitle}</Text>
      </View>

      {/* Right Section */}
      {isRightMenuTrue ? (
        <View style={styles.rightContainer}>
          <Menu
            contentStyle={{ backgroundColor: THEME_COLOR }}
            visible={visible}
            onDismiss={closeMenu}
            anchor={
              <TouchableOpacity onPress={openMenu}>
                <MaterialCommunityIcons
                  name="dots-vertical"
                  size={24}
                  color={THEME_COLOR_LIGHT}
                />
              </TouchableOpacity>
            }
            style={styles.menu}>
            <Menu.Item
              onPress={() => closeMenu()}
              title={
                <View style={styles.menuItem}>
                  <MaterialCommunityIcons name="home" size={20} color={THEME_COLOR_LIGHT} />
                  <Text style={styles.menuText}> Home</Text>
                </View>
              }
            />
            <Menu.Item
              onPress={() => closeMenu()}
              title={
                <View style={styles.menuItem}>
                  <MaterialCommunityIcons name="account" size={20} color={THEME_COLOR_LIGHT} />
                  <Text style={styles.menuText}> Profile</Text>
                </View>
              }
            />
            <Menu.Item
              onPress={() => closeMenu()}
              title={
                <View style={styles.menuItem}>
                  <MaterialCommunityIcons name="cog" size={20} color={THEME_COLOR_LIGHT} />
                  <Text style={styles.menuText}> Settings</Text>
                </View>
              }
            />
            <Divider />
            <Menu.Item
              onPress={() => closeMenu()}
              title={
                <View style={styles.menuItem}>
                  <MaterialCommunityIcons name="logout" size={20} color={THEME_COLOR_LIGHT} />
                  <Text style={styles.menuText}> Logout</Text>
                </View>
              }
            />
          </Menu>
        </View>
      ) : (
        <View style={styles.rightPlaceholder} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 10,
    backgroundColor: THEME_COLOR,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  leftContainer: {
    width: 50,
    alignItems: 'flex-start',
  },
  leftPlaceholder: {
    width: 50, 
  },
  middleContainer: {
    flex: 1,
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: THEME_COLOR_LIGHT,
    textAlign: 'center',
  },
  rightContainer: {
    width: 50,
    alignItems: 'flex-end',
  },
  rightPlaceholder: {
    width: 50, 
  },
  menu: {
    marginTop: 34,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
  },
  menuText: {
    marginLeft: 8,
    fontSize: 15,
    color: THEME_COLOR_LIGHT,
  },
});

export default CustomHeader;
