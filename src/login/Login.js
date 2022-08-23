import React from "react";
import { useJwt } from "react-jwt";
const token = "Your JWT";

const Login = () => {
  const myDecodedToken = decodeToken(token);
  const isMyTokenExpired = isExpired(token);
  return (
    <>
      <button onClick={login}></button>
    </>
  );
};

export default Login;
