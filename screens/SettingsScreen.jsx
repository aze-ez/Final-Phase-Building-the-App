import React from 'react';
import { View, Text, StyleSheet, Switch } from 'react-native';
import { useCalculatorSettings } from '../context/CalculatorSettingsContext';

export default function SettingsScreen() {
  const {
    isScientific,
    setIsScientific,
    useDegrees,
    setUseDegrees,
  } = useCalculatorSettings();

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Text style={styles.label}>Scientific Mode</Text>
        <Switch
          value={isScientific}
          onValueChange={setIsScientific}
          trackColor={{ false: '#767577', true: '#34C759' }}
          thumbColor="#fff"
        />
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>Degree Mode</Text>
        <Switch
          value={useDegrees}
          onValueChange={setUseDegrees}
          trackColor={{ false: '#767577', true: '#34C759' }}
          thumbColor="#fff"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    padding: 20,
    justifyContent: 'center',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 30,
  },
  label: {
    fontSize: 18,
    color: '#fff',
  },
});
