import React from "react";
import { useParams } from "react-router-dom";

function Common() {
  const { menu } = useParams();

  return (
    <>
      <div className="center-content-wrapper">
        <h2>
          Welcome to <span className="content-color">{menu}</span> Page
        </h2>
      </div>
    </>
  );
}
export default Common;
