import { Link } from 'expo-router';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function Capitolo1Screen() {
  return (
    <View style={styles.wrapper}>


      <View style={styles.footer}>
        <Link href="/tabs/teoria" asChild>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>← Torna alla scelta capitoli</Text>
          </TouchableOpacity>
        </Link>
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  wrapper: { flex: 1,backgroundColor: '#121212' },
  container: { padding: 20,backgroundColor: '#121212' },
  title: { fontSize: 22, color: '#fff', marginBottom: 20 },
  paragraph: { fontSize: 16, color: '#ccc', lineHeight: 24 },
  subtitle: {
    fontSize: 18,
    color: '#fff',
    marginTop: 15,
    marginBottom: 10
  },
  bullet: {
    fontSize: 16,
    color: '#ccc',
    marginBottom: 8,
    marginLeft: 10,
    lineHeight: 22
  },
  footer: {
    padding: 10,
    backgroundColor: '#121212',
    borderTopWidth: 1,
    borderTopColor: '#333'
  },
  button: {
    backgroundColor: '#4DA6FF',
    paddingVertical: 10,
    borderRadius: 6,
    alignItems: 'center'
  },
  buttonText: {
    color: '#fff',
    fontSize: 16
  }
});