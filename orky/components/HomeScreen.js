

import { StyleSheet, View, Text, TouchableOpacity, Pressable, SafeAreaView } from 'react-native';
import {Draw} from './Draw.js';
import React, { useState, useEffect} from "react";

import {
  Gesture,
  GestureDetector,
  GestureHandlerRootView,
} from "react-native-gesture-handler";
import { Canvas, Path } from "@shopify/react-native-skia";

import * as colors from '../assets/colors.js';
import { colorSelector } from '../assets/colorSelector.js';

function HomeScreen({route, navigation})
{
  let {color} = route.params;
  let [currentColor, setCurrentColor] = useState(color);
  let [storedColor, setStoredColor] = useState(color);
  let [errasing, setErrasing] = useState(false);
  useEffect(() => {
    setCurrentColor(color);
  });
  emptyPaths = []
  const [paths, setPaths] = useState(emptyPaths);

  let pan = Gesture.Pan()
    .onStart((g) => {
      const newPaths = [...paths];
      newPaths[paths.length] = {
        segments: [],
        color: currentColor,
      };
      newPaths[paths.length].segments.push(`M ${g.x} ${g.y}`);
      setPaths(newPaths);
    })
    .onUpdate((g) => {
      const index = paths.length - 1;
      const newPaths = [...paths];
      if (newPaths?.[index]?.segments) {
        newPaths[index].segments.push(`L ${g.x} ${g.y}`);
        setPaths(newPaths);
      }
    })
    .minDistance(1);


    const handleGoToCalendar = () => {
        console.log("user moved to calendar screen");
        const currentDay = new Date;
        let timestamp = currentDay.getTime();
        console.log("current timestamp:" + timestamp.toString());
        navigation.navigate('CalendarScreen',{currentTimeStamp: timestamp});
    }

    const handleSelectColor = () => {
      navigation.navigate('ColorSelectorScreen',{initialColor: currentColor});
    }

    const handleErase = () => {
      // if (errasing)
      // {
      //   setErrasing(false);
      //   setCurrentColor(storedColor);
      // }
      // else
      // {
      //   setErrasing(true);
      //   setStoredColor(currentColor);
      //   setCurrentColor(colors.darkGray);
      // }
      setCurrentColor(colors.cream);
      
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
        <GestureHandlerRootView style={{ flex: 1 }}>
          <GestureDetector gesture={pan}>
            <View style={{ flex: 1, backgroundColor: colors.darkGray }}>
              <Canvas style={{ flex: 8 }}>
                {paths.map((p, index) => (
                  <Path
                    key={index}
                    path={p.segments.join(" ")}
                    strokeWidth={5}
                    style="stroke"
                    color={p.color}
                  />
                ))}
              </Canvas>
            </View>
          </GestureDetector>
        </GestureHandlerRootView>
        <View style={{flexDirection: 'row', paddingBottom:40, backgroundColor: colors.mediumGray}}>
          <TouchableOpacity onPress={handleSelectColor} style={{paddingTop:10, paddingLeft:20}}>
              <Text style={{color:colors.lavender, fontSize: 20}}>
                  Color
              </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleErase} style={{marginLeft:'auto', paddingTop:10, paddingRight:20}}>
              <Text  style={{color:colors.lavender, fontSize: 20}}>
                  Erase
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