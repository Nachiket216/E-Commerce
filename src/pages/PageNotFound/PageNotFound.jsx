import { Link } from "react-router-dom";

export const PageNotFound = () => {
  document.title = "404 Page Not Found";

  return (
    <>
      <h1>Page Not Found</h1>
      <Link to="/">Back to Home</Link>
    </>
  );
};
