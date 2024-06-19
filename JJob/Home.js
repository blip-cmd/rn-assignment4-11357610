import React from "react";
import {
  View,
  Text,
  TextInput,
  Image,
  FlatList,
  StyleSheet,
  ScrollView,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";



const featuredJobs = [
  {
    id: "1",
    company: "Facebook",
    title: "Software Engineer",
    salary: "$180,000",
    location: "Accra, Ghana",
    logo: require("./assets/facebook.png"),
  },
  {
    id: "2",
    company: "Google",
    title: "Data Scientist",
    salary: "$160,000",
    location: "London, UK",
    logo: require("./assets/google.png"),
  },
];

const popularJobs = [
  {
    id: "1",
    company: "Burger King",
    title: "Jr Executive",
    salary: "$96,000/y",
    location: "Los Angeles, US",
    logo: require("./assets/burger-king.jpg"),
  },
  {
    id: "2",
    company: "Beats",
    title: "Product Manager",
    salary: "$84,000/y",
    location: "Florida, US",
    logo: require("./assets/Beats.png"),
  },
  {
    id: "3",
    company: "Microsoft",
    title: "Product Manager",
    salary: "$86,000/y",
    location: "Washington, US",
    logo: require("./assets/facebook.png"),
  },
];

const JobItem = ({ job }) => (
  <View style={styles.jobItem}>
    <Image source={job.logo} style={styles.jobLogo} />
    <View style={styles.jobInfo}>
      <Text style={styles.jobTitle}>{job.title}</Text>
      <Text style={styles.jobCompany}>{job.company}</Text>
    </View>
    <View>
      <Text style={styles.jobSalary}>{job.salary}</Text>
      <Text style={styles.jobLocation}>{job.location}</Text>
    </View>
  </View>
);

const App = ({ route }) => {
  const { name, email } = route.params;

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerInfo}>
          <Text style={styles.name}>{name || "Eric Astu"}</Text>
          <Text style={styles.email}>{email || "ericatsu@gmail.com"}</Text>
        </View>
        <Image
          source={require("./assets/profile.png")}
          style={styles.profileImage}
        />
      </View>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search a job or position"
          placeholderTextColor="#95969D"
        />
        <View styles={styles.searchFilter}>
          <Icon
            name="sliders-h"
            size={24}
            color="#356899"
            style={styles.filterIcon}
          />
        </View>
      </View>

      <View style={styles.jobsSection}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Featured Jobs</Text>
          <Text style={styles.sectionSubtitle}>See all</Text>
        </View>
        <FlatList
          data={featuredJobs}
          horizontal
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.featuredJobItem}>
              <View style={styles.featuredJob}>
                <View style={styles.featuredJobLogoContainer}>
                  <Image source={item.logo} style={styles.featuredJobLogo} />
                </View>
                <View>
                  <Text style={styles.featuredJobTitle}>{item.title}</Text>
                  <Text style={styles.featuredJobCompany}>{item.company}</Text>
                </View>
              </View>
              <View style={styles.featuredJobDetails}>
                <Text style={styles.featuredJobSalary}>{item.salary}</Text>
                <Text style={styles.featuredJobLocation}>{item.location}</Text>
              </View>
            </View>
          )}
          showsHorizontalScrollIndicator={false}
        />
      </View>
      <View style={styles.jobsSection}>
        <Text style={styles.sectionTitle}>Popular Jobs</Text>
        <FlatList
          data={popularJobs}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <JobItem job={item} />}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FAFAFD",
    padding: 20,
    paddingTop: 50,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    justifyContent: "space-between",
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    lineHeight: 36,
    flex: 1,
  },
  email: {
    fontSize: 20,
    color: "#666",
    flex: 1,
  },
  profileImage: {
    width: 54,
    height: 54,
    borderRadius: 27,
  },
  searchContainer: {
    flexDirection: "row",
    marginBottom: 20,
  },
  searchInput: {
    flex: 1,
    height: 48,
    backgroundColor: "#F2F2F3",
    borderColor: "#F2F2F3",
    borderWidth: 1,
    borderRadius: 14,
    paddingHorizontal: 15,
  },
  filterIcon: {
    marginLeft: 20,
    backgroundColor: "#F2F2F3",
    padding: 8,
    borderRadius: 14,
    height: 48,
    width: 48,
    paddingTop: 12,
    paddingLeft: 13,
  },
  jobsSection: {
    marginBottom: 20,
    marginTop: 20,
  },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  sectionSubtitle: {
    fontSize: 14,
    color: "#95969D",
  },
  featuredJobItem: {
    width: 280,
    backgroundColor: "#E0E7FF",
    borderRadius: 15,
    padding: 25,
    marginRight: 10,
  },
  featuredJob: {
    flexDirection: "row",
    marginBottom: 10,
  },
  featuredJobLogoContainer: {
    width: 46,
    height: 46,
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    justifyContent: "center",
    alignContent: "center",
    marginRight: 15,
  },
  featuredJobLogo: {
    width: 22,
    height: 23.57,
    alignSelf: "center",
  },
  featuredJobTitle: {
    fontSize: 16,
    fontWeight: "bold",
  },
  featuredJobCompany: {
    fontSize: 14,
    color: "#666",
    marginBottom: 10,
  },
  featuredJobDetails: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 60,
  },
  featuredJobSalary: {
    fontSize: 14,
    color: "#666",
  },
  featuredJobLocation: {
    fontSize: 14,
    color: "#666",
  },
  jobItem: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    height: 74,
    padding: 15,
    marginBottom: 10,
  },
  jobLogo: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 15,
  },
  jobInfo: {
    flex: 1,
  },
  jobTitle: {
    fontSize: 16,
    fontWeight: "bold",
  },
  jobCompany: {
    fontSize: 14,
    color: "#666",
  },
  jobSalary: {
    fontSize: 14,
    color: "#666",
  },
  jobLocation: {
    fontSize: 14,
    color: "#666",
  },
});

export default App;
