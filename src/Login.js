import { useState } from "react";
import axios from "axios";

function Login(props) {
  console.log("login",props)
  var [errorMessage, setErrorMess] = useState();
  var [emailId, setEmail] = useState();
  var [password, setPassword] = useState();

  let user = {};
  let register = {};
  var login = function () {
    console.log("User has entered login page", user);
    setErrorMess("logined failure");
    // alert(errorMessage)
    axios
      .post(`https://apifromashu.herokuapp.com/api/login`, user)
      .then((res) => {
        console.log(res);
        if (res) {
          setEmail("");
          setPassword("");
         localStorage.setItem("authtoken",res['data'].token)
         props.history.push("/search")
        }
      });
  };

  var handleEmail = function (e) {
    user.email = e.target.value;

  };
  var handlePassword = function (e) {
    user.password = e.target.value;
  };



  return (
    <div class="card mb-5">
      <div class="row mb-5">
        <div class="col-md-8 offset-md-4">
          <form className="w-50 ">
            <h1 className="alignCenter">Login Page</h1>
            <div class="form-group justify-content-start">
              <label for="exampleInputEmail1">Email address</label>
              <input
                value={emailId}
                onChange={handleEmail}
                className="form-control"
                type="email"
                name=""
                placeholder="Email"
              ></input>
              <label for="exampleInputEmail1">Password</label>

              <input
                onChange={handlePassword}
                value={password}
                className="form-control"
                type="password"
                name=""
                placeholder="password"
              ></input>

              <button
                className="btn btn-primary form-control mt-2"
                onClick={login}
                type="button"
              >
                Login
              </button>
              {/* {errorMessage} */}
            </div>
          </form>
        </div>
      </div>

  </div>
  );
}

export default Login;
