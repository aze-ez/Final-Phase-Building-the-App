import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import { useCalculatorSettings } from '../context/CalculatorSettingsContext';

export default function CalculatorScreen() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');
  const { isScientific, useDegrees } = useCalculatorSettings();

  const standardButtons = [
    ['C', '⌫', '/', '*'],
    ['7', '8', '9', '-'],
    ['4', '5', '6', '+'],
    ['1', '2', '3', '='],
    ['0', '.', '(', ')'],
  ];

  const scientificButtons = [
    ['^', '√', 'log', 'sin'],
    ['cos', 'tan', 'π', 'e'],
  ];

  const handlePress = (btn) => {
    if (btn === 'C') {
      setInput('');
      setResult('');
    } else if (btn === '⌫') {
      setInput((prev) => prev.slice(0, -1));
    } else if (btn === '=') {
      try {
        let expr = input
          .replace(/π/g, `(${Math.PI})`)
          .replace(/e/g, `(${Math.E})`)
          .replace(/√/g, 'Math.sqrt')
          .replace(/\^/g, '**')
          .replace(/log/g, 'Math.log10');

        if (useDegrees) {
          expr = expr
            .replace(/sin\(([^)]+)\)/g, (_, val) => `Math.sin((${val}) * Math.PI / 180)`)
            .replace(/cos\(([^)]+)\)/g, (_, val) => `Math.cos((${val}) * Math.PI / 180)`)
            .replace(/tan\(([^)]+)\)/g, (_, val) => `Math.tan((${val}) * Math.PI / 180)`);
        } else {
          expr = expr
            .replace(/sin/g, 'Math.sin')
            .replace(/cos/g, 'Math.cos')
            .replace(/tan/g, 'Math.tan');
        }

        const evalResult = eval(expr);
        setResult(evalResult.toString());
      } catch {
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

      {isScientific && (
        <View style={styles.buttonGrid}>
          {scientificButtons.map((row, i) => (
            <View key={i} style={styles.buttonRow}>
              {row.map((btn, j) => (
                <TouchableOpacity
                  key={j}
                  style={styles.button}
                  onPress={() => handlePress(btn)}
                >
                  <Text style={styles.buttonText}>{btn}</Text>
                </TouchableOpacity>
              ))}
            </View>
          ))}
        </View>
      )}

      <View style={styles.buttonGrid}>
        {standardButtons.map((row, i) => (
          <View key={i} style={styles.buttonRow}>
            {row.map((btn, j) => (
              <TouchableOpacity
                key={j}
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
    marginTop: 10,
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
