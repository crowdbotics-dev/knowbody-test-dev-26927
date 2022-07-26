import React from "react";
import { Text, StyleSheet, Dimensions, View, TouchableOpacity } from "react-native";
const deviceWidth = Dimensions.get("window").width;

const pressed = () => {
  console.log("pressed");
};

const LoginScreen = params => {
  return <View style={styles.container}>
      <View style={{
      left: 0,
      top: 0,
      width: 100,
      height: 50
    }}>
        <Text style={styles.headingTxt}>Sign In</Text>
      </View>
      <View style={styles.bottomSection}>
        <Text style={{
        left: 0,
        top: -1
      }}>Welcome Back!</Text>
        
        <Button title={"SignUp"}></Button>
        <Button title={"Login"} btnStyle={styles.loginBtnStyle} textStyle={styles.loginBtnText} onPress={pressed}></Button>
      </View>
    </View>;
};

const styles = StyleSheet.create({
  container: {
    margin: 20,
    flex: 1,
    justifyContent: "space-around"
  },
  topSection: {
    flex: 1,
    alignItems: "center"
  },
  bottomSection: {
    flex: 1,
    justifyContent: "center"
  },
  bottomSectionText: {
    alignSelf: "center",
    fontSize: 24,
    fontWeight: "bold",
    padding: 2,
    marginVertical: 12
  },
  bottomSectionDescription: {
    alignSelf: "center",
    fontSize: 14,
    fontWeight: "400",
    maxWidth: deviceWidth / 1.4,
    textAlign: "center",
    padding: 5,
    marginVertical: 12
  },
  headingTxt: {
    fontWeight: "bold",
    color: "black",
    fontSize: 28
  },
  loginBtnStyle: {
    backgroundColor: "white",
    borderColor: "black",
    borderWidth: 1
  },
  loginBtnText: {
    color: "black"
  }
});

const Button = ({
  title,
  btnStyle,
  textStyle,
  onPress
}) => {
  return <TouchableOpacity style={[btnStyles.btn, btnStyle]} onPress={onPress}>
      <Text style={[btnStyles.btnText, textStyle]}>{title}lklkj</Text>
    </TouchableOpacity>;
};

const btnStyles = StyleSheet.create({
  btn: {
    paddingVertical: 10,
    paddingHorizontal: 30,
    backgroundColor: "black",
    borderRadius: 6,
    alignItems: "center",
    alignSelf: "center",
    justifyContent: "center",
    margin: 5,
    width: deviceWidth - 80,
    minHeight: 45,
    marginVertical: 12
  },
  btnText: {
    color: "white"
  }
});
export default LoginScreen;