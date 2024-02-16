import { StyleSheet, View, Text, TextInput, TouchableOpacity, Pressable } from 'react-native';
import * as colors from '../assets/colors.js';

function AddEventScreen({route, navigation})
{
    let {currentDay} = route.params;
    const handleBack = () => {
        console.log("user pushed back and moved to home screen");
        navigation.navigate('CalendarScreen',{currentDay: currentDay});
    }
    
    return (
        <View style={{flex: 1}}>
            <View style={{flex: 0, paddingTop:30, height:100, backgroundColor: colors.mediumGray}}>
                <TouchableOpacity onPress={handleBack} style={{paddingTop:20, paddingLeft:20}}>
                    <Text style={{color:colors.lavender, fontSize: 20}}>
                        Back
                    </Text>
                </TouchableOpacity>
            </View>
            <View style = {{flex: 1, 
                            backgroundColor: colors.darkGray,
                            paddingRight: 20,
                            paddingLeft: 20,}}>
                <View style = {{flex: 1, justifyContent: 'center'}}>
                    <Text style= {[styles.label]}>
                        Event Title
                    </Text>
                    <TextInput style = {[styles.enterText]}>
                        
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
                        <TextInput style = {[styles.enterText]}>
                        </TextInput>
                        <View style={{paddingTop:10}}>
                        <TextInput style = {[styles.enterText]}>
                        </TextInput>
                        </View>
                    </View>
                    <View style={{flex:2}}/>
                </View>
                <View style = {{flex: 2}}>
                    <Text style= {[styles.label]}>
                        Description
                    </Text>
                    <TextInput style = {[styles.enterText, {flex:1}]}>
                        
                    </TextInput>
                </View>
                <View style = {{flex:1, justifyContent: 'center'}}>
                    <TouchableOpacity>
                        <Text  style={{color:colors.lavender, fontSize: 36, textAlign:'center'}}>
                            Add Event
                        </Text>
                    </TouchableOpacity>
                </View>
                <View style={{flex:1}}/>
            </View>
        </View>
    )
}

export default AddEventScreen;

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
      }
})