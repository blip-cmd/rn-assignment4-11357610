import React from 'react';
import { View, Text, TextInput, StyleSheet, Image, ScrollView } from 'react-native';

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.profileContainer}>
          <Text style={styles.name}>Eric Atsu</Text>
          <Text style={styles.email}>eric@gmail.com</Text>
        </View>
        <Image style={styles.profileImage} source={{ uri: 'https://via.placeholder.com/150' }} />
      </View>
      <TextInput style={styles.search} placeholder="Search a job or position" />
      
      <Text style={styles.sectionTitle}>Featured Jobs</Text>
      <View style={styles.jobCard}>
        <Text>Software Engineer</Text>
        <Text>Facebook</Text>
        <Text>$180,000</Text>
        <Text>Accra, Ghana</Text>
      </View>
      
      <Text style={styles.sectionTitle}>Popular Jobs</Text>
      <View style={styles.jobCard}>
        <Text>Jr Executive</Text>
        <Text>Burger King</Text>
        <Text>$96,000/y</Text>
        <Text>Los Angeles, US</Text>
      </View>
      <View style={styles.jobCard}>
        <Text>Product Manager</Text>
        <Text>Beats</Text>
        <Text>$84,000/y</Text>
        <Text>Florida, US</Text>
      </View>
      <View style={styles.jobCard}>
        <Text>Product Manager</Text>
        <Text>Facebook</Text>
        <Text>$86,000/y</Text>
        <Text>Florida, US</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  profileContainer: {
    flexDirection: 'column',
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  email: {
    fontSize: 16,
    color: '#777',
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  search: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 10,
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  jobCard: {
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    padding: 15,
    marginBottom: 10,
  },
});
