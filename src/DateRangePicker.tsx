// Imports: Dependencies
import React, { useState } from 'react';
import { Dimensions, Platform, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import RNDateTimePicker from '@react-native-community/datetimepicker';
import Modal from 'react-native-modal';
import moment from 'moment';

// Screen Dimensions
const { height, width } = Dimensions.get('window');

// TypeScript: Types
interface Props {
  title?: string;
  mode: 'calendar' | 'spinner' | 'default';
  onFromChange: (date: any) => any;
  onToChange: (date: any) => any;
}

// Component: Date Range Picker
const DateRangePicker = (props: Props) => {
  // React Hooks: State
  const [ fromDateModalVisible, toggleFromDate ] = useState(false);
  const [ toDateModalVisible, toggleToDate ] = useState(false);
  const [ androidFromDateVisible, toggleFromDateAndroid ] = useState(false);
  const [ androidToDateVisible, toggleToDateAndroid ] = useState(false);
  const [ tempToDate, setTempToDate ] = useState(new Date());
  const [ tempFromDate, setTempFromDate ] = useState(new Date());
  const [ fromDate, setFromDate ] = useState(new Date());
  const [ toDate, setToDate ] = useState(new Date());

  // Toggle From Date Modal
  const toggleFromDateModal = () => {
    try {
      // Check Platform (iOS)
      if (Platform.OS === 'ios') {
        // React Hook: Toggle Modal
        toggleFromDate((fromDateModalVisible: boolean) => !fromDateModalVisible);
      }

      // Check Platform (Android)
      else if (Platform.OS === 'android') {
        // React Hook: Toggle Android
        toggleFromDateAndroid((androidFromDateVisible: boolean) => !androidFromDateVisible);
      }
    }
    catch (error) {
      console.log(error);
    }
  };

  // Toggle To Date Modal
  const toggleToDateModal = () => {
    try {
      // Check Platform (iOS)
      if (Platform.OS === 'ios') {
        // React Hook: Toggle Modal
        toggleToDate((toDateModalVisible: boolean) => !toDateModalVisible);
      }

      // Check Platform (Android)
      else if (Platform.OS === 'android') {
        // React Hook: Toggle Android
        toggleToDateAndroid((androidToDateVisible: boolean) => !androidToDateVisible);
      }
    }
    catch (error) {
      console.log(error);
    }
  };

  // Select From Date
  const selectFromDate = (event: any, date: Date) => {
    try {
      // Check Platform: Android
      if (Platform.OS === 'android') {
        // Undefined
        if (date === undefined) {
          // React Hook: Toggle From Date Android 
          toggleFromDateAndroid((androidFromDateVisible: boolean) => !androidFromDateVisible);
        }

        // Event Type: Set Date
        else if (event.type === 'set') {
          // React Hook: Toggle Android 
          toggleFromDateAndroid((androidFromDateVisible: boolean) => !androidFromDateVisible);
  
          // React Hook: Set From Date
          setFromDate(date);
  
          // React Props: onChange
          props.onFromChange(date);
        }
  
        // Event Type: Dismissed
        else if (event.type === 'dismissed') {
          // React Hook: Toggle Android
          toggleFromDate(false);
        }
      }

      // Check Platform: Android
      else if (Platform.OS === 'ios') {
        setTempFromDate(date);

        // React Props: onChange
        props.onFromChange(date);
      }
    }
    catch (error) {
      console.log(error);
    }
  };

  // Select To Date
  const selectToDate = (event: any, date: Date) => {
    try {
      // Check Platform: Android
      if (Platform.OS === 'android') {
        // Undefined
        if (date === undefined) {
          // React Hook: Toggle From Date Android 
          toggleToDateAndroid((androidToDateVisible: boolean) => !androidToDateVisible);
        }

        // Event Type: Set Date
        else if (event.type === 'set') {
          // React Hook: Toggle Android 
          toggleToDateAndroid((androidToDateVisible: boolean) => !androidToDateVisible);
  
          // React Hook: Set To Date
          setToDate(date);
  
          // React Props: onChange
          props.onToChange(date);
        }
  
        // Event Type: Dismissed
        else if (event.type === 'dismissed') {
          // React Hook: Toggle Android
          toggleToDate(false);
        }
      }

      // Check Platform: Android
      else if (Platform.OS === 'ios') {
        setTempToDate(date);

        // React Props: onChange
        props.onToChange(date);
      }
    }
    catch (error) {
      console.log(error);
    }
  };

  // Render From iOS Date Picker
  const renderFromIOSDatePicker = () => {
    try {
      return (
        <RNDateTimePicker
          mode="date"
          value={tempFromDate !== undefined ? tempFromDate : fromDate}
          onChange={(event: any, date: any) => selectFromDate(event, date)}
        />
      )
    }
    catch (error) {
      console.log(error);
    }
  };

  // Press Cancel (From Date)
  const pressCancelFromDate = () => {
    try {
      // React Hook: Set Temp Date
      setTempFromDate(fromDate);

      // Toggle Modal
      toggleFromDateModal(); 
    }
    catch (error) {
      console.log(error);
    }
  };

  // Press Done (From Date)
  const pressDoneFromDate = () => {
    try {
      // React Hook: Set Date
      setFromDate(tempFromDate);

      // Props: onChange
      props.onFromChange(fromDate);

      // Toggle Modal
      toggleFromDateModal(); 
    }
    catch (error) {
      console.log(error);
    }
  };

  // Render To iOS Date Picker (To Date)
  const renderToIOSDatePicker = () => {
    try {
      return (
        <RNDateTimePicker
          mode="date"
          value={tempToDate !== undefined ? tempToDate : toDate}
          onChange={(event: any, date: any) => selectToDate(event, date)}
        />
      )
    }
    catch (error) {
      console.log(error);
    }
  };

  // Press Cancel (To Date)
  const pressCancelToDate = () => {
    try {
      // React Hook: Set Temp Date
      setTempToDate(toDate);

      // Toggle Modal
      toggleToDateModal(); 
    }
    catch (error) {
      console.log(error);
    }
  };

  // Press Done (To Date)
  const pressDoneToDate = () => {
    try {
      // React Hook: Set Date
      setToDate(tempToDate);

      // Props: onChange
      props.onToChange(toDate);

      // Toggle Modal
      toggleToDateModal(); 
    }
    catch (error) {
      console.log(error);
    }
  };

  // Render To Date Android Picker
  const renderToDateAndroidPicker = () => {
    try {
      if (androidToDateVisible === true) {
        return (
          <RNDateTimePicker
            mode="date"
            display={props.mode}
            value={toDate}
            onChange={(event: any, date: any) => selectToDate(event, date)}
          />
        )
      }
    }
    catch (error) {
      console.log(error);
    }
  };

  // Render From Date Android Picker
  const renderFromDateAndroidPicker = () => {
    try {
      if (androidFromDateVisible === true) {
        return (
          <RNDateTimePicker
            mode="date"
            display={props.mode}
            value={fromDate}
            onChange={(event: any, date: any) => selectFromDate(event, date)}
          />
        )
      }
    }
    catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputTitleContainer}>
      <Text style={styles.inputTitle}>{props.title === undefined ? 'Date Range' : props.title}</Text>
      </View>

      <View style={styles.toFromDateContainer}>
        <TouchableOpacity onPress={() => toggleFromDateModal()} style={styles.dateInfoContainer}>
          <Text style={styles.dateText}>From</Text>
          <Text style={styles.text}>{moment(fromDate).format('MMM Do, YYYY')}</Text>
        </TouchableOpacity>

        <View>
          {androidFromDateVisible === true ? renderFromDateAndroidPicker() : null}
        </View>

        <Modal isVisible={fromDateModalVisible} style={styles.modal}>
          <View style={styles.modalContainer}>
            <View style={styles.pickerHeaderContainer}>
              <TouchableOpacity onPress={() => pressCancelFromDate()} >
                <Text style={styles.cancelText}>Cancel</Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => pressDoneFromDate()} >
                <Text style={styles.doneText}>Done</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.pickerContainer}>
              {renderFromIOSDatePicker()}
            </View>
          </View>
        </Modal>
      </View>

      <View style={styles.divider}></View>

      <View style={styles.toFromDateContainer}>
        <TouchableOpacity onPress={() => toggleToDateModal()} style={styles.dateInfoContainer}>
          <Text style={styles.dateText}>To</Text>
          <Text style={styles.text}>{moment(toDate).format('MMM Do, YYYY')}</Text>
        </TouchableOpacity>

        <View>
          {androidToDateVisible === true ? renderToDateAndroidPicker(): null}
        </View>

        <Modal isVisible={toDateModalVisible} style={styles.modal}>
          <View style={styles.modalContainer}>
            <View style={styles.pickerHeaderContainer}>
              <TouchableOpacity onPress={() => pressCancelToDate()} >
                <Text style={styles.cancelText}>Cancel</Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => pressDoneToDate()} >
                <Text style={styles.doneText}>Done</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.pickerContainer}>
              {renderToIOSDatePicker()}
            </View>
          </View>
        </Modal>
      </View>
    </View>
  );
}

// Styles
const styles = StyleSheet.create({
  container: {
    display: 'flex',
    width: width - 32,
    marginRight: 16,
    marginLeft: 16,
    justifyContent: 'center',
  },
  inputTitleContainer: {
    width: width,
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputTitle: {
    alignSelf: 'flex-start',
    fontFamily: 'System',
    fontSize: 24,
    fontWeight: '700',
    color: '#000',
  },
  toFromDateContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
  },
  dateInfoContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: width - 32,
  },
  dateText: {
    fontFamily: 'System',
    fontSize: 17,
    fontWeight: '600',
    color: '#000',
  },
  text: {
    fontFamily: 'System',
    fontSize: 17,
    fontWeight: '400',
    color: '#007AFF',
  },
  arrowForward: {
    color: 'black',
    opacity: .3,
    marginRight: 7,
  },
  divider: {
    borderColor: '#7D7D7D',
    borderBottomWidth: StyleSheet.hairlineWidth,
    marginTop: 12,
    marginBottom: 12,
  },
  modal: {
    margin: 0,
  },
  modalContainer: {
    height: '100%',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  pickerHeaderContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 40,
    width: width,
    backgroundColor: '#FAFAF8',
    borderColor: '#7D7D7D',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  pickerContainer: {
    height: 220,
    width: width,
    backgroundColor: 'white',
  },
  doneText: {
    fontFamily: 'System',
    color: '#007AFF',
    fontWeight: '600',
    fontSize: 17,
    marginRight: 16,
  },
  cancelText: {
    fontFamily: 'System',
    color: '#007AFF',
    fontWeight: '400',
    fontSize: 17,
    marginLeft: 16,
  },
});

// Exports
export default DateRangePicker;
