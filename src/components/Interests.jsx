import React from "react";

import { auth } from "../firebase";

function Interests(props) {
  const user = auth.currentUser;
  return (
    <div>
      <h2>Welcome {user.displayName}</h2>
      <h2>Welcome {user.email}</h2>
      <h2>select your Interests</h2>
    </div>
  );
}

export default Interests;
