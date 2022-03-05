import { Dimensions, Image, StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import Colors from '../constants/Colors';
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

<Image source = {{uri:'https://www.gifcen.com/wp-content/uploads/2021/08/laptop-1.gif'}} 

  style = {{ 
  marginLeft: 10,
  marginTop: 50,
  width: 245, 
  height: 285, }}
  />
    <View style={{
    
    height: 60,
    width: 355,
    backgroundColor: '#2eceb9',
    borderWidth: 0.75,
    borderColor: "#AFAFAE",
    borderRadius: 1,
    marginTop: -15,
    
    }}>
    
      <Text style={{
      marginLeft: 80,
      marginTop: 10,
      fontFamily: 'Tahoma',
      fontSize: 25,
      
      }}>THE CAT CODERS</Text>
      <Text style={{
      marginLeft: 35,
      marginTop: -3.5,
      fontFamily: 'Tahoma',
      fontSize: 12,
      
      }}>The Real World IT Solutions for
      Real World Developers</Text>
      </View>

    <View style={{
    height: 55,
    width: 145,
    backgroundColor: '#46686e',
    marginTop: 15,
    marginLeft: -10
    }}>
      <Text style={{
          marginRight: -58,
          marginTop: 12,
          fontFamily: 'Tahoma',
          fontSize: 32,
          color: '#fff'
      }}>USER LOGIN</Text>
      </View>

      <View style={{
    height: 65,
    width: 320,
    backgroundColor: '#46686e',
    borderWidth: 0.75,
    borderColor: "#AFAFAE",
    borderRadius: 10,
    marginTop: 30,
    marginLeft: 5 
    }}>

    <Image source = {{uri:'https://logodix.com/logo/1727553.png'}} 

    style = {{ 
    marginLeft: 20,
    marginTop: 28,
    width: 25, 
    height: 28,

    }}
    />  

      <Text style={{
          marginLeft: 13,
          fontFamily: 'Tahoma',
          marginTop: -55,
          fontSize: 18,
          color: '#e2e2e2'
      }}>Username</Text>
      </View>

 

    <View style={{
    height: 65,
    width: 320,
    backgroundColor: '#46686e',
    borderWidth: 0.75,
    borderColor: "#AFAFAE",
    borderRadius: 10,
    marginTop: 15,
    marginLeft: 5
  
    }}>
      <Text style={{
          marginLeft: 13,
          marginTop: 2,
          fontFamily: 'Tahoma',
          fontSize: 18,
          color: '#e2e2e2'
      }}>Password</Text>
      </View>

      <Image source = {{uri:'https://icon-library.com/images/password-icon-png/password-icon-png-16.jpg'}} 

      style = {{ 
      marginLeft: -250,
      marginTop: -35,
      width: 25, 
      height: 28,
      }}
      /> 

      <Text style={{
          marginTop: 18,
          marginLeft: -225,
          fontFamily: 'Tahoma',
          fontSize: 13,
          textDecorationLine: 'underline'
      }}>Remember me</Text>

      <Text style={{
          marginTop: -18,
          marginLeft: 217,
          fontFamily: 'Tahoma',
          fontSize: 13,
          textDecorationLine: 'underline'
      }}>Forgot Password?</Text>

    <View style={{
    height: 55,
    width: 155,
    backgroundColor: '#56C596',
    borderWidth: 0.75,
    borderColor: "#AFAFAE",
    borderRadius: 10,
    marginTop: 40,
    marginLeft: -165
    }}>
      <Text style={{
          marginLeft: 50,
          marginTop: 12,
          fontFamily: 'Tahoma',
          fontSize: 18,
      }}>LOG IN</Text>
      </View>

    <View style={{
    height: 55,
    width: 155,
    backgroundColor: '#EC9488',
    borderWidth: 0.75,
    borderColor: "#AFAFAE",
    borderRadius: 10,
    marginTop: -55,
    marginLeft: 170
    }}>
      <Text style={{
          marginLeft: 40,
          marginTop: 12,
          fontFamily: 'Tahoma',
          fontSize: 18,
      }}>REGISTER</Text>
      </View>


      
    </View>

  );
}
