import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useAuth } from '../context/AuthContext';

const ProfileScreen = ({ navigation }) => {
  const { logout } = useAuth();

  return (
    <View style={styles.container}>
      <View style={styles.header}></View>
      <Image source={{ uri: 'https://via.placeholder.com/100' }} style={styles.avatar} />
      <Text style={styles.name}>Hung Nguyen</Text>
      <Text style={styles.role}>Mobile Developer</Text>
      <Text style={styles.description}>
        I have above 5 years of experience in native mobile apps development, now I am learning React Native.
      </Text>

      <TouchableOpacity style={styles.signOutButton} onPress={logout}>
        <Text style={styles.signOutText}>Sign Out</Text>
      </TouchableOpacity>

      {/* Thanh điều hướng */}
      <View style={styles.navbar}>
        <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate('Explorer')}>
          <Text style={styles.navText}>Explorer</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton}>
          <Text style={styles.navTextActive}>Account</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', backgroundColor: 'white' },
  header: { width: '100%', height: 100, backgroundColor: 'blue' },
  avatar: { width: 100, height: 100, borderRadius: 50, marginTop: -50 },
  name: { fontSize: 22, fontWeight: 'bold', marginTop: 10 },
  role: { color: 'blue', marginBottom: 10 },
  description: { textAlign: 'center', paddingHorizontal: 20, marginBottom: 20 },
  signOutButton: { backgroundColor: 'orange', padding: 10, borderRadius: 5 },
  signOutText: { color: 'white', fontWeight: 'bold' },
  navbar: { flexDirection: 'row', justifyContent: 'space-around', padding: 10, borderTopWidth: 1, position: 'absolute', bottom: 0, width: '100%' },
  navButton: { padding: 10 },
  navTextActive: { color: 'orange', fontWeight: 'bold' },
  navText: { color: 'gray' },
});

export default ProfileScreen;
