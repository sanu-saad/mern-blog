import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <section>
      <div>
        <Link to="/">Go Back Home</Link>
        <h2>Page Not Found</h2>
      </div>
    </section>
  );
};

export default ErrorPage;
