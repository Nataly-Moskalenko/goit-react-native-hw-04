import React from 'react';
import { Text, StyleSheet, Pressable } from 'react-native';
import { LogOut, Tresh } from '../../assets/SvgIcons';

export function ButtonSignup({ onPress }) {
  return (
    <Pressable style={styles.button} onPress={onPress}>
      <Text style={styles.text}>Sign Up</Text>
    </Pressable>
  );
}

export function ButtonLogin({ onPress }) {
  return (
    <Pressable style={styles.button} onPress={onPress}>
      {<Text style={styles.text}>Log In</Text>}
    </Pressable>
  );
}

export function ButtonPublish({ onPress }) {
  return (
    <Pressable style={styles.button} onPress={onPress}>
      <Text style={styles.text}>Publish</Text>
    </Pressable>
  );
}

export function ButtonMoveToLogin({ onPress }) {
  return (
    <Pressable onPress={onPress}>
      <Text style={styles.textMoveTo}>Log In</Text>
    </Pressable>
  );
}

export function ButtonMoveToSignup({ onPress }) {
  return (
    <Pressable onPress={onPress}>
      <Text style={styles.textMoveTo}>Sign Up</Text>
    </Pressable>
  );
}

export function ButtonDeletePost({ onPress }) {
  return (
    <Pressable onPress={onPress}>
      {Tresh}
    </Pressable>
  );
}

export function ButtonLogOut({ onPress}) {
  return (
    <Pressable onPress={onPress}>
     {LogOut}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    height: 50,
    borderRadius: 100,
    backgroundColor: '#FF6C00',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 16,
    lineHeight: 19,
    color: 'white',
    fontWeight: 'bold',
  },  
  textMoveTo: {
    fontSize: 16,
    lineHeight: 19,
    color: '#1B4371',
    fontWeight: 'bold',
  },
});
