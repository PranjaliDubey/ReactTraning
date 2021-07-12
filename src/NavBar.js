import Cakelist from "./cakelist";
import Cake from "./Cake";
import { BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";

export default function Navbar(props) {
  let value1;

  function handleSearchInput(e) {
    value1 = e.target.value;
    // // console.log("...",this.value)
    //       Cakelist.filter((value,index)=>{
    //         if(value) {
    // return (
    //   <Cake data={value} key={index}></Cake>
    // )
    // }}
    // )
  }
  function onSubmit() {
    // props.fun(value1);
    console.log("....", props);
    props.history.push("/search")
    // Cakelist.filter((value1, index) => {
    //   if (value1) {
    //     return <Cake data={value1} key={index}></Cake>;
    //   }
    // });
  }
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#">
        Navbar
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link" href="#">
              Home <span className="sr-only">(current)</span>
            </a>
          </li>
        </ul>
        <form className="form-inline my-2 my-lg-0">
          <input
            onChange={handleSearchInput}
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          ></input>
          <button
            onClick={onSubmit}
            className="btn btn-outline-success my-2 my-sm-0"
            type="button"
          >
            Search
          </button>
        </form>
        <div className="form-inline my-2 my-lg-0">
          {true && (
             <Link to="/login"><button className="btn btn-primary my-2 my-sm-0 ml-2" type="button">
              Login
            </button></Link>
          )}
          {false && (
            <button className="btn btn-danger my-2 my-sm-0 ml-2" type="button">
              Logout
            </button>
          )}
        </div>
      </div>
    </nav>
  );
}
