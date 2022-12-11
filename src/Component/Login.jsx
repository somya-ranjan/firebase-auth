import React from "react";
import { FacebookLoginButton } from "react-social-login-buttons";

function Login() {
  return (
    <div>
      <h1 className="text-2xl">Login</h1>
      <FacebookLoginButton
        onClick={() => console.log("console fab")}
        // style={{
        //   display: "flex",
        //   justifyContent: "center",
        //   width: "400px",
        //   margin: "auto",
        // }}
      />
    </div>
  );
}

export default Login;
