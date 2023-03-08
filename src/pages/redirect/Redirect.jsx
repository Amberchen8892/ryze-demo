import React, { useEffect } from "react";

function Redirect() {
  useEffect(() => {
    window.location.replace("https://app.myryze.com/customer_login.asp");
  }, []);
  return <div>Redirect to app.myryze.com</div>;
}

export default Redirect;
