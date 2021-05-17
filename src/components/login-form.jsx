import React, { useEffect, useState } from "react";
import firebase from "firebase";
import { auth } from "../firebase";

function LoginForm(props) {
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) history.push("/interests");
    });
  }, []);
  const onGoogleLogin = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider).catch((e) => {
      console.error(e);
    });
  };
  const onFaceLogin = () => {
    const provider = new firebase.auth.FacebookAuthProvider();

    auth.signInWithPopup(provider).catch((e) => {
      console.error(e);
    });
  };
  return (
    <div className="container ow align-items-center justify-content-center">
      <div className="mb-4">
        <h3>Sign In</h3>
        <p className="mb-4">
          Lorem ipsum dolor sit amet elit. Sapiente sit aut eos consectetur
          adipisicing.
        </p>
      </div>
      <form action="#" method="post">
        <div className="form-group first">
          <label for="username">Username</label>
          <input type="text" className="form-control" id="username" />
        </div>
        <div className="form-group last mb-3">
          <label for="password">Password</label>
          <input type="password" className="form-control" id="password" />
        </div>
        <div className="d-flex mb-5 align-items-center">
          <label className="control control--checkbox mb-0">
            <span className="caption">Remember me</span>
            <input type="checkbox" checked="checked" />
            <div className="control__indicator"></div>
          </label>
          <span className="ml-auto">
            <a href="#" className="forgot-pass">
              Forgot Password
            </a>
          </span>
        </div>
        <input
          type="submit"
          value="Log In"
          className="btn btn-block btn-primary"
        />
        <span className="d-block text-center my-4 text-muted">
          &mdash; or &mdash;
        </span>
        <div className="social-login">
          <a
            onClick={onFaceLogin}
            className="btn-primary btn d-flex justify-content-center align-items-center m-1"
          >
            <span className="icon-facebook mr-3"></span> Login with Facebook
          </a>
          <a className="btn-info btn d-flex justify-content-center align-items-center m-1">
            <span className="icon-twitter mr-3"></span> Login with Twitter
          </a>
          <a
            onClick={onGoogleLogin}
            className=" btn-danger btn d-flex justify-content-center align-items-center m-1"
          >
            <span className="icon-google mr-3"></span> Login with Google
          </a>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;
