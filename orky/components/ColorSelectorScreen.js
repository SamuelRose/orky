import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, View, TouchableOpacity, Text} from 'react-native';
import ColorPicker from 'react-native-wheel-color-picker';
import * as colors from '../assets/colors.js';

function ColorSelectorScreen({route, navigation})
{
  let {initialColor} = route.params;
  const [color, setColor] = useState(initialColor);
  const onColorChange = color => {
    setColor(color);
  };

  const handleCancel = () => {
    console.log("user pushed cancel and moved to home screen");
    navigation.navigate('HomeScreen',{});
  }
  const handleSelect = () => {
    console.log("user pushed select and moved to home screen " + color.toString());
    navigation.navigate('HomeScreen',{color: color});
  }
  return (
    
    <SafeAreaView style={{flex:1, backgroundColor:colors.darkGray}}>
      <View style={styles.sectionContainer}>
        <ColorPicker
          style={{color:colors.darkGray, backgroundColor:colors.darkGray}}
          color={color}
          onColorChangeComplete={(color) => onColorChange(color)}
          
          thumbSize={40}
          sliderSize={30}
          noSnap={true}
          row={false}
        />
      </View>
      <View style={{flex:1,flexDirection: "row", paddingTop:10, color: colors.red, paddingBottom:10}}>
        <TouchableOpacity onPress={handleCancel} style={{paddingTop:20, paddingLeft:20}}>
            <Text style={{color:colors.lavender, fontSize: 30}}>
                Cancel
            </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleSelect} style={{marginLeft:'auto', paddingTop:20, paddingRight:20}}>
            <Text  style={{color:colors.lavender, fontSize: 30}}>
                Select
            </Text>
        </TouchableOpacity>
            </View>
    </SafeAreaView>
  );
};

export default ColorSelectorScreen;

const styles = StyleSheet.create({
  sectionContainer: {
    flex:1,
    backgroundColor: colors.darkGray, 
    marginTop: 70,
    paddingHorizontal: 24,
    color:colors.darkGray
  },
});

