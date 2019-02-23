import React, {Component} from 'react'
import {
  View,
  Text,
  StyleSheet,
  TextInput
} from 'react-native'
import ListSelector from './listSelector'


export default class Body extends Component{
  constructor(props){
    super(props)  
  }
  
  styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center'
    },
    group1: {
      flex : 4
    },
    group2:{
      flex: 3
    },
    subGroup:{
      flexDirection: 'row',
      flex: 1,
      justifyContent: 'space-between'
    },
    text: {
      width: 40,
      borderLeftWidth: 2
    },
    select: {
      width: 50
    }
  })

  render(){
    return(
      <View style={this.styles.container}>
        <View style={this.styles.group1}>
          <View>
            <Text style={this.styles.welcome}>Intern DCR</Text>
          </View>
          <ListSelector title="Product Group" style={this.styles.select}></ListSelector>
          <View style={this.styles.subGroup}>
            <ListSelector title="Literature"></ListSelector>
            <TextInput style={this.styles.text} />
          </View>
          <View>
            <ListSelector title="Physician Sample"></ListSelector>
          </View>
          <View>
            <ListSelector title="Gift"></ListSelector>
          </View>
        </View>
        <View style={this.styles.group1}>
        </View>
      </View>
    )
  }
  
}