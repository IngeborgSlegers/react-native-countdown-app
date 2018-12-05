import React, {Component} from 'react';
import {FlatList, Text, StyleSheet} from 'react-native';
import ActionButton from 'react-native-action-button';
import EventCard from './EventCard';
import 

const styles = StyleSheet.create({
  list: {
    flex: 1,
    paddingTop: 20, 
    backgroundColor: '#f3f3f3'
  },
});

export default class EventList extends Component {
  // constructor(props) {
  //   super(props)
    state = {
      events: []
    }
  // }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        events: this.state.events.map(evt => ({
          ...evt,
          timer: Date.now(),
        }))
      });
    }, 1000);

    const events = require('./db.json').events.map(e => ({
      ...e,
      date: new Date(e.date),
    }));
    this.setState({ events })
  }

  handleAddEvent = () => {
    this.props.navigation.navigate('form');
  }

  render() {
    return [
      <FlatList 
      key="flatlist"
      data={this.state.events}
      style={styles.list}
      keyExtractor={item => item.id}
      renderItem={({item}) => (
        <EventCard 
          event={item} 
        />
      )}
      />,
      <ActionButton
        key="fab"
        onPress={this.handleAddEvent}
        buttonColor="rgba(231, 76, 60, 1)"
      />
    ] 
  }
}