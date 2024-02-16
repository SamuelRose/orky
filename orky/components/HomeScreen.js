

import { StyleSheet, View, Text, ScrollView, TouchableOpacity, Pressable } from 'react-native';

import * as colors from '../assets/colors.js';

function HomeScreen({route, navigation})
{
    const handleGoToCalendar = () => {
        console.log("user moved to calendar screen");
        const currentDay = new Date;
        let timestamp = currentDay.getTime();
        console.log("current timestamp:" + timestamp.toString());
        navigation.navigate('CalendarScreen',{currentTimeStamp: timestamp});
    }

    return (
      <View style={{flex:1, backgroundColor: colors.darkGray}}>
        <View style = {{justifyContent:'center', backgroundColor: colors.mediumGray}}>
          <Text style={{fontFamily: 'GillSans-UltraBold', color:colors.lavender, fontSize: 40, textAlign: 'center', paddingTop:30}}>orky</Text>
        </View>
        <View style={{flexDirection: "row", paddingTop:10, paddingBottom: 10, color: colors.red, paddingRight:20, backgroundColor: colors.mediumGray}}>
          <TouchableOpacity onPress={handleGoToCalendar} style={{marginLeft:'auto'}}>
              <Text  style={{color:colors.lavender, fontSize: 20}}>
                  Calendar
              </Text>
          </TouchableOpacity>
        </View>
        
        </View>
    )
}

export default HomeScreen;


const styles = StyleSheet.create({
    center:{
      alignItems: 'center',
      justifyContent: 'center'
    },
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    image: {
      flex: 1,
      justifyContent: 'center',
    },
    title:{
      color: 'black',
      fontSize: 42,
      lineHeight: 60,
      fontWeight: 'bold',
      textAlign: 'center',
      paddingTop:40
    },
    text: {
      color: 'black',
      fontSize: 42,
      lineHeight: 60,
      fontWeight: 'bold',
      textAlign: 'center',
      color:colors.lavender
    },
    textsmall: {
      color: 'black',
      fontSize: 24,
      lineHeight: 60,
      textAlign: 'center',
    },
    enterText:{
      backgroundColor: 'rgba(255,255,255,0.3)',
      borderRadius:50,
      height: 93,
      width: 316,
      fontSize: 36,
      fontWeight: 'bold',
      textAlign: 'center',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden'
    },
    button:{
      backgroundColor: colors.mediumGray,
      borderRadius:50,
      height: 93,
      width: 316,
      alignItems: 'center',
      justifyContent: 'center'
    },
    smallbutton:{
      backgroundColor: 'rgba(255,255,255,0.3)',
      borderRadius:50,
      height: 50,
      width: 130,
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden',
      zIndex: 2
    },
  });