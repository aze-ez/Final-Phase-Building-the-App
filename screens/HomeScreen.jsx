import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calculator for Pros</Text>
      <Text style={styles.subtitle}>Team: The Rangers</Text>
      <Text style={styles.subtitle}>Habeeb Babatunde Abdulazeez</Text>
      <Text style={styles.subtitle}>Caleb Irvine</Text>
      <Button title="Start Calculator" onPress={() => navigation.replace('MainTabs')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 12,
  },
  subtitle: {
    fontSize: 18,
    color: '#bbb',
  },
});
