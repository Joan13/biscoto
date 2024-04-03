import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import InrecTab from '../components/InRecord';

const Tab = createMaterialTopTabNavigator();
const RecordList = () => {

  const [user, setUser] = useState(null);

  const getUser = async () => {
    try {
      const userr = await AsyncStorage.getItem('userBiscoto');
      const uu = JSON.parse(userr);
      setUser(uu);
      // console.log(uu.email);

    } catch (e) {
      // return 0;
    }
  }

  async function handleGoogleLogout() {
    try {
      await GoogleSignin.signOut();
      // Perform additional cleanup and logout operations.
    } catch (error) {
      console.log('Google Sign-Out Error: ', error);
    }
  }

  useEffect(() => {
    getUser();
  }, []);



  return (
    <View style={styles.container}>
      <View style={{ borderColor: 'rgb(200,200,200)', borderWidth: 1, borderRadius: 10, paddingVertical: 30, marginHorizontal: 15 }}>
        <Text style={{ textAlign: 'center', marginHorizontal: 35 }}>Business partners discussed about issues of supply disruptions from China. Ultimately they decided to find another supplier.</Text>

        <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: 25 }}>
          <TouchableOpacity style={{ borderColor: 'rgb(200,200,200)', borderWidth: 1, borderRadius: 5, paddingVertical: 8, paddingHorizontal: 25, elevation: 3, backgroundColor: 'white' }}>
            <Text>Full text</Text>
          </TouchableOpacity>

          <TouchableOpacity style={{ borderColor: 'rgb(200,200,200)', borderWidth: 1, borderRadius: 5, paddingVertical: 8, paddingHorizontal: 25, elevation: 3, backgroundColor: 'white', marginLeft: 25 }}>
            <Text>Full summary</Text>
          </TouchableOpacity>
        </View>
      </View>

      <Tab.Navigator>
        <Tab.Screen name="John" component={InrecTab} />
        <Tab.Screen name="Steve" component={InrecTab} />
        <Tab.Screen name="Mike" component={InrecTab} />
        <Tab.Screen name="Gori" component={InrecTab} />
        <Tab.Screen name="Anna" component={InrecTab} />
      </Tab.Navigator>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    paddingVertical: 15,
    backgroundColor: '#fff',
  },
  text: {
    color: '#000',
    fontWeight: '900',
    marginBottom: 20,
    fontSize: 25
  },
  textHeader: {
    color: 'gray',
    fontWeight: '900',
    marginBottom: 50,
    fontSize: 20
  },
});

export default RecordList;