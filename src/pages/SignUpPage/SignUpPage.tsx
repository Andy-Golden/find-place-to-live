import React from "react";

const SignUpPage = (): JSX.Element => {
  return (
    <form>
      <input type="text" placeholder="Fullname" />
      <input type="email" placeholder="Email" />
      <input type="password" placeholder="Password" />
      <input type="password" placeholder="Confirm password" />
      <button type="submit">Submit</button>
    </form>
  );
};

export default SignUpPage;
