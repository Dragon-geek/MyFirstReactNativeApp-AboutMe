import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Profile from './assets/Profile.png';

const App = () => {
  const [showImage, setShowImage] = useState(true);

  const toggleImage = () => {
    setShowImage(!showImage);
  };

  return (
    <View style={styles.container}>
      {/* Background Circle */}
      <View style={styles.circle} />

      {/* Profile Image */}
      {showImage && (
        <Image source={Profile} style={styles.image} />
      )}

      {/* Title */}
      <Text style={styles.title}>About Me</Text>

      {/* Facts Section */}
      <View style={styles.factsContainer}>
        <Text style={styles.fact}>I love coding and technology.</Text>
        <Text style={styles.fact}>I enjoy playing video games.</Text>
        <Text style={styles.fact}>My favorite cuisine is Italian.</Text>
        <Text style={styles.fact}>I am a coffee enthusiast.</Text>
        <Text style={[styles.fact, styles.lastFact]}>I like reading sci-fi novels.</Text>

        {/* Toggle Button */}
        <TouchableOpacity style={styles.button} onPress={toggleImage}>
          <Text style={styles.buttonText}>{showImage ? 'HIDE' : 'SHOW'}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    padding: 20,
  },
  circle: {
    position: 'absolute',
    top: -100,
    left: -150,
    width: 380,
    height: 380,
    borderRadius: 190,
    backgroundColor: '#F3DA54',
  },
  title: {
    fontSize: 60,
    fontWeight: 'bold',
    marginTop: 50,
  },
  factsContainer: {
    alignItems: 'center',
  },
  fact: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    width: 315,
    paddingVertical: 15,
    borderTopWidth: 5,
    borderTopColor: '#000000',
  },
  lastFact: {
    borderBottomWidth: 5,
    borderBottomColor: '#000000',
  },
  image: {
    width: 100,
    height: 100,
    position: 'absolute',
    top: 160,
    right: 20,
  },
  button: {
    marginTop: 50,
    backgroundColor: '#000000',
    paddingVertical: 15,
    paddingHorizontal: 30,
    width: 315,
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  buttonText: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 30,
  },
});

export default App;
