import {Pressable, StyleSheet, Text, View} from "react-native";

function PrimaryButton({children}) {
  function pressHandler() {
    console.log("Pressing");
  }

  return (
    <View style={styles.outerContainer}>
      <Pressable
        style={({pressed}) =>
          pressed ? [styles.innerContainer, styles.pressed] : styles.innerContainer}
        onPress={pressHandler}
        android_ripple={{color: '#72063c'}}>
        <Text style={styles.text}>{children}</Text>
      </Pressable>
    </View>
  );
}

export default PrimaryButton;

const styles = StyleSheet.create({
  outerContainer: {
    borderRadius: 28,
    margin: 4,
    overflow: 'hidden',
  },
  innerContainer: {
    backgroundColor: '#54052b',
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 2,
  },
  text: {
    color: 'white',
    textAlign: 'center',
  },
  pressed: {
    opacity: 0.75,
  },

})
