import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
export default function report({navigation}) {
  return (
    <View style={styles.main}>

      <View style={styles.header}>
        <View style={styles.image}>
          <Image
            style=
            {{
              height: '50%',
              width: '90%',
              marginTop: 25,
              marginLeft: 70,
            }}
            source={require('./images/mama.png')}
          />
        </View>
        <View style={styles.text}>
          <Text style={{ color: '#FFFFFF', fontSize: 20, }}>Wellcome Sheela</Text>
          <Text style={{ color: '#FFFFFF', marginTop: 5, }}>Check What,s up with</Text>
          <Text style={{ color: '#FFFFFF', }}>your shedule.....</Text>
        </View>
      </View>

      <View style={styles.body}>
        <Text style={{ fontSize: 14, fontWeight: 'bold', }}>Technical Problem Report</Text>

        <View style={{ marginTop: 20, height: 45, }}>
          <Text style={styles.titletxt}>Full Name</Text>
          <TextInput style={{ backgroundColor: '#E8EBFF', borderRadius: 5, marginTop: 5, width: '100%', }} />
        </View>

        <View style={{ marginTop: 30, height: 45, }}>
          <Text style={styles.titletxt}>Issue Title</Text>
          <TextInput style={{ backgroundColor: '#E8EBFF', borderRadius: 5, marginTop: 5, width: '100%', }} />
        </View>

        <Text style={{ color: '#380885', fontWeight: 'bold', marginTop: 30, }}>Priority</Text>
        <View style={{ marginTop: 5, flexDirection: 'row', justifyContent: 'space-between', }}>
          <View style={{
            alignItems: 'center',
            marginTop: 5,
            borderRadius: 20,
            backgroundColor: '#FFC95F',
            width: "30%",
            height: 30,
          }}>
            <TouchableOpacity
              style={{}}>
              <Text style={{ color: '#FFFFFF', marginTop: 5, }}>Low</Text>
            </TouchableOpacity>
          </View>
          <View style={{
            alignItems: 'center',
            marginTop: 5,
            borderRadius: 20,
            backgroundColor: '#64AAD9',
            width: "30%",
            height: 30,
          }}>
            <TouchableOpacity
              style={{}}>
              <Text style={{ color: '#FFFFFF', marginTop: 5, }}>Medium</Text>
            </TouchableOpacity>
          </View>
          <View style={{
            alignItems: 'center',
            marginTop: 5,
            borderRadius: 20,
            backgroundColor: '#EF271B',
            width: "30%",
            height: 30,
          }}>
            <TouchableOpacity
              style={{}}>
              <Text style={{ color: '#FFFFFF', marginTop: 5, }}>High</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={{ marginTop: 10, }}>
          <Text style={styles.titletxt}>Description</Text>
          <TextInput style={{ backgroundColor: '#E8EBFF', borderRadius: 5, marginTop: 5, height: 80, width: '100%', }} />
        </View>

        <View style={{ marginTop: 10, height: 45, }}>
          <Text style={styles.titletxt}>Enter Captcha</Text>
          <TextInput style={{ backgroundColor: '#E8EBFF', borderRadius: 5, marginTop: 5, width: '100%', }} />
        </View>

        <View style={{ marginTop: 30, flexDirection: 'row', justifyContent: 'flex-end', }}>
          <Text style={{ color: '#380885', fontWeight: 'bold', marginTop: 5, }}>Captcha Code</Text>
          <TextInput
            placeholder="f234hs"
            style={{ backgroundColor: '#380885', marginLeft: 10, width: "25%", height: 30, borderRadius: 8, textAlign: 'center', color: '#fff', }}
          />
        </View>

        <View style={{
          alignItems: 'center',
          marginTop: 10,
          borderRadius: 20,
          backgroundColor: '#F16600',
          width: "26%",
          height: 30,
          marginLeft: '75%',
        }}>
          <TouchableOpacity style={{}}
             onPress={() => navigation.navigate('editprofile')}
          >
            <Text style={{ color: '#FFFFFF', marginTop: 5, }}>Submit</Text>
          </TouchableOpacity>
        </View>

        <View>
          <TouchableOpacity>
            <Text style={{ color: '#380885', textDecorationLine: 'underline', }}>Report History</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View></View>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    flex: 3,
    backgroundColor: '#380885',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text: {
    alignItems: 'center',
    marginTop: 15,
    marginRight: 30,
  },
  body: {
    flex: 18,
    borderColor: "red",
    marginTop: 5,
    marginLeft: 30,
    marginRight: 30,
  },
  titletxt:{
    color: '#380885', 
    fontWeight: 'bold',
  },
});
