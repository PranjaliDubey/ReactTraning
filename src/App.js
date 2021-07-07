// import logo from "./logo.svg";
import "./App.css";
import React, { useState, useEffect } from "react";
import Navbar from "./NavBar";
import Carousal from "./Carousal";
import Cake from "./Cake";
// import Cakelist from './cakelist'
import SearchList from "./Search";
import Cakelist from "./cakelist";
import Loader from "react-loader-spinner";
import ComponentDidMount from "./ComponetDidMount";

function App() {

    let checkspinner=true
//   useEffect(() => {
//     // Update the document title using the browser API

//   });
  setTimeout(() => {

    checkspinner=false
        }, 10000);
  return (
    <div className="App">
      <Loader
        type="ThreeDots"
        color="#00BFFF"
        height={100}
        width={100}
        timeout={3000} //3 secs
      />
      {checkspinner}
{checkspinner && <div className="container-fluid">
      <Navbar></Navbar>
      <h2>Welcome to Nature world</h2>
      <Carousal></Carousal>
      <ComponentDidMount></ComponentDidMount>
      <div class="row">
{  Cakelist.map((ele,index)=>{
    return(  

  <Cake data={ele} key={index}></Cake>

  )
})}
</div>

    

      {/* <SearchList> </SearchList> */}

    </div>
    }
    </div>
  );
}

export default App;
