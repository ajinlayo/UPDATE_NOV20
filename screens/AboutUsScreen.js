import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { FontSize, FontFamily, Border, Color } from "../GlobalStyles";
import Icon from "react-native-vector-icons/Octicons";

const AboutUsScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.aboutUsScreen}>
      <View style={styles.button}>
        <View style={styles.buttonChild} />
      </View>
      <View style={[styles.aboutUsScreenChild, styles.aboutChildPosition]} />
      <Text style={[styles.information]}>INFORMATION</Text>
      <Pressable
        style={[styles.rectangleParent, styles.rectangleGroupPosition]}
        onPress={() => navigation.navigate("AboutUsScreenTeam")}
      >
        <View style={styles.groupPosition} />
        <Text style={[styles.team, styles.teamTypo]}>Team</Text>
      </Pressable>
      <Pressable
        style={[styles.rectangleGroup, styles.rectangleGroupPosition]}
        onPress={() => navigation.navigate("AboutUsScreenClient")}
      >
        <View style={styles.groupPosition} />
        <Text style={[styles.team, styles.teamTypo]}>Client</Text>
      </Pressable>
      <Pressable
        style={styles.rectangleContainer}
        onPress={() => navigation.navigate("AboutUsScreenExpert")}
      >
        <View style={styles.groupPosition} />
        <Text style={[styles.team, styles.teamTypo]}>Expert</Text>
      </Pressable>
      <Pressable
        style={[styles.groupPressable, styles.rectangleGroupPosition]}
        onPress={() => navigation.navigate("AboutUsScreenDevice")}
      >
        <View style={styles.groupPosition} />
        <Text style={[styles.team, styles.teamTypo]}>{`Device `}</Text>
      </Pressable>
  
      <Icon name="people" size={40} color="#132A17" style={[styles.groupChat1Icon]} />
      <Icon name="person-fill" size={40} color="#132A17" style={[styles.user1Icon]} />
      <Icon name="briefcase" size={38} color="#132A17" style={[styles.expert1Icon]} />
      <Icon name="webhook" size={38} color="#132A17" style={[styles.pcbBoard1Icon]} />

      <View style={[styles.aboutUsScreenChild2, styles.aboutChildPosition]} />
      <Pressable style={[styles.homeIcon]} onPress={() => navigation.navigate("HomeScreen")} > 
      <Icon name="home" size={35} color="#132A17" /> </Pressable>

      <Pressable style={[styles.vectorIconPNG]} onPress={() => navigation.navigate("HomeScreen")} > 
      <Icon name="arrow-left" size={35} color="#132A17" /> </Pressable>

      <Icon name="feed-person" size={35} color="#3A7D44" style={[styles.vectorIcon2]} /> 

      <Pressable style={[styles.controlIcon]} onPress={() => navigation.navigate("ControlOff")} > 
      <Icon name="plus-circle" size={35} color="#132A17" /> </Pressable>

      <Pressable style={[styles.vectorIcon9]} onPress={() => navigation.navigate("Stats")} > 
      <Icon name="graph" size={32} color="#132A17" /> </Pressable>

    </View>
  );
};

const styles = StyleSheet.create({
  aboutChildPosition: {
    borderRadius: Border.br_xl,
    left: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
  },
  teamTypo: {
    textAlign: "center",
    fontFamily:'Poppins-SemiBold',
    fontWeight: "600",
    fontHeight: "800",
    position: "absolute",
    top: "-10%",
  },
  rectangleGroupPosition: {
    left: "29%",
    right: "14.17%",
    width: "52.5%",
    height: "7.5%",
    position: "absolute",
  },
  
  iconPosition1: {
    width: 40,
    left: 108,
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  iconPosition: {
    top: "90.63%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  buttonChild: {
  borderRadius: Border.br_4xs,
  backgroundColor: "#132A17",
  left: "0%",
  bottom: "0%",
  right: "0%",
  top: "0%",
  height: "100%",
  position: "absolute",
  width: "100%",
  shadowColor: "#000",
  shadowOffset: { width: 5, height: 3 }, 
  shadowOpacity: 0.1, 
  shadowRadius: 2, 
  elevation: 6,
  },
  getStarted: {
    color: Color.colorBlack,
  },
  getStarted1: {
    color: Color.colorSnow,
  },
  button: {
    height: "65.31%",
    width: "80.56%",
    top: "18.28%",
    right: "9.72%",
    bottom: "16.41%",
    left: "9.72%",
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 2,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    position: "absolute",
  },
  aboutUsScreenChild: {
    height: "15.78%",
    top: "-3.44%",
    bottom: "87.66%",
    backgroundColor: Color.colorAntiquewhite,
  },
  information: {
    height: "35.56%",
    width: "50.94%",
    top: "8.52%",
    left: "27.47%",
    fontSize: 22,
    lineHeight: 23, 
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 2,
    letterSpacing: 2,
    textAlign: "center",
    fontFamily: 'Poppins-SemiBold',
    fontWeight: "600",
    color: Color.colorBlack,
    position: "fixed",
  },
  groupPosition: {
    backgroundColor: "#70b47c",
    left: "-10%",
    bottom: "0%",
    right: "0%",
    top: "-30%",
    height: "100%",
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    position: "absolute",
    width: "100%",
  },
  team: {
    height: "57.42%",
    width: "89.42%",
    top: "14.58%",
    left: "7.41%",
    fontSize: 27,
    color: Color.colorWhite,
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 2,
  },
  rectangleParent: {
    top: "27.97%",
    bottom: "64.53%",
  },
  rectangleGroup: {
    top: "40.78%",
    bottom: "51.72%",
  },
  rectangleContainer: {
    top: "53.59%",
    right: "16.44%",
    bottom: "38.91%",
    left: "29.06%",
    width: "52.5%",
    height: "7.5%",
    position: "absolute",
  },
  groupPressable: {
    top: "66.41%",
    bottom: "26.09%",
  },
  groupChat1Icon: {
    top: 208,
    left: 108,
    width: 54,
    height: 58,
    position: "absolute",
  },
  user1Icon: {
    top: 307,
    left: 108,
    width: 50,
    height: 50,
    position: "absolute",
  },
  expert1Icon: {
    top: 412,
    height: 44,
    width: 40,
    left: 108,
    position: "absolute",
  },
  pcbBoard1Icon: {
    top: 510,
    height: 38,
    left: 108,
    position: "absolute",
  },
  aboutUsScreenChild2: {
    height: "14.53%",
    top: "90.66%",
    bottom: "-2.19%",
    backgroundColor: Color.colorPeachpuff,
    position: "absolute",
  },
  homeIcon: {
    height: "10.06%",
    width: "10.28%",
    top: "92.86%",
    left: "10.83%",
    position: "absolute",
  },
  vectorIconPNG: {
    height: "15.47%",
    width: "25.53%",
    top: "7.28%",
    right: "86.81%",
    bottom: "93.25%",
    left: "3.67%",
    position: "absolute",
    overflow: "hidden"
  },
  vectorIcon2: {
    height: "13.42%",
    right: "5.83%",
    bottom: "2.53%",
    left: "81.33%",
    width: "10.83%",
    top: "93.04%",
    position: "absolute",
  },
  vectorIcon: {
    height: "4.22%",
    width: "13.83%",
    right: "4.11%",
    bottom: "4.84%",
    left: "81.06%",
    top: "93.94%",
    maxHeight: "100%",
    maxWidth: "100%",
  },
  controlIcon: {
    height: "10.06%",
    width: "10.28%",
    top: "93.16%",
    left: "58.53%",
    position: "absolute",
  },
  vectorIcon9: {
    height: "13.85%", 
    width: "16.89%", 
    position: "absolute", 
    top: "93.12%",  
    left: "34.56%",
  },
  vectorIcon1: {
    height: "3.27%",
    width: "6.83%",
    top: "7.38%",
    right: "88.47%",
    bottom: "89.66%",
    left: "7%",
  },
  aboutUsScreen: {
    backgroundColor: Color.colorMediumseagreen,
    flex: 1,
    height: 640,
    overflow: "hidden",
    width: "100%",
  },
});

export default AboutUsScreen;