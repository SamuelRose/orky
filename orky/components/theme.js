
import * as colors from '../assets/colors.js';

export function getTheme() {
  const disabledColor = 'grey';

  return {
    reservationsBackgroundColor: colors.mediumGray,
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
    textDayHeaderFontSize: 16,
    agendaKnobColor:colors.cream
  };
}