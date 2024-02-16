import { StyleSheet, View, Text, TextInput, TouchableOpacity, Pressable } from 'react-native';
import React, { useState } from 'react';
import * as colors from '../assets/colors.js';

function EdditEventScreen({route, navigation})
{
    let {currentTimeStamp} = route.params;
    let currentDay = new Date(currentTimeStamp);
    let [eventTitle, setEventTitle] = useState("");
    let [eventStart, setEventStart] = useState("");
    let [eventEnd, setEventEnd] = useState("");
    let [eventDescription, setEventDescription] = useState("");

    let [titleError, setTitleError] = useState("");

    const isAlphaNumeric = (inputString) => {
        var i, unicode;
        console.log(inputString);
        
        for (i = 0; i < inputString.length; i++){
          unicode = inputString.charCodeAt(i);
          //console.log(unicode);
          if (!((unicode == 32) ||//I included spaces in the allowable characters
            (unicode >= 48 && unicode <= 57) ||
            (unicode >= 65 && unicode <= 90) ||
            (unicode >= 97 && unicode <= 122))){
              return false;
            }
        }
        
        return true;
      }

    const handleCancel = () => {
        console.log("user pushed back and moved to home screen");
        navigation.navigate('CalendarScreen',{currentTimeStamp: currentTimeStamp});
    }
    const handleDelete = () => {
        console.log("user deleted event");
        //TODO call db delete method
        navigation.navigate('CalendarScreen',{currentTimeStamp: currentTimeStamp});
    }
    const handleSubmit = () => {
        console.log("user eddited event");
        //TODO call db delete method
        if (eventTitle.length == 0)
        {
            setTitleError("Event Title must not be empty");
        }
        else
        {
            setTitleError("");
        }
        // send event to database
        navigation.navigate('CalendarScreen',{currentTimeStamp: currentTimeStamp});
    }
    
    return (
        <View style={{flex: 1}}>
            <View style={{flex: 0, flexDirection: 'row', paddingTop:30, height:100, backgroundColor: colors.mediumGray}}>
                <TouchableOpacity onPress={handleCancel} style={{paddingTop:20, paddingLeft:20}}>
                    <Text style={{color:colors.lavender, fontSize: 20}}>
                        Cancel
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={handleDelete} style={{marginLeft:'auto', paddingTop:20, paddingRight:20}}>
                    <Text  style={{color:colors.lavender, fontSize: 20}}>
                        Delete
                    </Text>
                </TouchableOpacity>
            </View>
            <View style = {{flex: 1, 
                            backgroundColor: colors.darkGray,
                            paddingRight: 20,
                            paddingLeft: 20,}}>
                <View style = {{flex: 1, justifyContent: 'center'}}>
                    <Text style= {{color: colors.lavender,
                                   fontSize: 25,
                                   paddingRight: 10}}>
                        Event Title
                    </Text>
                    <Text style={styles.errorText}>
                        {titleError}
                    </Text>
                    <TextInput style = {[styles.enterText]} onChangeText={(value)=>setEventTitle(value)}>
                        
                    </TextInput>
                </View>
                <View style={{flex:1, flexDirection:'row', justifyContent: 'center'}}>
                    <View style={{flex:1, flexDirection:'column'}}>
                    <Text style= {styles.label}>
                        Start
                    </Text>
                    <Text style= {[styles.label]}>
                        End
                    </Text>
                    </View>
                    <View style={{flex:1, flexDirection:'column'}}>
                        <TextInput style = {[styles.enterText]} onChangeText={(value)=>setEventStart(value)}>
                        </TextInput>
                        <View style={{paddingTop:10}}>
                        <TextInput style = {[styles.enterText]} onChangeText={(value)=>setEventEnd(value)}>
                        </TextInput>
                        </View>
                    </View>
                    <View style={{flex:2}}/>
                </View>
                <View style = {{flex: 2}}>
                    <Text style= {[styles.label]}>
                        Description
                    </Text>
                    <TextInput style = {[styles.enterText, {flex:1}]} onChangeText={(value)=>setEventDescription(value)}>
                        
                    </TextInput>
                </View>
                <View style = {{flex:1, justifyContent: 'center'}}>
                    <TouchableOpacity>
                        <Text  style={{color:colors.lavender, fontSize: 36, textAlign:'center'}} onPress={handleSubmit}>
                            Submit
                        </Text>
                    </TouchableOpacity>
                </View>
                <View style={{flex:1}}/>
            </View>
        </View>
    )
}

export default EdditEventScreen;

const styles = StyleSheet.create({
    label: {
        color: colors.lavender,
        fontSize: 25,
        paddingRight: 10,
        paddingBottom: 10
    },
    enterText:{
        backgroundColor: colors.mediumGray,
        borderRadius: 15,
        height: 30,
        fontSize: 20,
        textAlign: 'center',
        color: colors.cream
      },
    errorText:{
        color: colors.red,
        fontSize: 15,
    }
})