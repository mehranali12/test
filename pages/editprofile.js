import React from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
export default function editprofile({ navigation }) {
  return (
    <View style={styles.main}>

      <View style={styles.header}>
        <View style={{}}>
          <Image
            style=
            {{
              height: '50%',
              width: '100%',
              marginLeft: 60,
              marginTop: 20,
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

      <ScrollView style={{ marginHorizontal: 20, }}>
        <View style={styles.body}>
          <Text style={{ fontSize: 14, fontWeight: 'bold', }}>Edit Profile</Text>
          <View>
            <Text>LastName FirstName</Text>
          </View>
          <View style={{ flexDirection: 'row', marginLeft: 20, }}>
            <EvilIcons name='user' size={70} style={{ marginTop: 20, }} />
            <View style={{ marginLeft: 20, marginTop: 20, }}>
              <Text>Nick Name</Text>
              <TextInput
                style={{ width: '230%', height: 30, backgroundColor: '#E8EBFF', }}
              />
            </View>
          </View>
          <Text style={{ color: 'orange', marginLeft: 35, }}>Change</Text>

          <Text style={{ marginTop: 10, }}>Contect Information</Text>
          <View style={styles.field}>
            <Text style={styles.titletext}>Mailling Address</Text>
            <TextInput style={styles.TextInput}/>
          </View>

          <View style={styles.field}>
            <Text style={styles.titletext}>Email Address</Text>
            <TextInput style={styles.TextInput} />
          </View>

          <View style={styles.field}>
            <Text style={styles.titletext}>Mobile Phone</Text>
            <TextInput style={styles.TextInput} />
          </View>

          <Text style={{ marginTop: 30, }}>Personal Information</Text>
          <View style={styles.field}>
            <Text style={styles.titletext}>Birth Date</Text>
            <View style={{ flexDirection: 'row' }}>
              <TextInput style={{ backgroundColor: '#E8EBFF', borderRadius: 5, marginTop: 5, width: '50%', }}
              />
              <TextInput style={{ backgroundColor: '#E8EBFF', borderRadius: 5, marginTop: 5, width: '50%', marginLeft: 5, }} />
            </View>
          </View>

          <View style={styles.field}>
            <Text style={styles.titletext}>Gender</Text>
            <TextInput style={styles.TextInput} />
          </View>

          <Text style={{ marginTop: 30, }}>Educational Information</Text>
          <View style={styles.field}>
            <Text style={styles.titletext}>Board/University</Text>
            <TextInput style={styles.TextInput} />
          </View>

          <View style={styles.field}>
            <Text style={styles.titletext}>Majar</Text>
            <TextInput style={styles.TextInput} />
          </View>

          <View style={styles.field}>
            <Text style={styles.titletext}>Position</Text>
            <TextInput style={styles.TextInput} />
          </View>

          <Text style={{ marginTop: 30, }}>Social Networks</Text>
          <View style={styles.field}>
            <Text style={styles.titletext}>Linkedin</Text>
            <TextInput style={styles.TextInput} />
          </View>
          <View style={styles.field}>
            <Text style={styles.titletext}>Google</Text>
            <TextInput style={styles.TextInput} />
          </View>
          <View style={styles.field}>
            <Text style={styles.titletext}>Facebook</Text>
            <TextInput style={styles.TextInput} />
          </View>
          <View style={styles.field}>
            <Text style={styles.titletext}>Instagram</Text>
            <TextInput style={styles.TextInput} />
          </View>
          <View style={styles.field}>
            <Text style={styles.titletext}>Twitter</Text>
            <TextInput style={styles.TextInput} />
          </View>

          <Text style={{ marginTop: 30, color: 'green' }}>Sign In Information</Text>
          <View style={styles.field}>
            <Text style={{ marginTop: 5, color: 'blue' }}>Fingerprint</Text>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <TextInput
                placeholder="Fingerprint"
                style={{ backgroundColor: '#E8EBFF', borderRadius: 5, marginTop: 5, width: '30%', textAlign: 'center', }}
              />
              <View>
                <Entypo name='switch' size={30} style={{ marginTop: 10, color: '#380885', }} />
              </View>
            </View>
          </View>

          <View style={styles.field}>
            <Text style={{ marginTop: 5, color: 'blue' }}>Face ID</Text>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <TextInput
                placeholder="Face ID"
                style={{ backgroundColor: '#E8EBFF', borderRadius: 5, marginTop: 5, width: '30%', textAlign: 'center', }}
              />
              <View>
                <Entypo name='switch' size={30} style={{marginTop: 5, color: '#380885', }} />
              </View>
            </View>
          </View>

          <View style={styles.field}>
            <Text style={{ marginTop: 5, color: 'blue' }}>QR Code</Text>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <TextInput
                placeholder="QR Code"
                style={{ backgroundColor: '#E8EBFF', borderRadius: 5, marginTop: 5, width: '30%', textAlign: 'center' }}
              />
              <View>
                <Entypo name='switch' size={30} style={{marginTop: 5, color: '#380885', }} />
              </View>
            </View>
          </View>

          <View style={{
            alignItems: 'center',
            marginTop: 40,
            borderRadius: 20,
            backgroundColor: '#F16600',
            width: "26%",
            height: 30,
            marginLeft: '75%',
          }}>
            <TouchableOpacity style={{}}
              onPress={() => navigation.navigate('report')}
            >
              <Text style={{ color: '#FFFFFF', marginTop: 5, }}>Updade</Text>
            </TouchableOpacity>
          </View>




        </View>
      </ScrollView>



    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    backgroundColor: '#380885',
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 120,
  },
  text: {
    alignItems: 'center',
    marginTop: 15,
    marginRight: 50,
  },
  body: {
    marginLeft: 25,
    marginRight: 25,
    marginTop: 10,
    marginBottom: 20,
  },
  field:{
    marginTop: 20, 
    height: 40, 
    marginLeft: 15,
  },
  titletext:{
    color: '#380885', 
    fontWeight: 'bold',
  },
  TextInput:{
    backgroundColor: '#E8EBFF', 
    borderRadius: 5, 
    marginTop: 5, 
    width: '100%',
  },
});
