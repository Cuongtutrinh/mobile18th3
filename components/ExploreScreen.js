import React from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, Image, StyleSheet } from 'react-native';

const ExploreScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Thanh tìm kiếm */}
      <View style={styles.searchBar}>
        <TextInput placeholder="Search for meals or area" style={styles.searchInput} />
      </View>

      <ScrollView>
        {/* Danh mục món ăn */}
        <Text style={styles.sectionTitle}>Top Categories</Text>
        <View style={styles.categoryContainer}>
          <Image source={{ uri: 'https://via.placeholder.com/100' }} style={styles.categoryImage} />
          <Image source={{ uri: 'https://via.placeholder.com/100' }} style={styles.categoryImage} />
          <Image source={{ uri: 'https://via.placeholder.com/100' }} style={styles.categoryImage} />
        </View>

        {/* Món ăn phổ biến */}
        <Text style={styles.sectionTitle}>Popular Items</Text>
        <View style={styles.foodContainer}>
          <View style={styles.foodItem}>
            <Image source={{ uri: 'https://via.placeholder.com/100' }} style={styles.foodImage} />
            <Text>Food 1</Text>
            <Text>$1</Text>
          </View>
          <View style={styles.foodItem}>
            <Image source={{ uri: 'https://via.placeholder.com/100' }} style={styles.foodImage} />
            <Text>Food 2</Text>
            <Text>$3</Text>
          </View>
        </View>
      </ScrollView>

      {/* Thanh điều hướng */}
      <View style={styles.navbar}>
        <TouchableOpacity style={styles.navButton}>
          <Text style={styles.navTextActive}>Explorer</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate('Profile')}>
          <Text style={styles.navText}>Account</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: 'white', padding: 10 },
  searchBar: { flexDirection: 'row', padding: 10, backgroundColor: '#eee', borderRadius: 10 },
  searchInput: { flex: 1 },
  sectionTitle: { fontSize: 18, fontWeight: 'bold', marginVertical: 10 },
  categoryContainer: { flexDirection: 'row', justifyContent: 'space-around', marginBottom: 10 },
  categoryImage: { width: 100, height: 100, borderRadius: 10 },
  foodContainer: { flexDirection: 'row', justifyContent: 'space-around' },
  foodItem: { alignItems: 'center' },
  foodImage: { width: 100, height: 100, borderRadius: 10 },
  navbar: { flexDirection: 'row', justifyContent: 'space-around', padding: 10, borderTopWidth: 1 },
  navButton: { padding: 10 },
  navTextActive: { color: 'orange', fontWeight: 'bold' },
  navText: { color: 'gray' },
});

export default ExploreScreen;
