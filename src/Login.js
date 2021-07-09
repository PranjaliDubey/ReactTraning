import { useState } from "react";
import axios from "axios";

function Login() {
  var [errorMessage, setErrorMess] = useState();
  var [emailId, setEmail] = useState();
  var [password, setPassword] = useState();
  let [regName, setName] = useState();
  let [regEmail, setRegEmail] = useState();
  let [regPassword, setRegPassWord] = useState();
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
          // setName("");
          // setRegEmail("");
          // setRegPassWord("");
         console.log("ress",res['data'].token)
         localStorage.setItem("authtoken",res['data'].token)
        }


      });
  };

  var handleEmail = function (e) {
    user.email = e.target.value;
    // setEmail(e.target.value);
    // console.log("wwwmmmm", emailId);
  };
  var handlePassword = function (e) {
    user.password = e.target.value;
  };
  var registerName = function (e) {
    register.name = e.target.value;
  };
  var registerPassword = function (e) {
    register.password = e.target.value;
  };
  var registerEmail = function (e) {
    register.email = e.target.value;
  };

  var registerData = function (e) {
    if (
      register.email === undefined ||
      register.password === undefined ||
      register.name === undefined
    ) {
      alert("please provide details");
    } else {
      axios
        .post(`https://apifromashu.herokuapp.com/api/register`, register)
        .then((res) => {
          console.log(res);
          console.log(res.data);
        });
    }
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

      <div class="col-md-8 offset-md-4">
        <form className="w-50">
          <h1 className="alignCenter">Sign Up Page</h1>
          <label for="exampleInputEmail1">Name</label>
          <input
            onChange={registerName}
            className="form-control"
            type="name"
            name=""
            placeholder="Name"
            value={regName}
          ></input>
          <label for="exampleInputEmail1"> Email</label>
          <input
            onChange={registerEmail}
            className="form-control"
            type="name"
            name=""
            placeholder="Email"
            value={regEmail}
          ></input>
          <label for="exampleInputEmail1"> Password</label>
          <input
            onChange={regPassword}
            className="form-control"
            type="password"
            name=""
            placeholder="Password"
          ></input>
          <button
            onClick={registerData}
            className="btn btn-primary  form-control mt-2 mb-2"
            type="submit"
          >
            Register
          </button>
          {errorMessage}
        </form>
      </div>
    </div>
  );
}

export default Login;
