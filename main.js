import React, {Component} from 'react'
import Body from './body'

export default class Main extends Component{
  constructor(props){
    super(props)
    this.state = {
      data: {}
    }
  }

  
  componentWillUpdate(){
    fetch('https://raw.githubusercontent.com/appinion-dev/intern-dcr-data/master/data.json')
    .then(response => response.json())
    .then(result => this.setState({
      data: result
    }))
  }

  render(){
    console.log(this.state.data)
    return(
      <Body>
      </Body>
    )
  }
}