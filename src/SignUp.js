import React, { useState, useEffect } from "react";
import axios from "axios";
function SignUp(props) {
    let register = {};
    let [regName, setName] = useState();
    let [regEmail, setRegEmail] = useState();
    let [regPassword, setRegPassWord] = useState();

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
                 setName("");
              setRegEmail("");
              setRegPassWord("");
              props.history.push("/login")
            });
        }
      };


    return (
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
            onChange={registerPassword}
            className="form-control"
            type="password"
            name=""
            placeholder="Password"
            value={regPassword}
          ></input>
          <button
            onClick={registerData}
            className="btn btn-primary  form-control mt-2 mb-2"
            type="submit"
          >
            Register
          </button>
     
        </form>
      </div>
    )
}


export default SignUp