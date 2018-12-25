import React, { Component } from 'react';
import { FlatList, Text } from 'react-native';

class EventList extends Component {
    render() {
        return (
            <FlatList 
              data = {[{name : 'a', id : '1'}, {name : 'b', id : '2'}, {name : 'c', id : '3'}, {name : 'd', id : '4'}]}
              renderItem = {({item}) => <Text> {item.name} </Text> }
              keyExtractor = {item => item.id}
            />
        );
    }
}

export default EventList;