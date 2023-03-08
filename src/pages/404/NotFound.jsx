import React from "react";
import notFound from "../../images/404-error.svg";
import { useNavigate } from "react-router-dom";
import "./style.css";
function NotFound() {
  const nav = useNavigate();
  return (
    <div className="container notfound">
      <div>
        <div>
          <img src={notFound} alt="Page Not Found" />
        </div>
        <div className="center">
          <button
            onClick={() => nav(-1)}
            className="signup-button backhome-button"
          >
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
