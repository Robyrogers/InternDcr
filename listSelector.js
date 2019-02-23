import React, {Component} from 'react'
import {
  Picker,
  Text,
  StyleSheet,
  View
} from 'react-native'

export default class ListSelector extends Component {
  
  constructor(props){
    super(props)
    this.state={
      value : ""
    }
  }

  handleChange = (val) => {
    this.setState({
      value: val
    })
  }

  render(){
    const picks = {}
    return(
      <View>
        <Text>{this.props.title}</Text>
        <Picker 
          selectedValue={this.state.value}
          onValueChange={this.handleChange}
        >
          <Picker.Item label='test' value='test' />
          <Picker.Item label='mewo' value='mewo' />
          <Picker.Item label='dog' value='dog' />
        </Picker>
      </View>
      
    )
  }
  
}