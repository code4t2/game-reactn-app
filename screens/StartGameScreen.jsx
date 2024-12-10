import {StyleSheet, TextInput, View} from "react-native";
import PrimaryButton from "../components/PrimaryButton";
import {useState} from "react";

function StartGameScreen() {

  const [enteredNumber, setEnteredNumber] = useState('')

  function numberInputHandler(enteredText) {
    setEnteredNumber(enteredText)
  }

  function confirmInputHandler(pressedEvent) {

  }

  return (
    <View style={styles.inputContainer}>
      <TextInput style={styles.numberInput}
                 maxLength={2}
                 keyboardType={"number-pad"}
                 autoCapitalize={"none"}
                 value={enteredNumber}
                 onChangeText={numberInputHandler}
                 autoCorrect={false}/>
      <View style={styles.buttonsContainer}>
        <View style={styles.buttonContainer}>
          <PrimaryButton>Reset</PrimaryButton>
        </View>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
        </View>
      </View>
    </View>
  );
}

export default StartGameScreen;

const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 100,
    marginHorizontal: 24,
    padding: 16,
    backgroundColor: '#72063c',
    borderRadius: 8,
    elevation: 4,
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
  },
  numberInput: {
    height: 50,
    width: 50,
    fontSize: 32,
    borderBottomColor: '#ddb52f',
    borderBottomWidth: 2,
    color: '#ddb52f',
    marginVertical: 8,
    fontWeight: 'bold',
    textAlign: 'center',
  }
});
