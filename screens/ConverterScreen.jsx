import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';

const unitPairs = {
  'cm → in': (v) => (v / 2.54).toFixed(2),
  'in → cm': (v) => (v * 2.54).toFixed(2),
  'kg → lb': (v) => (v * 2.20462).toFixed(2),
  'lb → kg': (v) => (v / 2.20462).toFixed(2),
  'm → ft': (v) => (v * 3.28084).toFixed(2),
  'ft → m': (v) => (v / 3.28084).toFixed(2),
  'mi → km': (v) => (v * 1.60934).toFixed(2),
  'km → mi': (v) => (v / 1.60934).toFixed(2),
};

export default function ConverterScreen() {
  const [inputValue, setInputValue] = useState('');
  const [selectedUnit, setSelectedUnit] = useState('cm → in');
  const [convertedValue, setConvertedValue] = useState('');

  const handleConvert = () => {
    const num = parseFloat(inputValue);
    if (!isNaN(num)) {
      const result = unitPairs[selectedUnit](num);
      setConvertedValue(`${result}`);
    } else {
      setConvertedValue('Invalid input');
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollContainer}>
        <Text style={styles.title}>Measurement Converter</Text>

        <TextInput
          style={styles.input}
          placeholder="Enter value"
          placeholderTextColor="#888"
          keyboardType="numeric"
          value={inputValue}
          onChangeText={setInputValue}
        />

        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.unitSelector}>
          {Object.keys(unitPairs).map((unit, idx) => (
            <TouchableOpacity
              key={idx}
              style={[
                styles.unitButton,
                selectedUnit === unit && styles.unitButtonSelected,
              ]}
              onPress={() => setSelectedUnit(unit)}
            >
              <Text style={styles.unitButtonText}>{unit}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        <TouchableOpacity style={styles.convertButton} onPress={handleConvert}>
          <Text style={styles.convertButtonText}>Convert</Text>
        </TouchableOpacity>

        <Text style={styles.resultLabel}>Result:</Text>
        <Text style={styles.result}>{convertedValue || '—'}</Text>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    padding: 16,
  },
  scrollContainer: {
    flex: 1,
  },
  title: {
    fontSize: 26,
    color: '#fff',
    textAlign: 'center',
    marginVertical: 20,
  },
  input: {
    backgroundColor: '#1e1e1e',
    color: '#fff',
    fontSize: 20,
    padding: 16,
    borderRadius: 8,
    marginBottom: 20,
  },
  unitSelector: {
    marginBottom: 20,
  },
  unitButton: {
    paddingVertical: 10,
    paddingHorizontal: 16,
    backgroundColor: '#1e1e1e',
    marginRight: 10,
    borderRadius: 8,
  },
  unitButtonSelected: {
    backgroundColor: '#333',
  },
  unitButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  convertButton: {
    backgroundColor: '#333',
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 20,
  },
  convertButtonText: {
    color: '#fff',
    fontSize: 18,
  },
  resultLabel: {
    color: '#aaa',
    fontSize: 16,
    textAlign: 'center',
  },
  result: {
    fontSize: 24,
    color: '#fff',
    textAlign: 'center',
    marginTop: 10,
  },
});
