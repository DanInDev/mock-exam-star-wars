import React, { useState } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import StarText from "./star_components/starText";
import colors from "../constants/colors";

/* This should be removed for the example */
interface LaunchButtonProps {
  starshipName: string;
  onLaunch?: () => void;
}

const LaunchButton: React.FC<LaunchButtonProps> = ({
  starshipName,
  onLaunch,
}) => {
  const [launched, setLaunched] = useState(false);

  const handleLaunchPress = () => {
    setLaunched(true);
    onLaunch?.();
    console.log(`Starship ${starshipName} launched!`);
  };
  return (
    <TouchableOpacity onPress={handleLaunchPress} style={styles.launchButton}>
      <StarText>{launched ? "Launched" : "Ready"}</StarText>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  launchButton: {
    padding: 10,
    borderRadius: 5,
    backgroundColor: colors.danger,
    alignItems: "center",
  },
});

export default LaunchButton;

