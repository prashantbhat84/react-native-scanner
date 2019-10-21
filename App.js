import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Alert } from 'react-native';

import ImagePicker from './components/ImagePicker';

export default function App() {
  return <ImagePicker />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
