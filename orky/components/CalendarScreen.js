
import { StyleSheet, Text, View } from 'react-native';
import {Agenda} from 'react-native-calendars';

import React, { Component } from 'react';
import * as colors from '../assets/colors.js';




function CalendarScreen({route, navigation})
{
    // months = ["January", "February", "March", "April", 
    //     "May", "June", "July", "August", "September", "October", 
    //     "November", "December"];

    // weekDays = [
    //     "Sun","Mon","Tue","Wed","Thu","Fri","Sat"
    // ]; 

    // nDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  
    // state = {
    //     activeDate: new Date()
    // }

    // var year = this.state.activeDate.getFullYear();
    // var month = this.state.activeDate.getMonth();
    // var firstDay = new Date(year, month, 1).getDay();
    // var maxDays = this.nDays[month];
    // if (month == 1) { // February
    //     if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
    //         maxDays += 1;
    //     }
    // } 
    // var rows = [];
    // rows = matrix.map((row, rowIndex) => {
    //     var rowItems = row.map((item, colIndex) => {
    //         return (
    //             <Text
    //                 style={{
    //                     flex: 1,
    //                     height: 18,
    //                     textAlign: 'center',
    //                     // Highlight header
    //                     backgroundColor: rowIndex == 0 ? '#ddd' : '#fff',
    //                     // Highlight Sundays
    //                     color: colIndex == 0 ? '#a00' : '#000',
    //                     // Highlight current date
    //                     fontWeight: item == this.state.activeDate.getDate() 
    //                                         ? 'bold': ''
    //                 }}
    //                 onPress={() => this._onPress(item)}>
    //                 {item != -1 ? item : ''}
    //             </Text>
    //         );
    //     });
    //     return (
    //         <View
    //             style={{
    //                 flex: 1,
    //                 flexDirection: 'row',
    //                 padding: 15,
    //                 justifyContent: 'space-around',
    //                 alignItems: 'center',
    //             }}>
    //             {rowItems}
    //         </View>
    //     );
    // });
    // setMonth = month => {  
    //     let monthNo = this.months.indexOf(month);// get month number  
    //     let dateObject = Object.assign({}, this.state.dateObject);  
    //     dateObject = moment(dateObject).set("month", monthNo); // change month value  
    //     this.setState({  
    //         dateObject: dateObject // add to state  
    //     });  
    // };  

    // props.data.map(data => {  
    //     months.push(  
    //     <td  
    //     key={data}  
    //     className="calendar-month"  
    //     onClick={e => {  
    //     this.setMonth(data);  
    //     }}  
    //     >  
    //     <span>{data}</span>  
    //     </td>  
    //     );  
    // });

    
    // return (
    //     <View>
    //         <Text style={{
    //             fontWeight: 'bold',
    //             fontSize: 18,
    //             textAlign: 'center'
    //         }}>
    //             {this.months[this.state.activeDate.getMonth()]}  
    //             {this.state.activeDate.getFullYear()}
    //         </Text> 
    //     </View>
    // )
    const renderEmptyDay = () => {
        return <View />;
      };
    
     //returns card for empty slots.
      const renderEmptyItem = () => {
        return (
            <Text >
             No slots in the calendar
            </Text>
        );
      };
    
    // Specify how each item should be rendered in the agenda
     const renderItems=(item, firstItemInDay) => {
        return <View />;
      }
    return (

        <View style={{flex:1, paddingTop: 50}}>
        
            <Agenda
            style={{height:6000}}
// The list of items that have to be displayed in the Agenda
  items={{
    '2024-02-14': [{name: 'item 1'}],
    '2022-05-23': [{name: 'item 2'}],
    '2022-05-24': [],
    '2022-05-25': [{name: 'item 3'}]
  }}
  renderDay={renderEmptyDay}
  renderEmptyData={renderEmptyItem}
  renderItem={renderItems}
  scrollEnabled={false}
  selected={new Date().toString()} //Initially selected day
  hideKnob={false} // Hide knob button. Default = false
  showClosingKnob // When `true` and `hideKnob` prop is `false`, the knob will always be visible and the user will be able to drag the knob up and close the calendar. Default = false
  theme={{
    backgroundColor: colors.darkGray,
    calendarBackground: colors.darkGray,
    textSectionTitleColor: colors.lavender,
    textSectionTitleDisabledColor: '#d9e1e8',
    selectedDayBackgroundColor: colors.cream,
    selectedDayTextColor: colors.darkGray,
    todayTextColor: colors.red,
    dayTextColor: colors.lavender,
    textDisabledColor: colors.mediumGray,
    dotColor: colors.lavender,
    selectedDotColor: colors.darkGray,
    arrowColor: colors.lavender,
    disabledArrowColor: '#d9e1e8',
    monthTextColor: colors.lavender,
    indicatorColor: 'blue',
    // textDayFontFamily: 'monospace',
    // textMonthFontFamily: 'monospace',
    // textDayHeaderFontFamily: 'monospace',
    textDayFontWeight: '300',
    textMonthFontWeight: 'bold',
    textDayHeaderFontWeight: '300',
    textDayFontSize: 16,
    textMonthFontSize: 16,
    textDayHeaderFontSize: 16
   }}
 />
 </View>
        
    )
}


export default CalendarScreen;