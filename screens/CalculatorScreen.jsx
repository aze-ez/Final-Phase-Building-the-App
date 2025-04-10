import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';

export default function CalculatorScreen() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const buttons = [
    ['C', 'DEL', '/', '*'],
    ['7', '8', '9', '-'],
    ['4', '5', '6', '+'],
    ['1', '2', '3', '='],
    ['0', '.', '(', ')'],
  ];

  const handlePress = (btn) => {
    if (btn === 'C') {
      setInput('');
      setResult('');
    } else if (btn === 'DEL') {
      setInput((prev) => prev.slice(0, -1));
    } else if (btn === '=') {
      try {
        const evalResult = eval(input);
        setResult(evalResult.toString());
      } catch (err) {
        setResult('Error');
      }
    } else {
      setInput((prev) => prev + btn);
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView style={styles.displayContainer}>
        <Text style={styles.inputText}>{input || '0'}</Text>
        <Text style={styles.resultText}>{result}</Text>
      </ScrollView>

      <View style={styles.buttonGrid}>
        {buttons.map((row, rowIndex) => (
          <View key={rowIndex} style={styles.buttonRow}>
            {row.map((btn, colIndex) => (
              <TouchableOpacity
                key={colIndex}
                style={styles.button}
                onPress={() => handlePress(btn)}
              >
                <Text style={styles.buttonText}>{btn}</Text>
              </TouchableOpacity>
            ))}
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    padding: 16,
  },
  displayContainer: {
    flex: 1,
    marginBottom: 10,
  },
  inputText: {
    fontSize: 32,
    color: '#fff',
    textAlign: 'right',
    marginTop: 30,
  },
  resultText: {
    fontSize: 24,
    color: '#ccc',
    textAlign: 'right',
    marginTop: 10,
  },
  buttonGrid: {
    marginTop: 16,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#1e1e1e',
    flex: 1,
    marginHorizontal: 4,
    paddingVertical: 20,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 20,
    color: '#fff',
  },
});
