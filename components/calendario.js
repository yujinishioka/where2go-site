import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import DatePicker from '@react-native-community/datetimepicker';

import styles from '../styles/calendario';

export default class Calendario extends Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date(), showDatePicker: false };
  }

  toggleDatePicker = () => {
    this.setState({ showDatePicker: !this.state.showDatePicker });
  }

  setDate = (event, date) => {
    if (date !== undefined) {
      this.setState({ date: date, showDatePicker: false });
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this.toggleDatePicker}>
          <Text style={styles.text}>Data: {this.state.date.toLocaleDateString()}</Text>
        </TouchableOpacity>
        {this.state.showDatePicker && (
          <DatePicker
            style={{ width: 200 }}
            value={this.state.date}
            mode="date"
            display="default"
            minimumDate={new Date()}
            onChange={this.setDate}
          />
        )}
      </View>
    )
  }
}
