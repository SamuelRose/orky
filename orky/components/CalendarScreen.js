
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import {Agenda, CalendarProvider, ExpandableCalendar, TimelineList} from 'react-native-calendars';

import React, { Component } from 'react';
import * as colors from '../assets/colors.js';
import {getTheme} from './theme.js';




function CalendarScreen({route, navigation})
{
    
    const renderEmptyDay = () => {
        return <View style={{backgroundColor:colors.mediumGray}} />;
      };
    
     //returns card for empty slots.
      const renderEmptyItem = () => {
        return (
          <View style={{backgroundColor:colors.mediumGray}}>
            <Text >
             No slots in the calendar
            </Text>
          </View>
        );
      };
    
    // Specify how each item should be rendered in the agenda
     const renderItems=(item, firstItemInDay) => {
        return (
        <TouchableOpacity style={[styles.item, {height: item.height}]}>
          <Text style={{color:colors.cream}}>
            {item.name}
          </Text>
        </TouchableOpacity>
        );
      }
    const renderEmptyDays = () => {
      return (
        <View>

        </View>
      )

      
    }

    
    return (

        <View style={{flex:1, backgroundColor: colors.mediumGray}}>
          <View style={{flexDirection: "row", paddingTop:30, height:100, color: colors.red}}>
              <TouchableOpacity style={{paddingTop:20, paddingLeft:20}}>
                <Text style={{color:colors.lavender, fontSize: 20}}>
                Back
                </Text>
              </TouchableOpacity>
              <TouchableOpacity style={{marginLeft:'auto', paddingTop:20, paddingRight:20}}>
                <Text  style={{color:colors.lavender, fontSize: 20}}>
                Add Event
                </Text>
              </TouchableOpacity>
          </View>
              <Agenda
              style={{height:1000, backgroundColor:colors.mediumGray}}
                // The list of items that have to be displayed in the Agenda
                  items={{
                    '2024-02-14': [],
                    '2024-02-14': [
                      {name: 'first event',
                       description: 'gotta go fast',
                       startTime: "8:00",
                       endTime: "9:00"},
                      {name: 'item 2'},
                      {name: 'item 3'}]
                  }}
                  renderDay={renderEmptyDay}
                  renderEmptyData={renderEmptyItem}
                  renderItem={renderItems}
                  scrollEnabled={false}
                  selected={new Date().toString()} //Initially selected day
                  hideKnob={false} // Hide knob button. Default = false
                  showClosingKnob={true} // When `true` and `hideKnob` prop is `false`, the knob will always be visible and the user will be able to drag the knob up and close the calendar. Default = false
                  sectionStyle={styles.section}
                  expandableKnobColor = {colors.lavender}
                  theme={getTheme()}
                />
              <View style={{paddingBottom:40}}>

                </View>
    </View>
        
    )

    
}


export default CalendarScreen;

const styles = StyleSheet.create({
  item: {
    backgroundColor: colors.darkGray,
    flex: 1,
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
    marginLeft: 10,
    marginTop: 17
  },
  emptyDate: {
    height: 15,
    flex: 1,
    paddingTop: 30
  },
  customDay: {
    margin: 10,
    fontSize: 24,
    color: 'green'
  },
  dayItem: {
    marginLeft: 34
  },
  section: {
    backgroundColor: colors.mediumGray
  }
});

// return 
    // (
    //   <View>
    //   <CalendarProvider
    //     // date={new Date()}
    //     // // onDateChanged={this.onDateChanged}
    //     // // onMonthChange={this.onMonthChange}
    //     // showTodayButton
    //     // disabledOpacity={0.6}
    //     // // numberOfDays={3}
    //   >
    //     <ExpandableCalendar
    //       // firstDay={1}
    //       // leftArrowImageSource={require('../img/previous.png')}
    //       // rightArrowImageSource={require('../img/next.png')}
    //       // markedDates={this.marked}
    //     />
    //     <TimelineList
    //       // events={eventsByDate}
    //       // timelineProps={this.timelineProps}
    //       //showNowIndicator
    //       // scrollToNow
    //       //scrollToFirst
    //       //initialTime={INITIAL_TIME}
    //     />
    //   </CalendarProvider>
        
    //     </View>
    // )

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