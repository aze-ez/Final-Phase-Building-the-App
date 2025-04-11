import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Calculator for Pros</Text>
      <Text style={styles.subHeader}>The ultimate calculator for all your needs</Text>
      <Text style={styles.team}>Team: The Rangers</Text>
      <Text style={styles.member}>Habeeb Babatunde Abdulazeez</Text>
      <Text style={styles.member}>Caleb Irvine</Text>
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
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
  },
  subHeader: {
    fontSize: 16,
    color: '#bbb',
    marginBottom: 20,
  },
  team: {
    fontSize: 18,
    fontWeight: '600',
    color: '#fff',
  },
  member: {
    fontSize: 16,
    color: '#bbb',
  },
});
