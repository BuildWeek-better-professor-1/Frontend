import React from "react";
import SignoutImage from "../assets/signoutimage.svg";

const SignoutMessage = () => {
  return (
    <>
      {/* Will Redirect after 5 seconds. */}
      <meta http-equiv="refresh" content="3;url=/proflogin" />
      <img className="signout-image" src={SignoutImage} />
      <h2>You have been logged out.</h2>
      <p>you will be redirected in 3 seconds. Please Wait...</p>
    </>
  );
};

export default SignoutMessage;
