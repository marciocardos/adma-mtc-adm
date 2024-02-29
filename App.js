import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import React, { Component } from 'react';
import { WebView } from 'react-native-webview';

export default function App() {
  return (
      <SafeAreaView style={{ flex: 1 }}>
        <StatusBar style="light" backgroundColor="#22272b" />
            <WebView
              source={{ uri: 'https://administeriodoamor.com.br/sistema/index.php' }}
            />
          </SafeAreaView>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
