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
import Login from "./Login";
import FileUpload from "./FileUpload";
function App() {
  let checkspinner = true;
  let [searchtext, setSearchtext] = useState();
  const [cakeData, setCakeData] = useState(Cakelist);
  let cakeArray
  let function1 = function (serachString) {
    setSearchtext(serachString);
    console.log(".....",setSearchtext(serachString))
    if (serachString !== "") {
  
      const cakeArray = Cakelist.filter((el) =>
        el.name.toLowerCase().includes(serachString)
      );

      console.log(cakeArray);
      setCakeData(cakeArray);
      // return { cakeArray };
    } else {
      // return true;
      // alert("in else")
      cakeArray = Cakelist;
      setCakeData(cakeArray);
    }
  };

   let handleSearch = () => {

  };

  setTimeout(() => {
    checkspinner = false;
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
      {/* {checkspinner} */}

      {checkspinner && (
        <div className="container-fluid">
          <Navbar fun={function1}></Navbar>

          <Login></Login>
          <FileUpload></FileUpload>
          <Carousal></Carousal>
          <ComponentDidMount></ComponentDidMount>
          <div class="row">
{  cakeData.map((ele,index)=>{
    return(  

  <Cake data={ele} key={index}></Cake>

  )
})}
</div>

         

          {/* <SearchList serarchQuery={cakeData}> </SearchList> */}
        </div>
      )}
    </div>
  );
}

export default App;
