

import { StyleSheet, View, Text, ImageBackground, TouchableOpacity, Pressable } from 'react-native';

import * as colors from '../assets/colors.js';

function HomeScreen({route, navigation})
{
    const handleGoToCalendar = () => {
        console.log("user moved to calendar screen");
        today = new Date;
        navigation.navigate('CalendarScreen',{currentDay: today});
    }

    return (
      <View style={{flex:1, paddingTop:50, backgroundColor:colors.darkGray}}>
        <TouchableOpacity onPress={handleGoToCalendar} style={styles.button}>
            <Text style={styles.text}>
                Calendar
            </Text>
        </TouchableOpacity>
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
      backgroundColor: 'rgba(255,255,255,0.3)',
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