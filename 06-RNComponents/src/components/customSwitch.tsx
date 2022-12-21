import React, { useState, useContext } from "react";
import { View, Switch, StyleSheet } from "react-native";
import { onChange } from "react-native-reanimated";
import { ThemeContext } from "../Context/themeContext/ThemeContext";
import { Switch_state } from "../interfaces/appInterfaces";
import { styles } from "../theme/appTheme";

export const CustomSwitch = ({isOn, on_Change}:Switch_state) => {
  const {theme} = useContext(ThemeContext)
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => {
    setIsEnabled(!isEnabled);
    on_Change(!isEnabled)
  }

  return (
      <Switch
        trackColor={{ false: "#767577", true: theme.colors.primary }}
        thumbColor={isEnabled ? theme.colors.card : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
  );
}
