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
import { BrowserRouter as Router, Route ,Switch} from "react-router-dom";
import Home from "./Home";
import CakeDetails from "./cakeDetails";
import CakesRouting from "./CakesRouting";
import SignUp from "./SignUp"




function App() {

  let [searchtext, setSearchtext] = useState("");
  let function1 = function (searchstring) {
    setSearchtext(searchstring);
  };
  useEffect(() => {}, []);

  // eslint-disable-next-line no-undef
  // state = {
  //   loading: true,
  // };
  // componentDidMount() {
  //   this.fakeRequest().then(() => {
  //     const el = document.querySelector(".loader-container");
  //     if (el) {
  //       el.remove(); // removing the spinner element
  //       this.setState({ loading: false }); // showing the app
  //     }
  //   });
  // }

  // fakeRequest = () => {
  //   return new Promise((resolve) => setTimeout(() => resolve(), 2500));
  // };
  const [isLoading, setLoading] = useState(true);

  function fakeRequest() {
    return new Promise(resolve => setTimeout(() => resolve(), 5000));
  }

  useEffect(() => {
    fakeRequest().then(() => {
      const el = document.querySelector(".loader-container");
      if (el) {
        el.remove();
        setLoading(!isLoading);
      }
    });
  }, []);
 
  let checkspinner = true;
  const [cakeData, setCakeData] = useState(Cakelist);


  setTimeout(() => {
    checkspinner = false;
  }, 10000);

  const style = { position: "fixed", top: "50%", left: "50%", transform: "translate(-50%, -50%)" };
    if (isLoading) {
      return <div style={style}>
        <Loader
      className="d-flex flex-direction-column"
      type="ThreeDots"
      color="#00BFFF"
      height={100}
      width={100}
      timeout={1000000} 
    /> 
        </div> //app is not ready (fake request is in process)  
    }
  return (


    <div className="App">
          <Router>

             <div className="container-fluid">
          <Navbar fun={function1}></Navbar>
          <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/login" component={Login}/>
          <Route exact path="/addFile" component={FileUpload}/>
          <Route exact path="/register" component={SignUp}/>
          {/* <Carousal></Carousal> */}
          {/* <ComponentDidMount></ComponentDidMount> */}
          <Route exact path="/cake">
          <div class="row">
            {cakeData.map((ele, index) => {
              return <Cake data={ele} key={index}></Cake>;
            })}
          </div>
          </Route>
          <Route exact path="/cake/:cakeid"  component={CakeDetails}></Route>
          <Route exact path="/search"  component={CakesRouting}>
            </Route>
        </Switch>
          {/* <SearchList serarchQuery={cakeData}> </SearchList> */}
        </div>
      
      </Router>
    </div>
  );
}

export default App;
