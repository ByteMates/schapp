import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  StatusBar,
  Button
} from 'react-native';

import { Dropdown } from 'react-native-material-dropdown';

let dataVal = [{
  value: 'Taha',
}, {
  value: 'Ovais',
}, {
  value: 'Shc',
}];

function DonationScreen({ navigation }) {
    return (
      <View style ={{display:"flex",flexDirection:"column",justifyContent:"center",marginTop:100}}>
      <Dropdown
        label='Choose Option'
        data={dataVal}
      />
    <Button onPress={() => navigation.goBack()} title="Apply Filter" />
      </View>
      
    // <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
       
    //     <Button onPress={() => navigation.goBack()} title="Make A Donation" />
    //   </View>
    );
  }
  export default DonationScreen