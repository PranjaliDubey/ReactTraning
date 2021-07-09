import React, { Component } from 'react';
import Loader from "react-loader-spinner";
class ComponentDidMount extends Component {

    constructor(props){
      super(props);
      this.state = {
        data: 'Jordan Belfort'
      };
    //   alert(this.data)
    //   this.getData();
      
    }
  
    getData(){
      setTimeout(() => {
        console.log('Our data is fetched');
        this.setState({
          data: 'Hello WallStreet'
        });
        this.render()
      }, 10000)
    }
  
//     componentDidMount(){
//  this.getData();
//     // alert("h4lllllllllllll")
//     }
  
    render() {
      return(
        <div>
        {this.state.data}
      </div>
      
      )
    }
  }
  
  export default ComponentDidMount;