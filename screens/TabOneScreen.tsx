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
    backgroundColor: '#114B5F',
    justifyContent: 'center',
    alignItems: 'center',
    }}>

    

<Image source = {{uri:'https://pic.pimg.tw/lilimetooyou/1533459662-1635329285.gif'}} 

  style = {{ 
  marginLeft: 10,
  marginTop: 30,
  width: 245, 
  height: 285, }}
  />

<View style={{
    height: 75,
    width: 325,
    backgroundColor: '#114B5F',
    marginLeft: 45,
    }}>
      <Text style={{
        
          marginTop: -293,
          fontFamily: 'Tahoma',
          fontWeight: 'bold',
          fontSize: 13.5,
          color: '#fff'
      }}>Sign Up</Text>

<Image source = {{uri:'https://o.remove.bg/downloads/fcefb65a-6678-44ef-b02a-1607ae77720a/334-3347596_register-icon-white-close-icon-white-png-removebg-preview.png'}} 

  style = {{ 
  marginLeft: -30,
  marginTop: -19,
  width: 25, 
  height: 20, }}
/>
      </View>

    <View style={{
    
    height: 60,
    width: 355,
    backgroundColor: '#00917C',
    borderWidth: 0.75,
    borderColor: "#FFF",
    borderRadius: 1,
    marginTop: -95,
    
    }}>
    
      <Text style={{
      marginLeft: 80,
      marginTop: 10,
      fontFamily: 'Tahoma',
      fontSize: 25,
      fontWeight: 'bold',
      
      }}>THE CAT CODERS</Text>
      <Text style={{
      marginLeft: 35,
      marginTop: -3.5,
      fontFamily: 'Tahoma',
      fontSize: 12,
      fontStyle: 'italic',
      
      }}>"The Real World IT Solutions for
      Real World Developers"</Text>
      </View>

    <View style={{
    height: 75,
    width: 325,
    backgroundColor: '#114B5F',
    marginTop: 45,
    marginLeft: 170,
    }}>
      <Text style={{
          marginTop: -25,
          fontFamily: 'Tahoma',
          fontSize: 28.5,
          fontWeight: 'bold',
          color: '#fff'
      }}>USER LOGIN</Text>
      </View>

      <Image source = {{uri:'https://o.remove.bg/downloads/58d3d784-1ee8-4e26-910e-feeb04293654/3999550-middle-removebg-preview.png'}} 

    style = {{ 
    marginLeft: 5,
    marginTop: -60,
    width: 195, 
    height: 100,
    
    }}
    />  

      <View style={{
    height: 65,
    width: 320,
    backgroundColor: '#cac4ba',
    borderWidth: .95,
    borderColor: "#F4F6F7",
    borderRadius: 10,
    marginTop: -15,
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
    backgroundColor: '#cac4ba',
    borderWidth: .95,
    borderColor: "#F4F6F7",
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

      <Image source = {{uri:'https://o.remove.bg/downloads/5129996b-2447-4f87-ba3d-1861b9ccff15/png-transparent-graphy-birdseye-view-angle-photography-trademark-removebg-preview.png'}} 

      style = {{ 
      marginRight: -270,
      marginTop: -32,
      width: 30, 
      height: 18,
      }}
      /> 
      

      <Text style={{
          marginTop: 28,
          marginLeft: -225,
          fontFamily: 'Tahoma',
          fontSize: 13,
          color: '#ffff',
          textDecorationLine: 'underline'
      }}>Remember me</Text>

      <Text style={{
          marginTop: -18,
          marginLeft: 217,
          fontFamily: 'Tahoma',
          fontSize: 13,
          color: '#ffff',
          textDecorationLine: 'underline'
      }}>Forgot Password?</Text>

      

    <View style={{
    height: 55,
    width: 325,
    backgroundColor: '#1A936F',
    borderWidth: 1.75,
    borderColor: "#F4F6F7",
    borderRadius: 10,
    marginTop: 20,
    marginLeft: -1
    }}>
      <Text style={{
          alignSelf: 'center',
          marginTop: 12,
          fontFamily: 'Tahoma',
          fontSize: 21.25,
          fontWeight: 'bold',
      }}>LOG IN</Text>
      </View>

    </View>

  );
}
