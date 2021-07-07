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
        <Loader
        type="ThreeDots"
        color="#00BFFF"
        height={100}
        width={100}
        timeout={3000} //3 secs
      />
      </div>
      
      )
    }
  }
  
  export default ComponentDidMount;