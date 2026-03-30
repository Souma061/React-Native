import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Colors from '../constants/colors';


type DateItem = {
  month: string;
  day: number;
  weekday: string;
  key: string;
}

const generateDates = (): DateItem[] => {
  const base = new Date(2026, 3, 30); // Starting from March 30, 2026
  return Array.from({ length: 5 }, (_, i) => {
    const date = new Date(base);
    date.setDate(base.getDate() + i)
    return {
      month: date.toLocaleString('default', { month: 'short' }),
      day: date.getDate(),
      weekday: date.toLocaleString('default', { weekday: 'short' }),
      key: date.toISOString().split('T')[0],
    }
  })

}

const dates = generateDates();
const DEFAULT_SELECTED_DATE = dates[0].key;

const DateSelector = () => {
  const [selectedDate, setSelectedDate] = useState<string>(DEFAULT_SELECTED_DATE);
  return (
    <View style={styles.container}>
      {
        dates.map((date) => {
          const isSelected = date.key === selectedDate;
          return (
            <TouchableOpacity
              key={date.key}
              style={[styles.dateItem, isSelected && styles.dateItemSelected]}
              onPress={() => setSelectedDate(date.key)}
            >
              <Text style={[styles.month, isSelected && styles.selectedText]}>
                {date.month}
              </Text>
              <Text style={[styles.day, isSelected && styles.selectedText]}>
                {date.day}
              </Text>
              <Text style={[styles.weekday, isSelected && styles.selectedText]}>
                {date.weekday}
              </Text>
            </TouchableOpacity>
          );
        })
      }
    </View>
  )
}

export default DateSelector

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "stretch",
    paddingVertical: 10,
  },
  dateItem: {
    flex: 1,
    alignItems: "center",
    paddingVertical: 12,
    paddingHorizontal: 8,
    borderRadius: 20,
    marginHorizontal: 4,
  },
  dateItemSelected: {
    backgroundColor: Colors.primary,
  },
  month: {
    fontSize: 12,
    color: Colors.textSecondary,
    marginBottom: 6,
  },
  day: {
    fontSize: 22,
    fontWeight: "700",
    color: Colors.textPrimary,
    marginBottom: 6,
  },
  weekday: {
    fontSize: 12,
    color: Colors.textSecondary,
  },
  selectedText: {
    color: "#FFFFFF",
  },
});
