import { Dimensions, Image, StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';

export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
  return (
    <View style={{
    flex: 1,
    height: '100%',
    width: '100%',
    backgroundColor: '#46686e',
    justifyContent: 'center',
    alignItems: 'center',
    }}>

    <View style={{
    
    height: 50,
    width: 300,
    backgroundColor: '#2eceb9',
    borderWidth: 0.75,
    borderColor: "#AFAFAE",
    
    
    }}>
    
      <Text style={{
      marginLeft: 90,
      marginTop: 10,
      fontFamily: 'Tahoma',
      fontSize: 22
      

      
      }}>USER LOGIN</Text>
      </View>
    
      
    <View style={{
    
    height: 430,
    width: 300,
    backgroundColor: '#bddfe0',
    borderWidth: 0.75,
    borderColor: "#AFAFAE",
    }}>

<Image source = {{uri:'https://cdn2.iconfinder.com/data/icons/user-23/512/User_Customers.png'}} 

    style = {{ 
      marginLeft: 100,
      marginTop: 15,
      width: 95, 
      height: 100 }}
      />

    <View style={{
    height: 65,
    width: 250,
    backgroundColor: '#F4F4F9',
    borderWidth: 0.75,
    borderColor: "#AFAFAE",
    borderRadius: 10,
    marginTop: 7,
    marginLeft: 25
    }}>
      <Text style={{
          marginLeft: 13,
          fontFamily: 'Tahoma',
          marginTop: 2,
          fontSize: 18,
      }}>Username</Text>
      </View>

    <View style={{
    height: 65,
    width: 250,
    backgroundColor: '#F4F4F9',
    borderWidth: 0.75,
    borderColor: "#AFAFAE",
    borderRadius: 10,
    marginTop: 5,
    marginLeft: 25
  
    }}>
      <Text style={{
          marginLeft: 13,
          marginTop: 2,
          fontFamily: 'Tahoma',
          fontSize: 18,
      }}>Password</Text>
      </View>
      
      
      <Text style={{
          marginTop: 5,
          marginLeft: 25,
          fontFamily: 'Tahoma',
          fontSize: 13,
          textDecorationLine: 'underline'
      }}>Remember me</Text>

      <Text style={{
          marginTop: -18,
          marginLeft: 167,
          fontFamily: 'Tahoma',
          fontSize: 13,
          textDecorationLine: 'underline'
      }}>Forgot Password?</Text>

  <View style={{
    height: 55,
    width: 250,
    backgroundColor: '#52b7e9',
    borderWidth: 0.75,
    borderColor: "#AFAFAE",
    borderRadius: 10,
    marginTop: 40,
    marginLeft: 25
    }}>
      <Text style={{
          marginLeft: 100,
          marginTop: 12,
          fontFamily: 'Tahoma',
          fontSize: 18,
      }}>LOG IN</Text>
      </View>

      </View>
      
    </View>
    


  );
}
